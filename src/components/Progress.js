import *  as React from 'react';

export default function Progress(props) {

  let successRate = function (p, w) {
    if (p === 0) { return 0 }
    else if (w === 0) { return 100 }
    else { return Math.floor(p / (p + w) * 100) }
  }

  return (
    <div className='User Progress'>
      <p>Points: {props.points}</p>
      <p>Success: {successRate(props.points, props.wrong)} %</p>
    </div>
  )
}