import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class Experience extends Component {
  render (){
    return(
      <MDBCard className= 'grow' style={{ width: "650px", background: "white", margin:"10px", height:'auto'}}>
        <MDBCardBody>
          <MDBCardTitle className='h1-responsive' style={{color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Experience</MDBCardTitle>
          <MDBCardText  style={{color:'#263238'}}>
            <p style={{fontSize:'3vh', color:'#263238', fontWeight:'bold', lineHeight:'0.8'}}>Freelancing (2016 - Present)</p>
            <p style={{fontSize:'2.5vh', color:'#263238', paddingBottom:'15px'}}><em>Android & Front End Web Developer</em><br></br>Developed & Published 6 Android Apps on Google play store.<br></br> Developed Responsive Web Apps</p>
            <p style={{fontSize:'3vh', color:'#263238', fontWeight:'bold', lineHeight:'0.8'}}>Governmental Construction Bureau (2015 - 2016)</p>
            <p style={{fontSize:'2.5vh', color:'#263238', lineHeight:'0.8'}}><em>Worked in Governmental institution as Junior Contract Engineer</em></p>

          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Experience;
