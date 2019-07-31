import React, { Component } from 'react';
import './Home.css'
import background from '../Images/background.png';

class Home extends Component{

  render () {   
    return (
        <div id="homepage" className='fullScreen br3 pa4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center' style={{marginTop:'10vh', paddingTop:'15px'}}>
          <img alt="background" src={ background } style={{height:'auto', width:'auto'}}></img>
          <h1
            style={{color:"white", fontSize:'6vw',  justifyContent:'center', paddingTop: '100px', fontWeight:'bold', display:'flex'}}
            >Welcome to</h1>
          <p
            style={{color:"white", fontSize:'4vw', fontStyle:'italic', display:'flex', flex:'center'}}
            >My portfolio</p>
            
        </div>

    )
  }
}

export default Home;
