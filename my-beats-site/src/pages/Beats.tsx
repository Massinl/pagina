import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./css/BeatsPage.css";

type Beat = {
  id: number;
  title: string;
  description: string;
  img?: string;
  mp3_price: string;
  drums_price: string;
  exclusive_price: string;
  preview_url?: string;
};

const placeholderImg = "https://via.placeholder.com/400x200?text=No+Image";

export default function BeatsPage() {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeats = async () => {
      const { data, error } = await supabase.from("beats").select("*");
      if (error) {
        console.error("Error fetching beats:", error.message);
      } else {
        setBeats(data || []);
      }
      setLoading(false);
    };

    fetchBeats();
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center", color: "#ccc", marginTop: "2rem" }}>
        Loading beats...
      </p>
    );

  return (
    <div className="beats-container">
      <h1 className="beats-title">Available Beats</h1>
      <p className="beats-subtitle">Choose your vibe. Pick your rights.</p>

      <div className="beats-grid">
        {beats.map((beat) => (
          <div key={beat.id} className="beat-card">
            <img
              src={beat.img || placeholderImg}
              alt={beat.title}
              className="beat-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderImg;
              }}
            />
            <h2>{beat.title}</h2>
            <p className="beat-description">{beat.description}</p>
            <div className="price-options">
              <button className="price-btn">MP3 – {beat.mp3_price}$</button>
              <button className="price-btn">Drums Only – {beat.drums_price}$</button>
              <button className="price-btn exclusive">
                Exclusive Rights – {beat.exclusive_price}$
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
