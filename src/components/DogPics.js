import * as React from 'react'

export default function DogPics(props) {
  return (<div>
    <h1>All dogs</h1>

    There are { props.dogs.length } albums available.
  </div>)
}