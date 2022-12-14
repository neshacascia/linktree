import React from 'react';

export default function Button(props) {
  return (
    <div className="btn-container">
      <a className="btn" href={props.href} target="_blank">
        {props.site}
      </a>
    </div>
  );
}
