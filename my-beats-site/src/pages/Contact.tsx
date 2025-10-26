// src/pages/Contact.tsx

// 1. Import the CSS file (assuming it's named Contact.css and is in the same directory)
import './css/Contact.css';

export default function Contact() {
  return (
    // Replaced style={styles.container} with className="container"
    <div className="container">
      {/* Header */}
      {/* Replaced style={styles.hero} with className="hero" */}
      <section className="hero">
        {/* Replaced style={styles.title} with className="title" */}
        <h1 className="title">Quieres contactarme? 🎵</h1>
        {/* Replaced style={styles.subtitle} with className="subtitle" */}
        <p className="subtitle">
          Si quieres trabajar conmigo o tienes alguna pregunta, no dudes en enviarme un mensaje.
        </p>
      </section>

      {/* Contact Form */}
      {/* Replaced style={styles.formSection} with className="formSection" */}
      <section className="formSection">
        {/* Replaced style={styles.form} with className="form" */}
        <form className="form">
          <input
            type="text"
            placeholder="Your Name"
            // Replaced style={styles.input} with className="input"
            className="input"
          />
          <input
            type="email"
            placeholder="Your Email"
            // Replaced style={styles.input} with className="input"
            className="input"
          />
          <textarea
            placeholder="Your Message"
            // The textarea needed a special class to apply its unique height/resize styles from the CSS
            className="input"
            // Note: If you want to use the specific CSS selector for textarea:
            // className="input" is sufficient if you use the .form textarea.input CSS rule
          />
          <button
            type="submit"
            // Replaced style={styles.button} with className="button"
            className="button"
            // ⚠️ REMOVED INLINE JS HOVER EFFECTS: The hover transition (transform: scale) is now handled purely in the CSS file.
        >
            Send Message
          </button>
        </form>
      </section>

      {/* Instagram Section */}
      {/* Replaced style={styles.socialsSection} with className="socialsSection" */}
      <section className="socialsSection">
        {/* Replaced style={styles.socialTitle} with className="socialTitle" */}
        <h2 className="socialTitle">Or find me on Instagram</h2>
        <a
          href="https://www.instagram.com/_jfontan" // replace with your Instagram
          target="_blank"
          rel="noopener noreferrer"
          // Replaced style={styles.instagramButton} with className="instagramButton"
          className="instagramButton"
          // ⚠️ REMOVED INLINE JS HOVER EFFECTS: The hover transition (transform: scale) is now handled purely in the CSS file.
        >
          📸 @KevinPirulo
        </a>
      </section>
    </div>
  );
}

// ❌ The const styles = { ... } object is completely removed as styles are now external.