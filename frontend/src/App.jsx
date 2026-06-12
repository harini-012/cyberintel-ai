import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import VulnerabilityScanner from "./pages/VulnerabilityScanner";

import PhishingAnalyzer from "./pages/PhishingAnalyzer";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">

        <Sidebar />

        <div className="main-content">

          <div className="topbar">
            <h2>Cyber Security Intelligence Platform</h2>
          </div>

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/scanner" element={<VulnerabilityScanner />} />
              
              <Route path="/phishing" element={<PhishingAnalyzer />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;