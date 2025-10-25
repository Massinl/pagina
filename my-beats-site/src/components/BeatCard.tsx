//individual beat card
import React from "react";
import "./BeatCard.css";

type Beat = {
  id: number;
  title: string;
  description: string;
  img: string;
  prices: {
    mp3: string;
    drumsOnly: string;
    exclusive: string;
  };
};

type BeatCardProps = {
  beat: Beat;
};

export default function BeatCard({ beat }: BeatCardProps) {
  return (
    <div className="beat-card">
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
  );
}
