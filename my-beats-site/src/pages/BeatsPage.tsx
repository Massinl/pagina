import React from "react";
import "./BeatsPage.css";

const beats = [
  {
    id: 1,
    title: "Midnight Drive",
    description: "Chill trap beat with ambient vibes.",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
    prices: {
      mp3: "$30",
      drumsOnly: "$45",
      exclusive: "$120",
    },
  },
  {
    id: 2,
    title: "Street Heat",
    description: "Aggressive drill-inspired beat.",
    img: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
    prices: {
      mp3: "$35",
      drumsOnly: "$50",
      exclusive: "$150",
    },
  },
  {
    id: 3,
    title: "Neon Dreams",
    description: "Synthwave beat for late-night vibes.",
    img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=800&q=80",
    prices: {
      mp3: "$25",
      drumsOnly: "$40",
      exclusive: "$100",
    },
  },
];

export default function BeatsPage() {
  return (
    <div className="beats-container">
      <h1 className="beats-title">Available Beats</h1>
      <p className="beats-subtitle">Choose your vibe. Pick your rights.</p>

      <div className="beats-grid">
        {beats.map((beat) => (
          <div key={beat.id} className="beat-card">
            <img src={beat.img} alt={beat.title} className="beat-img" />
            <h2>{beat.title}</h2>
            <p className="beat-description">{beat.description}</p>
            <div className="price-options">
              <button className="price-btn">MP3 – {beat.prices.mp3}</button>
              <button className="price-btn">Drums Only – {beat.prices.drumsOnly}</button>
              <button className="price-btn exclusive">
                Exclusive Rights – {beat.prices.exclusive}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
