export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} My Beats | All rights reserved</p>
      <div style={styles.socials}>
        <span style={styles.social}>🐦</span>
        <span style={styles.social}>📸</span>
        <span style={styles.social}>🎵</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#121212",
    color: "#aaa",
    textAlign: "center",
    padding: "1rem 1rem",
    marginTop: "0rem",
  },
  socials: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
  social: {
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "color 0.3s",
  },
};
