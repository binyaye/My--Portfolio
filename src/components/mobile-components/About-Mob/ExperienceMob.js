import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class ExperienceMob extends Component {
  render (){
    return(
      <MDBCard style={{ width: "100%", background: "white", margin:"5px", height:'auto'}}>
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'20px', color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Experience</MDBCardTitle>
          <MDBCardText  style={{color:'#263238'}}>
            <p style={{fontSize:'14px', color:'#263238', fontWeight:'bold', lineHeight:'0.8'}}>Freelancing (2016 - Present)</p>
            <p style={{fontSize:'12px', color:'#263238', paddingBottom:'15px'}}><em>Android & Front End Web Developer</em><br></br>Developed & Published 6 Android Apps on Google play store.<br></br> Developed Responsive Web Apps</p>
            <p style={{fontSize:'14px', color:'#263238', fontWeight:'bold', lineHeight:'0.8'}}>Governmental Construction Bureau (2015 - 2016)</p>
            <p style={{fontSize:'12px', color:'#263238', lineHeight:'0.8'}}><em>Worked in Governmental institution as Junior Contract Engineer</em></p>

          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default ExperienceMob;
