import React, { Component } from 'react';
import './Projects.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Projects extends Component{
  render () {
    return(
      <div className='fullScreen'>
              <MDBCol className='br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 site-content' style={{width: 'auto',  display: 'flex',  flexWrap: "wrap", height:'auto', justifyContent:'center'}}>
                <MDBCard  style={{ width: "650px", background: "white", margin:"10px", height:'auto'}}>
                  <MDBCardImage  className="img-fluid" style={{height: '60%', width: '100%'}} alt='logo' src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle className='h1-responsive' style={{color:'#26293A'}}>Mobile Apps</MDBCardTitle>
                    <MDBCardText  style={{color:'#26293A'}}>
                      <ul className='h5-responsive' style={{color:'#26293A'}}>
                        <li>Ethio Puzzle Game</li>
                        <li>Top Achievement Quotes</li>
                        <li>Wow Love Stories</li>
                        <li>Ethiopian Zink</li>
                        <li>Love Calculator</li>
                        <li>Relationship Advices</li>
                    </ul>
                    </MDBCardText>
                    <MDBBtn href="https://play.google.com/store/apps/developer?id=BBJ%20ETHIOPIA&hl=en" style={{flexDirection: "row", backgroundColor:'#3e2723', backgroundImage:"url({https://mdbootstrap.com/img/Photos/Others/images/43.jpg})"}}>Get it on Google Play</MDBBtn>
                </MDBCardBody>
                </MDBCard>
                <MDBCard style={{ width: "650px", margin:'10px', background: "white", height:'auto'}}>
                  <MDBCardImage  className="img-fluid" style={{height: '60%', width: '100%'}} alt='logo' src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                    <MDBCardTitle className='h1-responsive' style={{color:'#26293A'}}>Web Apps</MDBCardTitle>
                    <MDBCardText  style={{color:'#26293A'}}>
                      <ul className='h5-responsive' style={{color:'#26293A'}}>
                        <li>RoboFriend</li>
                        <li>Smart Brain</li>
                        <li>Movie Search</li>
                    </ul>
                    </MDBCardText>
                    <MDBBtn href="https://play.google.com/store/apps/developer?id=BBJ%20ETHIOPIA&hl=en" style={{flexDirection: "row", backgroundColor:'#3e2723', backgroundImage:"url({https://mdbootstrap.com/img/Photos/Others/images/43.jpg})"}}>Get it on GitHub</MDBBtn>
                </MDBCardBody>
                </MDBCard>
              </MDBCol>
      </div>
    );
  }
}

export default Projects;
