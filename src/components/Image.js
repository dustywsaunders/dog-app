import *  as React from 'react';

export default function Image(props) {
  return (
    <div className = "Image">
      <p className="Guess">Can you guess the dog breed?</p>
      <img className="Dogimage" src={ props.image } alt='img'></img>
    </div>
  )}