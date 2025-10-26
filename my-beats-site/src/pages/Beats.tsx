import React, { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import "./css/BeatsPage.css";
import { FaPlay, FaPause } from "react-icons/fa";


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
  const [currentBeatId, setCurrentBeatId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const handlePlayPreview = (beat: Beat) => {
    console.log("Clicked play for:", beat.title);

    if (!beat.preview_url) {
      console.log("No preview available for this beat.");
      return;
    }

    // If an audio is already playing, pause it
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // If same beat is clicked again, stop playback
    if (currentBeatId === beat.id) {
      setCurrentBeatId(null);
      return;
    }

    // Create new audio and play
    const audio = new Audio(beat.preview_url);
    audioRef.current = audio;

    audio
      .play()
      .then(() => {
        console.log("Playback started for:", beat.title);
        setCurrentBeatId(beat.id);
      })
      .catch((err) => console.error("Playback error:", err));

    // Reset when audio ends
    audio.addEventListener("ended", () => {
      setCurrentBeatId(null);
      audioRef.current = null;
    });
  };

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
            <div className="beat-img-wrapper">
              <img
                src={beat.img || placeholderImg}
                alt={beat.title}
                className="beat-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = placeholderImg;
                }}
              />
              <button
                className="play-button"
                onClick={() => handlePlayPreview(beat)}
              >
                {currentBeatId === beat.id ? <FaPause/> : <FaPlay/>}
              </button>
            </div>

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
