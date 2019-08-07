import React, { Component } from 'react';
import swal from 'sweetalert';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../About-Mob/AboutMob.css';
import firebase from './mobconfig.js';
import { Snackbar } from './snack';

class ContactMob extends Component{

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

  snackbarRef = React.createRef();

  _showSnackbarHandler = () => {
    this.snackbarRef.current.openSnackBar('Your message has sent successfully!');
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
    messagesRef.push(contactUs).then((success)=>{
      console.log('success ', success);
      this._showSnackbarHandler();
      swal("Thank you!", "Your message has sent successfully!", "success"); 
     }).catch((err) => {
      swal(err, "Your message has sent successfully!", "success"); 
     });

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
                      onChange={this.handleChange} 
                      success="right"/>
                    <MDBInput style={{color:'white'}}
                      label="Subject (Optional)"
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
                  <MDBBtn outline color ="white" onClick={this.handleSubmit} disabled={!this.state.message}>
                    Send <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
              </form>
              <Snackbar ref = {this.snackbarRef} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default ContactMob;
