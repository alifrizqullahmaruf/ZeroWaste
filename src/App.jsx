import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage";
import OrganicPage from "./pages/OrganicPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organic" element={<OrganicPage />} />
      </Routes>
    </Router>
  )
}

export default App
