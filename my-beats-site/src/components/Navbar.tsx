import { Link } from "react-router-dom";
import './css/Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">🎧 KevBeats</h2>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/beats" className="link">Beats / Previews</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
    </nav>
  );
}

