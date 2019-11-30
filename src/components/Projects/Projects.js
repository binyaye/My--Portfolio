import React from "react";
import "./Projects.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  CardBody,
  CardImg,
  CardHeader,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import MobileApps from "../Images/mobileApps.jpg";
import WebApps from "../Images/webApps.jpg";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const Projects = () => {
  return (
    <div className="container">
      <Stagger in>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Projects</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <Fade in>
              <h3>Projects</h3>
              <hr />
            </Fade>
          </div>
        </div>
      </Stagger>
      <Col
        className="br3 pa3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 site-content"
        style={{
          width: "auto",
          display: "flex",
          flexWrap: "wrap",
          height: "auto",
          justifyContent: "center"
        }}
      >
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)"
          }}
        >
          <Card
            style={{
              width: "500px",
              background: "white",
              margin: "10px",
              height: "auto"
            }}
          >
            <CardImg
              top
              style={{ height: "60%", width: "100%" }}
              alt="logo"
              src={MobileApps}
            />
            <CardBody>
              <CardHeader
                className="h1-responsive"
                style={{ color: "#26293A" }}
              >
                Mobile Apps
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.byc3.ethiopuzzle"
                >
                  Ethio Puzzle
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.byc3.inspirationalquotes"
                >
                  Top Achievement Quotes
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.byc.amhariclove"
                >
                  Wow Love Stories
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.byc2.bman202.feta"
                >
                  Ethiopian Zink
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.byc3.lovecalculator"
                >
                  Love Calculator
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://play.google.com/store/apps/details?id=com.bbjethiopia.relationshipadvices"
                >
                  Relationship Advices
                </a>
              </CardHeader>
              <hr />
              <Button
                color="dark"
                outline
                href="https://play.google.com/store/apps/developer?id=Binyam+Tadele"
                className="grow"
                style={{ fontSize: "16px", flexDirection: "row" }}
              >
                Get them on Google Play
              </Button>
            </CardBody>
          </Card>
        </FadeTransform>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)"
          }}
        >
          <Card
            style={{
              width: "500px",
              margin: "10px",
              background: "white",
              height: "auto"
            }}
          >
            <CardImg
              top
              style={{ height: "60%", width: "100%" }}
              alt="logo"
              src={WebApps}
            />
            <CardBody>
              <CardHeader
                className="h1-responsive"
                style={{ color: "#26293A" }}
              >
                Web Apps
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://github.com/binyaye/robofriends-app"
                >
                  RoboFriend
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://github.com/binyaye/background-generator"
                >
                  Background Generator
                </a>
              </CardHeader>
              <CardHeader className="h3-responsive underline-hover">
                <a
                  style={{ color: "#26293A" }}
                  href="https://github.com/binyaye/facerecognitionbrain"
                >
                  Face Recognition Brain
                </a>
              </CardHeader>
              <hr />
              <Button
                color="dark"
                outline
                className="grow"
                href="https://github.com/binyaye"
                style={{ fontSize: "16px", flexDirection: "row" }}
              >
                View My GitHub Profile
              </Button>
            </CardBody>
          </Card>
        </FadeTransform>
      </Col>
    </div>
  );
};

export default Projects;
