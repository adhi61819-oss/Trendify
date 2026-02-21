import React, { useRef, useState } from "react";
import "../styles/Trendify.css";

// Minimal sample songs for Trendify (replace with your own audio files if needed)
const songs = [
  {
    title: "Rise Up",
    artist: "Synthwave",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Moonlight Ride",
    artist: "Dreamscape",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Sunset Drive",
    artist: "Chillhop",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

function Trendify() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const playSong = (idx) => {
    setCurrent(idx);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="trendify-container">
      <h2 className="trendify-title">Trendify 🎶</h2>
      <ul className="songs-list">
        {songs.map((song, idx) => (
          <li
            key={song.url}
            onClick={() => playSong(idx)}
            className={`song-item ${idx === current ? "active" : ""}`}
          >
            <span className="song-info">
              {song.title} <span className="song-artist">— {song.artist}</span>
            </span>
            {isPlaying && idx === current ? <span className="play-indicator">▶️</span> : null}
          </li>
        ))}
      </ul>
      <div className="now-playing">
        <div className="now-playing-label">Now Playing</div>
        <div className="now-playing-title">{songs[current].title}</div>
        <div className="now-playing-artist">{songs[current].artist}</div>
        <button onClick={togglePlay} className="play-button">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <audio
          ref={audioRef}
          src={songs[current].url}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
      <footer className="trendify-footer">
        <span>Trendify &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default Trendify;