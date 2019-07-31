import React from 'react';
import Filler from './Filler';
import './About.css';

const ProgressBar = (props) =>{
  return (
    <div className="skill-bar" style={{width:'30vw'}}>
    <Filler percentage={props.percentage}/>
    </div>
  )
}

export default ProgressBar;
