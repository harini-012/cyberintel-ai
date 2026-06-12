import ThreatCard from "../components/ThreatCard";

function Dashboard() {
  return (
    <div className="page-container">

      {/* Hero Section */}
      <div className="hero-banner">

        <div>
          <h1>Cyber Security Intelligence Platform</h1>

          <p>
            AI-powered Vulnerability Assessment,
            Threat Intelligence, Phishing Detection,
            Risk Analysis and Automated Security Reporting.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Analysis
          </button>

          <button className="secondary-btn">
            View Reports
          </button>
        </div>

      </div>

      {/* Overview Section */}

      <div>

        <h2 className="section-title">
          Platform Overview
        </h2>

        <div className="cards-grid">

          <ThreatCard
            title="Vulnerability Assessment"
            description="Identify software vulnerabilities using CVE intelligence and security databases."
          />

          

          <ThreatCard
            title="Phishing Detection"
            description="Analyze suspicious URLs and identify phishing indicators."
          />

          <ThreatCard
            title="AI Risk Assessment"
            description="Generate intelligent risk ratings and mitigation recommendations."
          />
        





        </div>

      </div>

      {/* Features Section */}

      <div>

        <h2 className="section-title">
          Security Capabilities
        </h2>

        <div className="feature-grid">

          <div className="feature-box">
            🛡 CVE Intelligence
          </div>

          <div className="feature-box">
            🌐 Threat Monitoring
          </div>

          <div className="feature-box">
            📧 Phishing Detection
          </div>

          <div className="feature-box">
            📊 Risk Analytics
          </div>

          <div className="feature-box">
            🤖 AI Recommendations
          </div>

          <div className="feature-box">
            📄 PDF Report Generation
          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="panel">

        <h2 className="section-title">
          Platform Summary
        </h2>

        <p className="summary-text">

          CyberIntel AI provides an integrated security
          intelligence environment for vulnerability discovery,
          threat intelligence gathering, phishing analysis,
          risk evaluation and automated reporting.

          The platform combines real-time cybersecurity
          intelligence with AI-driven recommendations to help
          organizations improve their security posture.

        </p>

      </div>

    </div>
  );
}

export default Dashboard;