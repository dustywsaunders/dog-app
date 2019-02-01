import *  as React from 'react';
import Hint from './Hint'

export default function DogPics(props) {
  
  return (
    
  <div>
    <div>
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
      <Hint current={props.current} known={props.user.known}/>
  </div>
  )
}
