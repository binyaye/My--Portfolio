import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import Linkedin from '../Images/linkedin.png';
import Upwork from '../Images/upwork.png';
import Stack from '../Images/stack.png';
import Github from '../Images/github.png';
import ProfileImage from '../Images/profile.jpg';

class Profile extends Component {
  render (){
    return(
      <MDBCard className='grow' style={{ width: "650px", background: "white", margin:"10px", height:'auto'}}>
        <MDBCardImage  className='bg img-fluid' style={{height: 'auto', width: 'auto'}} alt='logo' src={ ProfileImage } />
        <MDBCardBody>
        <MDBCardTitle className="h1-responsive" style={{color:'#263238', fontWeight:'bold'}}>Binyam Tadele</MDBCardTitle>
        <MDBCardText className="h4-responsive" style={{color:'#263238', fontSize:'2.5vh'}}>Mobile App & Front-End Web Developer</MDBCardText>
        <MDBCardText  style={{color:'#263238', fontStyle:'italic', fontSize:'2.5vh'}}>I've worked in construction industry but finally get excited after discovering and start working on my passion for Mobile Application & Web development since 2016. I’m looking forward to bringing that passion to advanced role and problem solving.</MDBCardText>
        <MDBRow className='start' style={{paddingLeft:'10px'}}>
            <MDBCol md="0" style={{paddingRight:'10px'}}>
                <MDBCardImage href="https://github.com/binyaye" style={{height:'40px', width:'40px'}} src={ Github } />
            </MDBCol>
            <MDBCol md="0" style={{paddingRight:'10px'}}>
                <MDBCardImage href="https://www.linkedin.com/in/binyam-tadele-3b125775/" style={{height:'40px', width:'40px'}} src={ Linkedin } />
            </MDBCol>
            <MDBCol md="0" style={{paddingRight:'10px'}}>
                <MDBCardImage href="https://stackoverflow.com/users/7774144/t-binyam" style={{height:'40px', width:'40px'}} src={ Stack } />
            </MDBCol>
            <MDBCol md="0" style={{paddingRight:'10px'}}>
                <MDBCardImage href="https://www.upwork.com/freelancers/~019edf4131004f9864?viewMode=1" style={{height:'40px', width:'40px'}} src={ Upwork } />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    );
  }
}

export default Profile;
