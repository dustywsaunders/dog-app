import *  as React from 'react';

// const random = Math.floor(Math.random() * 87)

export default function Image(props) {
  // console.log(props);
  
  return (
    <div className = "Image">
      <p className="Guess">Can you guess the dog breed?</p>
      <img className="Dogimage" src={ props.image } alt='img'></img>
    </div>
  )}

