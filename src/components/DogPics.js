import *  as React from 'react';

export default function DogPics(props) {
  
  return (
    
  <div>
    <div>
      <p className="Guess">Can you guess the dog breed?</p>
      <p className = "Hint">hint: This dog breed's name has {props.current.length} letters. It starts with '{props.current[0]}' and ends with '{props.current[props.current.length-1]}'.</p>
    </div>
    <div className="AllOptions">
  <button className="Option" onClick={props.handleCorrect} 
  style={{backgroundColor: props.localState.backgroundColor1, order: props.localState.buttonOrder[0]}}>
  {props.current}</button>
  <button className="Option" onClick={props.handleWrong1}
  style={{backgroundColor: props.localState.backgroundColor2, order: props.localState.buttonOrder[1]}}>
  {props.localState.dogName[0]}</button>
  <button className="Option" onClick={props.handleWrong2}
  style={{backgroundColor: props.localState.backgroundColor3, order: props.localState.buttonOrder[2]}}>
  {props.localState.dogName[1]}</button>
  </div>
  </div>
  )
}
