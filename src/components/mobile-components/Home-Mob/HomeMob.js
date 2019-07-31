import React, { Component } from 'react';
import './HomeMob.css'
import background from '../Images-Mob/background.png';

class HomeMob extends Component{
  render () {
    return (
        <div className='fullScreen br3 pa4 ba m5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5' style={{marginTop:'26vh'}}>
          <img alt="background" src={ background } style={{paddingTop: '25px', height:'auto', width:'auto'}}></img>
          <h1
            style={{color:"white", fontSize:'8vw',  justifyContent:'center', paddingTop: '25px', fontWeight:'bold', display:'flex'}}
            >Welcome to</h1>
          <p
            style={{color:"white", fontSize:'6vw', fontStyle:'italic', display:'flex', flex:'center'}}
            >My portfolio</p>

        </div>

    )
  }
}

export default HomeMob;
