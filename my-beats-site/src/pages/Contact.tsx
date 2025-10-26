// src/pages/Contact.tsx

// 1. Import the CSS file (assuming it's named Contact.css and is in the same directory)
import './css/Contact.css';

export default function Contact() {
  return (
    <div className="container">
      {/* Header */}
      <section className="hero">
        <h1 className="title">Quieres contactarme? 🎵</h1>
        <p className="subtitle">
          Si quieres trabajar conmigo o tienes alguna pregunta, no dudes en enviarme un mensaje.
        </p>
      </section>

      {/* Contact Form */}
      <section className="formSection">
        <form className="form">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input"
          />
          <textarea
            placeholder="Your Message"
            className="input"
          />
          <button
            type="submit"
            className="button"
        >
            Send Message
          </button>
        </form>
      </section>

      {/* Instagram Section */}
      <section className="socialsSection">
        <h2 className="socialTitle">Or find me on Instagram</h2>
        <a
          href="https://www.instagram.com/_jfontan" 
          target="_blank"
          rel="noopener noreferrer"
          className="instagramButton"        >
          📸 @KevinPirulo
        </a>
      </section>
    </div>
  );
}
