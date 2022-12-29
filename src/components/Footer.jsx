import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function MusicCard(props) {
  return (
    <footer>
      <h4 className={props.theme ? '' : 'light'}>
        made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by Nesha
      </h4>
    </footer>
    // <div className="spotify-card">
    //   <img className="song-artwork" />

    //   <div className="song-info">
    //     <img className="spotify-logo" />
    //     <span className="status"></span>
    //     <span className="song-title"></span>
    //     <span className="song-artist"></span>
    //   </div>
    // </div>
  );
}
