import *  as React from 'react';

export default function Progress(props) {
  let successRate = function (p, w) {
    if (p === 0) { return 0 }
    else if (w === 0) { return 100 }
    else { return Math.floor(p / (p + w) * 100) }
  }

  return (
    <div>
      <p className="Points">Woof, you guessed {props.points} times correctly</p>
      <p className="Progress">Your guess success rate is {successRate(props.points, props.wrong)} %</p>
    </div>
  )
}