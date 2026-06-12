import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-900 text-white p-4 flex gap-8">

      <Link to="/">Dashboard</Link>

      <Link to="/scanner">Scanner</Link>

      <Link to="/threats">Threats</Link>

      <Link to="/phishing">Phishing</Link>

      <Link to="/reports">Reports</Link>

      <Link to="/analytics">Analytics</Link>

    </div>
  );
}

export default Navbar;