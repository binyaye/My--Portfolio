import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../About/About.css';
import firebase from './config.js';

class Contact extends Component{

  constructor() {
    super();
    this.state = {
      from: '',
      subject: '',
      message:'',
      contact: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const messagesRef = firebase.database().ref('messages');
    const contactUs = {
      sender: this.state.from,
      messageSubject: this.state.subject,
      body: this.state.message
    }
    messagesRef.push(contactUs);
    this.setState({
      from: '',
      subject: '',
      message:''
    });
  }
  componentDidMount() {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      let contact = snapshot.val();
      let newState = [];
      for (let sender in contact) {
        newState.push({
          id: sender,
          sender: contact[sender].from,
          messageSubject: contact[sender].subject,
          body: contact[sender].message
        });
      }
      this.setState({
        contact: newState
      });
    });
  }
  // removeItem(itemId) {
  //   const itemRef = firebase.database().ref(`/items/${itemId}`);
  //   itemRef.remove();
  // }

  // onEmailChange = (event) =>{
  //   this.setState({from: event.target.value})
  //   console.log(event.target.value);
  // }

  // onSubjectChange = (event) =>{
  //   this.setState({subject: event.target.value})
  //   console.log(event.target.value);
  // }

  // onMessageChange = (event) =>{
  //   this.setState({message: event.target.value})
  //   console.log(event.target.value);
  // }

  // onSubmit = () =>{
  //   fetch('http://localhost:3002/contact', {
  //     method: 'post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       from: this.state.from,
  //       subject: this.state.subject,
  //       message: this.state.message
  //     })
  //   })
  //   .then(response => response.json())
  
  // }

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
                      onChange={this.handleChange} 
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      name="subject"
                      onChange={this.handleChange} 
                      error="wrong"
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Your message"
                      type="textarea"
                      require="required"
                      name="message"
                      onChange={this.handleChange} 
                      icon="pencil-alt"
                      rows="4"/>
                </div>
                <div className="text-center">
                  <MDBBtn outline color ="white" onClick={this.handleSubmit}>
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
