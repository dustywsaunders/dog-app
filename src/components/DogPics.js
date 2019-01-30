import *  as React from 'react';

// const random = Math.floor(Math.random() * 87)

export default function DogPics(props) {
  
  return (
    <div className="AllOptions">
      <button className="Option" >{ props.current }</button>
      <button className="Option" >{Object.keys(props.allbreeds)[Math.floor(Math.random() * 87)]}</button>
      <button className="Option" >{Object.keys(props.allbreeds)[Math.floor(Math.random() * 87)]}</button>
    </div>
  )}

    