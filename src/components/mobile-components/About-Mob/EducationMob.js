import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class EducationMob extends Component {
  render (){
    return(
      <MDBCard style={{ width: "100%", background: "white", margin:"5px", height:'auto'}}>
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'20px', color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Eductaion</MDBCardTitle>
          <MDBCardText  style={{color:'#263238'}}>
            <table>
              <tr style={{height:'auto'}}>
                <th style={{fontSize:'14px', color:'#263238', fontWeight:'bold'}}>JIMMA UNIVERSITY (2010 - 2015)</th>
              </tr>
              <tr style={{height:'auto'}}>
                <th style={{fontSize:'12px', color:'#263238', fontWeight:'bold'}}>Bachelor Degree in Civil Engineering</th>
              </tr>
          </table>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default EducationMob;
