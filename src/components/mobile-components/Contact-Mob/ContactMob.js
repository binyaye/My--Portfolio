import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../About-Mob/AboutMob.css'

class ContactMob extends Component{
  render () {
    return (
      <div className="fullScreen">
        <MDBContainer>
          <MDBRow  className='center'>
            <MDBCol md="6">
              <form className='br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
                <p className="h2 text-center mb-4">Write to me</p>
                <div className="white-text">
                    <MDBInput style={{color:'white'}}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      name="from"
                      error="wrong"
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      name="subject"
                      error="wrong"
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Your message"
                      type="textarea"
                      require="required"
                      name="body"
                      icon="pencil-alt"
                      rows="4"/>
                </div>
                <div className="text-center">
                  <MDBBtn outline color ="white">
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default ContactMob;
