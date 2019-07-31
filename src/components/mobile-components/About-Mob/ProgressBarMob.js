import React from 'react';
import Filler from './FillerMob';

const ProgressBarMob = (props) =>{
  return (
    <div className="skill-bar">
    <Filler percentage={props.percentage}/>
    </div>
  )
}

export default ProgressBarMob;
