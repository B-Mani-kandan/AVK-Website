import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx' 
import ContactPage from './pages/ContactPage.jsx' 
// --- ADD THESE IMPORTS ---
import ImportPage from './pages/ImportPage.jsx' 
import ExportPage from './pages/ExportPage.jsx' 
// --- END OF ADDITIONS ---
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The App component is the layout (Nav/Footer) */}
        <Route path="/" element={<App />}>
          
          {/* The default page shown at "/" is the AboutPage */}
          <Route index element={<AboutPage />} /> 
          
          {/* The page shown at "/contact" is the ContactPage */}
          <Route path="contact" element={<ContactPage />} />

          {/* --- ADD THESE ROUTES --- */}
          <Route path="import" element={<ImportPage />} />
          <Route path="export" element={<ExportPage />} />
          {/* --- END OF ADDITIONS --- */}
        
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)