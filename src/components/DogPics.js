import *  as React from 'react';

const random = Math.floor(Math.random() * 87)
const random2 = Math.floor(Math.random() * 87)
const random3 = Math.floor(Math.random() * 87)


export default function DogPics(props) {
  
  return (
    <div>
      <p className="Guess">Can you guess the dog breed?</p>
      {props.answer}
<div className="AllOptions">
  <button className="Option" onClick={props.handleCorrect} 
  style={{backgroundColor: props.localState.backgroundColor1}}>{props.current}</button>
  <button className="Option" onClick={props.handleWrong1}
  style={{backgroundColor: props.localState.backgroundColor2}}>{Object.keys(props.allbreeds)[random2]}</button>
  <button className="Option" onClick={props.handleWrong2}
  style={{backgroundColor: props.localState.backgroundColor3}}>{Object.keys(props.allbreeds)[random3]}</button>
  </div>
  </div>
  )}

    