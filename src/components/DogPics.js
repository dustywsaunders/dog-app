import *  as React from 'react';

// const arr = []
// while(arr.length < 3){
//     var r = Math.floor(Math.random()*10);
//     if(arr.indexOf(r) === -1) arr.push(r);
// } 

const orderButton = []
while(orderButton.length <= 2){
    var q = Math.floor(Math.random()*3);
    if(orderButton.indexOf(q) === -1) orderButton.push(q);
} 


export default function DogPics(props) {
  return (
    <div>
      <p className="Guess">Can you guess the dog breed?</p>
      {props.answer}
<div className="AllOptions">
  <button className="Option" onClick={props.handleCorrect} 
  style={{backgroundColor: props.localState.backgroundColor1, order: props.localState.buttonOrder[0]}}>
  {props.current}</button>
  <button className="Option" onClick={props.handleWrong1}
  style={{backgroundColor: props.localState.backgroundColor2, order: props.localState.buttonOrder[1]}}>
  {Object.keys(props.allbreeds)[props.localState.dogName[1]]}</button>
  <button className="Option" onClick={props.handleWrong2}
  style={{backgroundColor: props.localState.backgroundColor3, order: props.localState.buttonOrder[2]}}>
  {Object.keys(props.allbreeds)[props.localState.dogName[2]]}</button>
  </div>
  </div>
  )}

    