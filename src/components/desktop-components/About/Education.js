import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

class Education extends Component {
  render (){
    return(
      <MDBCard className='grow' style={{ width: "650px", background: "white", margin:"10px"}}>
        <MDBCardBody>
          <MDBCardTitle className='h1-responsive' style={{color:'#ffffff', fontWeight:'bold', backgroundColor:'#263238'}}>Eductaion</MDBCardTitle>
           
            <table>
              <tbody>
                <tr style={{height:'auto'}}>
                  <th style={{fontSize:'3vh', color:'#263238', fontWeight:'bold'}}>JIMMA UNIVERSITY (2010 - 2015)</th>
                </tr>
                <tr style={{height:'auto'}}>
                  <th style={{fontSize:'2.5vh', color:'#263238', fontWeight:'bold'}}>Bachelor Degree in Civil Engineering</th>
                </tr>
              </tbody>
          </table>
       
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Education;
