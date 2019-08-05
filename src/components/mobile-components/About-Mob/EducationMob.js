import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

class EducationMob extends Component {
  render (){
    return(
      <MDBCard style={{ width: "100%", background: "white", margin:"5px", height:'auto'}}>
        <MDBCardBody>
          <MDBCardTitle className='h2-responsive' style={{color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Eductaion</MDBCardTitle>
            <table>
              <tbody>
              <tr style={{height:'auto'}}>
                <th style={{fontSize:'2v', color:'#263238', fontWeight:'bold'}}>JIMMA UNIVERSITY (2010 - 2015)</th>
              </tr>
              <tr style={{height:'auto'}}>
                <th style={{fontSize:'1.5vpx', color:'#263238', fontWeight:'bold'}}>Bachelor Degree in Civil Engineering</th>
              </tr>
            </tbody>  
          </table>
         
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default EducationMob;
