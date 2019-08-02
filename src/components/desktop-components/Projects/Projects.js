import React, { Component } from 'react';
import './Projects.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';

class Projects extends Component{
  render () {
    return(
      <div className='fullScreen'>
              <MDBCol className='br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 site-content' style={{width: 'auto',  display: 'flex',  flexWrap: "wrap", height:'auto', justifyContent:'center'}}>
                <MDBCard  style={{ width: "650px", background: "white", margin:"10px", height:'auto'}}>
                  <MDBCardImage  className="img-fluid" style={{height: '60%', width: '100%'}} alt='logo' src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle className='h1-responsive' style={{color:'#26293A', marginLeft:'10px'}}>Mobile Apps</MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.byc3.ethiopuzzle">Ethio Puzzle</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.byc3.inspirationalquotes">Top Achievement Quotes</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.byc.amhariclove">Wow Love Stories</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.byc2.bman202.feta">Ethiopian Zink</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.byc3.lovecalculator">Love Calculator</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://play.google.com/store/apps/details?id=com.bbjethiopia.relationshipadvices">Relationship Advices</a></MDBCardTitle>
                    <MDBBtn color='mdb-color' href="https://play.google.com/store/apps/developer?id=Binyam+Tadele" className="grow" style={{fontSize:'16px', flexDirection: "row"}}>Get them on Google Play</MDBBtn>
                </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ width: "650px", margin:'10px', background: "white", height:'auto'}}>
                  <MDBCardImage  className="img-fluid" style={{height: '60%', width: '100%'}} alt='logo' src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle className='h1-responsive' style={{color:'#26293A'}}>Web Apps</MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://github.com/binyaye/robofriends-app">RoboFriend</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://github.com/binyaye/background-generator">Background Generator</a></MDBCardTitle>
                    <MDBCardTitle className='h3-responsive underline-hover'><a style={{color:'#26293A'}} href="https://github.com/binyaye/facerecognitionbrain">Face Recognition Brain</a></MDBCardTitle>
                    <MDBBtn color='mdb-color' className='grow' href="https://github.com/binyaye" style={{fontSize:'16px', flexDirection: "row"}}>View My GitHub Profile</MDBBtn>
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
      </div>
    );
  }
}

export default Projects;
