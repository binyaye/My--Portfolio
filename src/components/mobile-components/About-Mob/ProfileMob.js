import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import Linkedin from '../Images-Mob/linkedin.png';
import Upwork from '../Images-Mob/upwork.png';
import Stack from '../Images-Mob/stack.png';
import Github from '../Images-Mob/github.png';
import ProfileImage from '../Images-Mob/profile.jpg';

class ProfileMob extends Component {
  render (){
    return(
      <MDBCard style={{ width: "100%", background: "white", margin:"5px", height:'auto'}}>
        <MDBCardImage  className="img-fluid" style={{height: 'auto', width: 'auto'}} alt='logo' src={ ProfileImage } waves />
        <MDBCardBody>
        <MDBCardTitle style={{color:'#263238', fontWeight:'bold'}}>Binyam Tadele</MDBCardTitle>
        <MDBCardText  style={{color:'#263238', fontStyle:'italic'}}>Mobile App & Front-End Web Developer</MDBCardText>
        <MDBCardText style={{color:'#263238', fontStyle:'italic'}}>I've worked in construction industry but finally get excited after discovering and start working on my passion for Mobile Application & Web development since 2016. I’m looking forward to bringing that passion to advanced role and problem solving.</MDBCardText>
        <MDBRow className='start' style={{paddingLeft:'5px'}}>
          <MDBCol md="0" style={{paddingRight:'5px'}}>
            <a href="https://github.com/binyaye"><img alt="Github" style={{height:'25px', width:'25px'}} src={ Github } /></a>
          </MDBCol>
          <MDBCol md="0" style={{paddingRight:'5px'}}>
            <a href="https://www.linkedin.com/in/binyam-tadele-3b125775/"><img alt="Linkedin"style={{height:'25px', width:'25px'}} src={ Linkedin } /></a>
          </MDBCol>
          <MDBCol md="0" style={{paddingRight:'5px'}}>
            <a href="https://stackoverflow.com/users/7774144/t-binyam"><img alt="Stack" style={{height:'25px', width:'25px'}} src={ Stack } /></a>
          </MDBCol>
          <MDBCol md="0" style={{paddingRight:'5px'}}>
          <a href="https://www.upwork.com/freelancers/~019edf4131004f9864?viewMode=1"><img alt="Upwork"style={{height:'25px', width:'25px'}} src={ Upwork } /></a>
          </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    );
  }
}

export default ProfileMob;
