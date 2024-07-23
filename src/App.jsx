import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage";
import OrganicPage from "./pages/OrganicPage";
import NotFoundPage from "./pages/NotFoundPage";
import InOrganicPage from "./pages/InOrganicPage";
import B3Page from "./pages/B3Page";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organic" element={<OrganicPage />} />
        <Route path="/inorganic" element={<InOrganicPage />} />
        <Route path="/b3" element={<B3Page />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
