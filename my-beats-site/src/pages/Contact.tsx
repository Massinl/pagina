// src/pages/Contact.tsx
export default function Contact() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Quieres contactarme? 🎵</h1>
        <p style={styles.subtitle}>
          Si quieres trabajar conmigo o tienes alguna pregunta, no dudes en enviarme un mensaje.
        </p>
      </section>

      {/* Contact Form */}
      <section style={styles.formSection}>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
          />
          <textarea
            placeholder="Your Message"
            style={{ ...styles.input, height: "120px", resize: "none" }}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            Send Message
          </button>

        </form>
      </section>

      {/* Instagram Section */}
      <section style={styles.socialsSection}>
        <h2 style={styles.socialTitle}>Or find me on Instagram</h2>
        <a
          href="https://www.instagram.com/_jfontan" // replace with your Instagram
          target="_blank"
          rel="noopener noreferrer"
          style={styles.instagramButton}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          📸 @KevinPirulo
        </a>
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
    padding: "4rem 2rem 2rem 2rem",
  },
  title: { fontSize: "2.8rem", fontWeight: "700", marginBottom: "1rem" },
  subtitle: { fontSize: "1.2rem", color: "#aaa" },

  formSection: { display: "flex", justifyContent: "center", padding: "2rem" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: "1rem",
  },
  button: {
  backgroundColor: "#e63946",
  border: "none",
  padding: "0.8rem",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(230,57,70,0.4)", // shadow effect like Instagram button
},


  socialsSection: { textAlign: "center", marginTop: "3rem" },
  socialTitle: { fontSize: "1.5rem", marginBottom: "1rem" },
  instagramButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.8rem 2rem",
    backgroundColor: "#E1306C",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(225,48,108,0.4)",
  },
};
