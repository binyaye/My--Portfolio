import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/projects">
                    <span className="fa fa-list fa-lg"></span> Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="container">
          <div className="row row-header">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
