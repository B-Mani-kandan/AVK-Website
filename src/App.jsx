import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import ScrollToTop from "./ScrollToTop";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
      </Router>
    </>
  );
}

export default App;
