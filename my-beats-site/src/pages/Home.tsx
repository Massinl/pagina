import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // make sure your client is set up

interface Beat {
  id: number;
  title: string;
  genre: string;
  image_url: string;
}

export default function Home() {
  const [featuredBeats, setFeaturedBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeats = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("beats") // make sure your table is called 'beats'
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching beats:", error);
      } else {
        setFeaturedBeats(data || []);
      }
      setLoading(false);
    };

    fetchBeats();
  }, []);

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

        {loading ? (
          <p style={{ color: "#aaa" }}>Cargando...</p>
        ) : featuredBeats.length === 0 ? (
          <p style={{ color: "#aaa", fontStyle: "italic" }}>
            Subiré algunos features pronto
          </p>
        ) : (
          <div style={styles.beatsGrid}>
            {featuredBeats.map((beat) => (
              <div key={beat.id} style={styles.beatCard}>
                <div
                  style={{
                    ...styles.beatImage,
                    backgroundImage: `url(${beat.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h3 style={styles.beatTitle}>{beat.title}</h3>
                <p style={styles.beatGenre}>Genre: {beat.genre}</p>
              </div>
            ))}
          </div>
        )}
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
    transition: "transform 0.3s ease",
  },
  beatImage: {
    height: "180px",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  beatTitle: { fontSize: "1.2rem", margin: "0.5rem 0" },
  beatGenre: { color: "#bbb", fontSize: "0.9rem" },
};
