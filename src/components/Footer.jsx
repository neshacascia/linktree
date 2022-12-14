import React from 'react';

export default function MusicCard() {
  return (
    <div className="spotify-card">
      <img className="song-artwork" />

      <div className="song-info">
        <img className="spotify-logo" />
        <span className="status"></span>
        <span className="song-title"></span>
        <span className="song-artist"></span>
      </div>
    </div>
  );
}
