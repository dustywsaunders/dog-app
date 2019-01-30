import *  as React from 'react';

const random = Math.floor(Math.random() * 87)
const random2 = Math.floor(Math.random() * 87)
const random3 = Math.floor(Math.random() * 87)

export default function DogPics(props) {
  console.log(props);
  
  return (
    <div>
      <p className="Guess">Can you guess the dog breed?</p>
      {props.answer}
   {/* <img className="Dogimage" src={props.img[Math.floor(Math.random()*props.img.length)]} alt='img'></img> */}
<div className="AllOptions">
  <button className="Option" onClick={props.handleCorrect} 
  style={{backgroundColor: props.localState.backgroundColor1}}>{Object.keys(props.breeds)[random]}</button>
  <button className="Option" onClick={props.handleWrong1}
  style={{backgroundColor: props.localState.backgroundColor2}}>{Object.keys(props.breeds)[random2]}</button>
  <button className="Option" onClick={props.handleWrong2}
  style={{backgroundColor: props.localState.backgroundColor3}}>{Object.keys(props.breeds)[random3]}</button>
  </div>
  </div>
  )}

  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[random]}</button>
  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
  // <button className="Option" onClick={this.handleOncClick}>{Object.keys(props.breeds)[Math.floor(Math.random() * 87)]}</button>
