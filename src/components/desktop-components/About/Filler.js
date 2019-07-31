import React from 'react';
import './About.css';

const Filler = (props) =>{
  return (
    <div className= "filler" style={{ width: `${props.percentage}%` }} />
  )
}

export default Filler;
