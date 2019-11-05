import React, { Component } from "react";
import swal from "sweetalert";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback
} from "reactstrap";
import firebase from "./config.js";
import { Snackbar } from "./snack";
import { Link } from "react-router-dom";

class Contact extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
      contact: [],
      touched: {
        email: false,
        subject: false,
        message: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  snackbarRef = React.createRef();

  _showSnackbarHandler = () => {
    this.snackbarRef.current.openSnackBar(
      "Your message has sent successfully!"
    );
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const messagesRef = firebase.database().ref("messages");
    const contactUs = {
      sender: this.state.email,
      messageSubject: this.state.subject,
      body: this.state.message
    };

    messagesRef
      .push(contactUs)
      .then(success => {
        console.log("success ", success);
        this._showSnackbarHandler();
        swal("Thank you!", "Your message has sent successfully!", "success");
      })
      .catch(err => {
        swal(
          err,
          "Something went wrong, please enable your internet connection and try again later.",
          "error"
        );
      });

    this.setState({
      from: "",
      subject: "",
      message: ""
    });
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate(email, subject, message) {
    const errors = {
      email: "",
      subject: "",
      message: ""
    };

    if (
      this.state.touched.email &&
      email.split("").filter(x => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";
    else if (this.state.touched.message && message.length < 1)
      errors.message = "Please enter your message";
    else if (this.state.touched.subject && subject.length < 1)
      errors.subject = "Please enter subject";
    return errors;
  }

  componentDidMount() {
    this._isMounted = true;
    const messagesRef = firebase.database().ref("messages");
    messagesRef.on("value", snapshot => {
      let contact = snapshot.val();
      let newState = [];
      for (let sender in contact) {
        newState.push({
          id: contact[sender].from,
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

  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const errors = this.validate(
      this.state.email,
      this.state.message,
      this.state.subject
    );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Me</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send me your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="subject" md={2}>
                  Subject
                </Label>
                <Col md={10}>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="subject"
                    value={this.state.subject}
                    valid={errors.subject === ""}
                    invalid={errors.subject !== ""}
                    onBlur={this.handleBlur("subject")}
                    onChange={this.handleChange}
                  />
                  <FormFeedback>{errors.subject}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Message
                </Label>
                <Col md={10}>
                  <Input
                    id="message"
                    type="textarea"
                    name="message"
                    placeholder="your message"
                    value={this.state.message}
                    valid={errors.message === ""}
                    invalid={errors.message !== ""}
                    onBlur={this.handleBlur("message")}
                    onChange={this.handleChange}
                    rows="4"
                  />
                  <FormFeedback>{errors.message}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button color="primary" disabled={!this.state.message}>
                    Send
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <Snackbar ref={this.snackbarRef} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
