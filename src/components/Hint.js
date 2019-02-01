import *  as React from 'react';

export default function DogPics(props) {
  if (!props.known.includes(props.current)) {
  return (
      <p className="Hint">
      hint: This dog breed's name has {props.current.length} letters. 
      It starts with '{props.current[0]}' and ends with '{props.current[props.current.length - 1]}'.
      </p>
    )
  }
  return (
    <p></p>
  )
}