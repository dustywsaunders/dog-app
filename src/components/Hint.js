import *  as React from 'react';

export default function DogPics(props) {
  if (!props.known.includes(props.current)) {
  return (
      <p className="Hint">
      Hint: This dog breed's name has {props.current.length} letters. 
      It starts with '{props.current[0]}' and ends with '{props.current[props.current.length - 1]}'.
      </p>
    )
  }
  return (
    <p className='Hint'>BTW, you can also use the key arrows to select the answers</p>
  )
}