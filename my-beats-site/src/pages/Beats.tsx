import { useState } from "react";

export default function Beats() {
  const [beats] = useState([
    {
      id: 1,
      title: "Midnight Flow",
      genre: "Trap",
      licenses: [
        { type: "MP3 License", price: 25 },
        { type: "Drums Only", price: 40 },
        { type: "Exclusive Ownership", price: 120 },
      ],
    },
    {
      id: 2,
      title: "Ocean Dreams",
      genre: "Lo-Fi",
      licenses: [
        { type: "MP3 License", price: 20 },
        { type: "Drums Only", price: 35 },
        { type: "Exclusive Ownership", price: 100 },
      ],
    },
    {
      id: 3,
      title: "No Sleep",
      genre: "Drill",
      licenses: [
        { type: "MP3 License", price: 30 },
        { type: "Drums Only", price: 50 },
        { type: "Exclusive Ownership", price: 140 },
      ],
    },
  ]);

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>🎵 My Beats</h1>
        <p style={styles.subtitle}>
          Choose your license — from simple MP3s to full ownership.
        </p>
      </section>

      <div style={styles.grid}>
        {beats.map((beat) => (
          <div
            key={beat.id}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3 style={styles.beatTitle}>{beat.title}</h3>
            <p style={styles.genre}>{beat.genre}</p>

            <div style={styles.licenseContainer}>
              {beat.licenses.map((license, idx) => (
                <div key={idx} style={styles.licenseBox}>
                  <p style={styles.licenseType}>{license.type}</p>
                  <p style={styles.price}>${license.price}</p>
                  <button
                    style={{
                      ...styles.btn,
                      backgroundColor:
                        license.type === "Exclusive Ownership"
                          ? "#E1306C"
                          : "#1e90ff",
                    }}
                  >
                    Buy
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0d0d0d",
    color: "#fff",
    minHeight: "100vh",
    padding: "4rem 2rem",
  },
  hero: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: { fontSize: "2.8rem", fontWeight: "700", marginBottom: "1rem" },
  subtitle: { fontSize: "1.2rem", color: "#aaa" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    padding: "1.5rem",
    textAlign: "center" as const,
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
  beatTitle: { fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.5rem" },
  genre: { color: "#aaa", marginBottom: "1rem" },
  licenseContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem",
  },
  licenseBox: {
    backgroundColor: "#111",
    padding: "0.8rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  licenseType: { fontSize: "1rem", marginBottom: "0.2rem", color: "#ccc" },
  price: { color: "#E1306C", fontWeight: "600", marginBottom: "0.5rem" },
  btn: {
    border: "none",
    borderRadius: "8px",
    padding: "0.4rem 0.8rem",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
