import React from 'react';
import memoji from '../assets/memoji.png';

export default function Header() {
  return (
    <header>
      <img className="header-img" src={memoji} />
      <div className="header-text">
        <h1>Nesha Mervin</h1>
        <span>passionate front-end developer</span>
      </div>
    </header>
  );
}
