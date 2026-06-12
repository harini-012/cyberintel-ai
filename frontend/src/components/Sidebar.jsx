import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        CyberIntel AI
      </div>

      <Link to="/">Dashboard</Link>

      <Link to="/scanner">
        Vulnerability Scanner
      </Link>

      

      <Link to="/phishing">
        Phishing Analyzer
      </Link>

      <Link to="/reports">
        Reports
      </Link>

      <Link to="/analytics">
        Analytics
      </Link>

    </div>
  );
}

export default Sidebar;