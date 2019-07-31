import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../About/About.css'

class Contact extends Component{

  constructor(props){
    super(props);
    this.state = {
      from: '',
      subject: '',
      message: ''
    }
  }

  onEmailChange = (event) =>{
    this.setState({from: event.target.value})
    console.log(event.target.value);
  }

  onSubjectChange = (event) =>{
    this.setState({subject: event.target.value})
    console.log(event.target.value);
  }

  onMessageChange = (event) =>{
    this.setState({message: event.target.value})
    console.log(event.target.value);
  }

  onSubmit = () =>{
    fetch('http://localhost:3002/contact', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        from: this.state.from,
        subject: this.state.subject,
        message: this.state.message
      })
    })
    .then(response => response.json())
  
  }

  render () {
    return (
      <div className="fullScreen">
        <MDBContainer>
          <MDBRow  className='center'>
            <MDBCol md="6">
              <form className='br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center' action="https://contact-us.prod.with-datafire.io/contact">
                <p className="h2 text-center mb-4">Write to me</p>
                <div className="white-text">
                    <MDBInput style={{color:'white'}}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      name="from"
                      onChange={this.onEmailChange}
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      name="subject"
                      onChange={this.onSubjectChange}
                      error="wrong"
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Your message"
                      type="textarea"
                      require="required"
                      name="message"
                      onChange={this.onMessageChange}
                      icon="pencil-alt"
                      rows="4"/>
                </div>
                <div className="text-center">
                  <MDBBtn outline color ="white" onClick={this.onSubmit}>
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

export default Contact;
