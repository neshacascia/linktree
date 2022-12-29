import React from 'react';
import memoji from '../assets/memoji.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <header>
      <img className="header-img" src={memoji} />
      <div className={`header-text ${props.theme ? '' : 'light'}`}>
        <h1>Nesha Mervin</h1>
        <span>passionate front-end developer</span>

        <div className="toggle-container">
          <FontAwesomeIcon
            className="toggle-icons"
            icon={faSun}
          ></FontAwesomeIcon>

          <label className="toggler">
            <input type="checkbox" />
            <span
              className={`slider round ${props.theme ? '' : 'light'}`}
              onClick={props.handleClick}
            ></span>
          </label>

          <FontAwesomeIcon
            className="toggle-icons"
            icon={faMoon}
          ></FontAwesomeIcon>
        </div>
      </div>
    </header>
  );
}
