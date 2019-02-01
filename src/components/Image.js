import *  as React from 'react';

export default function Image(props) {
  return (
    <div className = "Image">
      <img className="Dogimage" src={ props.image } alt='img'></img>
    </div>
  )}