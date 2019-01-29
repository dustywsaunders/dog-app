import *  as React from 'react';

const random = Math.floor(Math.random() * 87)

export default function DogPics(props) {
  console.log(props);
  
  return (
    <div>
      <p className="Guess">Can you guess the dog breed?</p>
   {/* <img className="Dogimage" src={props.img[Math.floor(Math.random()*props.img.length)]} alt='img'></img> */}
<div className="AllOptions">
  <button className="Option" >{Object.keys(props.breeds)[random]}</button>
  <button className="Option" >{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
  <button className="Option" >{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
  </div>
  </div>
  )}

  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[random]}</button>
  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
