import os
import numpy as np
import nltk
from nltk.tokenize import word_tokenize
from sentence_transformers import SentenceTransformer
from rank_bm25 import BM25Okapi

try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt', quiet=True)

KB_FILE = os.environ.get("KB_FILE", "AVK_Knowledge_Base_v1.txt")
if not os.path.exists(KB_FILE):
    raise FileNotFoundError(f"KB file not found: {KB_FILE}")
with open(KB_FILE, "r", encoding="utf-8") as f:
    document_lines = [l.strip() for l in f.read().splitlines() if l.strip()]

tokenized_corpus = [word_tokenize(line.lower()) for line in document_lines]
bm25 = BM25Okapi(tokenized_corpus) if tokenized_corpus else None

EMB_MODEL = os.environ.get("EMB_MODEL", "all-MiniLM-L6-v2")
sbert = SentenceTransformer(EMB_MODEL)
kb_embs = sbert.encode(document_lines, convert_to_numpy=True, show_progress_bar=False) if document_lines else np.empty((0, sbert.get_sentence_embedding_dimension()))

def _cosine(q_vec, mat):
    if mat.size == 0:
        return np.array([])
    qn = q_vec / (np.linalg.norm(q_vec) + 1e-12)
    mn = mat / (np.linalg.norm(mat, axis=1, keepdims=True) + 1e-12)
    return mn @ qn

def retrieve_hybrid(query: str, top_k: int = 8, alpha: float = 0.45):
    q = query.strip()
    if not q:
        return []
    
    top_idx = np.arange(min(top_k, len(document_lines)))
    bm25_scores = np.zeros(len(document_lines))

    if bm25 is not None:
        q_tok = word_tokenize(q.lower())
        bm25_scores = bm25.get_scores(q_tok)
        top_idx = np.argsort(bm25_scores)[::-1][:top_k]
    
    sbert_sims = np.zeros(len(top_idx))
    if kb_embs.size != 0:
        q_emb = sbert.encode([q], convert_to_numpy=True)[0]
        cand_embs = kb_embs[top_idx]
        sbert_sims = _cosine(q_emb, cand_embs)

    bm = np.array([bm25_scores[int(i)] for i in top_idx], dtype=float)
    
    bm_norm = (bm - bm.min()) / (bm.max() - bm.min()) if bm.size and (bm.max() - bm.min() > 0) else np.zeros_like(bm)
    
    sb_norm = (sbert_sims - sbert_sims.min()) / (sbert_sims.max() - sbert_sims.min()) if sbert_sims.size and (sbert_sims.max() - sbert_sims.min() > 0) else np.zeros_like(sbert_sims)

    combined = alpha * bm_norm + (1.0 - alpha) * sb_norm
    ranked = np.argsort(combined)[::-1]

    results = []
    for r in ranked:
        idx = int(top_idx[r])
        results.append({"index": idx, "line": document_lines[idx], "score": float(combined[r])})
    return results

def get_local_response(user_message: str) -> str:
    if not user_message or not user_message.strip():
        return "" 
    
    results = retrieve_hybrid(user_message, top_k=3, alpha=float(os.environ.get("RETRIEVAL_ALPHA", 0.45)))
    
    if not results:
        return ""
    
    return " | ".join([res["line"] for res in results])

def top_k_matches(query: str, k: int = 3):
    return retrieve_hybrid(query, top_k=k, alpha=float(os.environ.get("RETRIEVAL_ALPHA", 0.45)))[:k]

print("Bot Brain (v-Hybrid Search) loaded.")