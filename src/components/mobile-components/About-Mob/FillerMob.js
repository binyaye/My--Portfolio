import React from 'react';
import './AboutMob.css';

const FillerMob = (props) =>{
  return (
    <div className= "filler" style={{ width: `${props.percentage}%` }} />
  )
}

export default FillerMob;
