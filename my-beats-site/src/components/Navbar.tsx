import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🎧 El Kevin Beats</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/beats" style={styles.link}>Beats</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    backgroundColor: "#121212",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    color: "#fbfbfbff",
    margin: 0,
    fontWeight: "700",
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "2rem",
  },
  link: {
  color: "rgba(255, 255, 255, 1)",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s, text-shadow 0.3s",
},

};
