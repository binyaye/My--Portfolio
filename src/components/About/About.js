import React from "react";
import "./About.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  CardBody,
  CardImg,
  CardHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ProfileImage from "../Images/profile.jpg";

function RenderProfile() {
  return (
    <Card
      className="grow"
      style={{
        background: "white",
        margin: "10px",
        height: "auto"
      }}
    >
      <CardImg
        className="bg img-fluid"
        style={{ height: "25%", width: "25%" }}
        alt="logo"
        src={ProfileImage}
      />
      <CardBody>
        <CardHeader
          className="h1-responsive"
          style={{ color: "#263238", fontWeight: "bold" }}
        >
          Binyam Tadele
        </CardHeader>
        <CardHeader
          className="h4-responsive"
          style={{ color: "#263238", fontSize: "2.5vh" }}
        >
          Mobile App & Front-End Web Developer
        </CardHeader>
        <CardBody
          style={{ color: "#263238", fontStyle: "italic", fontSize: "2.5vh" }}
        >
          I've worked in construction industry but finally get excited after
          discovering and start working on my passion for Mobile Application &
          Web development since 2016. I’m looking forward to bringing that
          passion to advanced role and problem solving.
        </CardBody>
      </CardBody>
    </Card>
  );
}

function RenderEducation() {
  return (
    <Card
      className="grow"
      style={{ width: "500px", background: "white", margin: "10px" }}
    >
      <CardBody>
        <CardHeader
          className="h1-responsive"
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            backgroundColor: "#263238"
          }}
        >
          Eductaion
        </CardHeader>

        <CardHeader
          style={{
            fontSize: "3vh",
            color: "#263238",
            fontWeight: "bold",
            lineHeight: "0.8"
          }}
        >
          JIMMA UNIVERSITY (2010 - 2015)
        </CardHeader>
        <CardHeader
          style={{ fontSize: "2.5vh", color: "#263238", paddingBottom: "15px" }}
        >
          Bachelor Degree in Civil Engineering
        </CardHeader>
      </CardBody>
    </Card>
  );
}

function RenderExperience() {
  return (
    <Card
      className="grow"
      style={{
        width: "500px",
        background: "white",
        margin: "10px",
        height: "auto"
      }}
    >
      <CardBody>
        <CardHeader
          className="h1-responsive"
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            backgroundColor: "#263238"
          }}
        >
          Experience
        </CardHeader>
        <CardHeader
          style={{
            fontSize: "3vh",
            color: "#263238",
            fontWeight: "bold",
            lineHeight: "0.8"
          }}
        >
          Freelancing (2016 - Present)
        </CardHeader>
        <CardHeader
          style={{ fontSize: "2.5vh", color: "#263238", paddingBottom: "15px" }}
        >
          <em>Android & Front End Web Developer</em>
          <br />
          Developed & Published 6 Android Apps on Google play store.
          <br /> Developed Responsive Web Apps
        </CardHeader>
        <CardHeader
          style={{
            fontSize: "3vh",
            color: "#263238",
            fontWeight: "bold",
            lineHeight: "0.8"
          }}
        >
          Governmental Construction Bureau (2015 - 2016)
        </CardHeader>
        <CardHeader
          style={{ fontSize: "2.5vh", color: "#263238", lineHeight: "0.8" }}
        >
          <em>
            Worked in Governmental institution as Junior Contract Engineer
          </em>
        </CardHeader>
      </CardBody>
    </Card>
  );
}

function RenderSkills({ skills }) {
  return (
    <Card
      className="grow"
      style={{ width: "100%", background: "white", margin: "10px" }}
    >
      <CardBody>
        <CardHeader
          className="h1-responsive"
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            backgroundColor: "#263238"
          }}
        >
          Skills
        </CardHeader>
        <table style={{ width: "75%" }}>
          <tbody>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                HTML5
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.html5} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                CSS3
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.css3} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                Bootstrap
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.bootStrap} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                JavaScript
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.javaScript} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                jQuery
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.jquery} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                React.js
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.react} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                Node.js
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.node} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                Java
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.java} />
              </td>
            </tr>
            <tr>
              <td className="h5-responsive" style={{ color: "#263238" }}>
                Dart
              </td>
              <td>
                <ProgressBar className="br3" percentage={skills.dart} />
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

const About = props => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Me</h3>
          <hr />
        </div>
      </div>
      <div className="fullScreen">
        <Col
          className="br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6"
          style={{
            width: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "auto"
          }}
        >
          <RenderProfile />
          <RenderSkills skills={props.skills} />
          <RenderEducation />
          <RenderExperience />
        </Col>
      </div>
    </div>
  );
};

export default About;
