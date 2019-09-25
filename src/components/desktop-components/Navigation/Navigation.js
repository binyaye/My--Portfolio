import React, { Component } from "react";
import "./Navigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

class Navigation extends Component {
  _isMounted = false;

  // Adds an event listener when the component is mount.
  componentDidMount() {
    this._isMounted = true;
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="nav-style">
        <Router>
          <div className="wrapper">
            <header
              className="center"
              style={{
                justifyContent: "center",
                display: "flex",
                flex: "center"
              }}
            >
              <Navbar
                collapseOnSelect
                expand="lg"
                bg="#263238"
                variant="dark"
                className="border navbar navbar-dark navbar-expand-sm fixed-top"
                style={{
                  zIndex: "100",
                  display: "flex",
                  flex: "center",
                  justifyContent: "center",
                  backgroundColor: "#263238"
                }}
              >
                <Navbar.Toggle
                  className="ml-auto"
                  aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto h5-responsive center navbar-list center">
                    <h5>
                      <NavLink
                        to="/"
                        id="home"
                        exact
                        activeClassName="chosen"
                        className="underline-hover h5-responsive link dim pa3 pointer grow"
                        style={{ color: "white" }}
                      >
                        Home
                      </NavLink>
                    </h5>
                    <h5>
                      <NavLink
                        to="/about"
                        id="about"
                        activeClassName="chosen"
                        className="underline-hover h5-responsive link dim pa3 pointer grow"
                        style={{ color: "white" }}
                      >
                        About
                      </NavLink>
                    </h5>
                    <h5>
                      <NavLink
                        to="/projects"
                        id="projects"
                        activeClassName="chosen"
                        className="underline-hover h5-responsive link dim pa3 pointer grow"
                        style={{ color: "white" }}
                      >
                        Projects
                      </NavLink>
                    </h5>
                    <h5>
                      <NavLink
                        to="/contact"
                        id="contact"
                        activeClassName="chosen"
                        className="underline-hover h5-responsive link dim pa3 pointer grow"
                        style={{ color: "white" }}
                      >
                        Contact
                      </NavLink>
                    </h5>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
            </header>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navigation;
