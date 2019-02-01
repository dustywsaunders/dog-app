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
      {/* <p>Success: <div class="w3-border">
  <div class="w3-grey" style={{height: "24px", width:successRate(props.points, props.wrong)}}></div>
</div></p> */}
<div class="w3-light-grey">
  <div class="w3-container w3-green w3-center" style={{width:successRate(props.points, props.wrong) + "%", backgroundColor: 'white'}}>{successRate(props.points, props.wrong)}%</div>
</div>
    </div>
  )
}