export default function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Chequea los beats que ando cocinando 🔥</h1>
        <p style={styles.subtitle}>
          Pistas de alta calidad para productores y artistas urbanos.
        </p>
        <button style={styles.button}>Explore beats</button>
      </section>

      {/* Featured Beats */}
      <section style={styles.beatsSection}>
        <h2 style={styles.sectionTitle}>🔥 Featured Beats 🔥</h2>
        <div style={styles.beatsGrid}>
          {new Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} style={styles.beatCard}>
                <div style={styles.beatImage}></div>
                <h3 style={styles.beatTitle}>Beat #{i + 1}</h3>
                <p style={styles.beatGenre}>Genre: Trap</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0d0d0d",
    color: "#fff",
    minHeight: "100vh",
    paddingBottom: "3rem",
  },
  hero: {
    textAlign: "center",
    padding: "5rem 2rem 3rem 2rem",
    background:
      "radial-gradient(circle at top center, #1f1f1f 0%, #0d0d0d 80%)",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#aaa",
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#e63946",
    border: "none",
    padding: "0.8rem 2rem",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  beatsSection: {
    padding: "3rem 2rem",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  beatsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    justifyContent: "center",
  },
  beatCard: {
    backgroundColor: "#1a1a1a",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(255,255,255,0.1)",
    transition: "transform 0.3s ease",
  },
  beatImage: {
    background:
      "linear-gradient(135deg, #e63946, #6a0572, #1a1a1a)",
    height: "180px",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  beatTitle: { fontSize: "1.2rem", margin: "0.5rem 0" },
  beatGenre: { color: "#bbb", fontSize: "0.9rem" },
};
