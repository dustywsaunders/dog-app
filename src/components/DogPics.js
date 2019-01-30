import *  as React from 'react';

const random = Math.floor(Math.random() * 87)

export default function DogPics(props) {
  console.log(props);
  
  return (
    <div className="AllOptions">
      <button className="Option" >{Object.keys(props.breeds)[random]}</button>
      <button className="Option" >{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
      <button className="Option" >{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
    </div>
  )}

    