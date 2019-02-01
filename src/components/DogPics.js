import *  as React from 'react';
import Hint from './Hint'

export default function DogPics(props) {
  return (
    <div>
      <div>
        <p className="Guess">Can you guess the dog breed?</p>
        <Hint current={props.current} known={props.user.known}/>
      </div>
      <div className="AllOptions">
        <button className="Option" onClick={props.handleCorrect} 
        style={{backgroundColor: props.localState.backgroundColor1, 
        order: props.localState.buttonOrder[0]}}>{props.current}</button>
        <button className="Option" onClick={props.handleWrong1}
        style={{backgroundColor: props.localState.backgroundColor2, 
        order: props.localState.buttonOrder[1]}}>{props.localState.dogName[0]}</button>
        <button className="Option" onClick={props.handleWrong1}
        style={{backgroundColor: props.localState.backgroundColor3, 
        order: props.localState.buttonOrder[2]}}>{props.localState.dogName[1]}</button>
      </div>
    </div>   
  <div className = 'keymaps'>
    <img src={process.env.PUBLIC_URL + '/left.svg'} alt="logo"></img>
    <img src={process.env.PUBLIC_URL + '/down.svg'} alt="logo"></img>
    <img src={process.env.PUBLIC_URL + '/right.svg'} alt="logo"></img>
  </div>
  </div>
  )
}
