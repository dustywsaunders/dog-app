import *  as React from 'react';

// const random = Math.floor(Math.random() * 87)

export default function Image(props) {
  // console.log(props);
  
  return (
    <div className = "Image">
      <img className="Dogimage" src={ props.image } alt='img'></img>
    </div>
  )}

