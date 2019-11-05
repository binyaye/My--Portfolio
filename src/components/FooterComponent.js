import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "./Images/linkedin.png";
import Upwork from "./Images/upwork.png";
import Stack from "./Images/stack.png";
import Github from "./Images/github.png";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Address</h5>
            <address className="address">
              Addis Ababa
              <br />
              Ethiopia
              <br />
              <i className="fa fa-phone fa-lg"></i>: +251 92901 3390
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:binyadis@gmail.com">binyadis@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a href="https://github.com/binyaye">
                <img
                  alt="Github"
                  style={{ height: "40px", width: "40px" }}
                  src={Github}
                />
              </a>
              <a href="https://www.linkedin.com/in/binyam-tadele-3b125775/">
                <img
                  alt="Linkedin"
                  style={{ height: "40px", width: "40px" }}
                  src={Linkedin}
                />
              </a>
              <a href="https://stackoverflow.com/users/7774144/t-binyam">
                <img
                  alt="Stack"
                  style={{ height: "40px", width: "40px" }}
                  src={Stack}
                />
              </a>
              <a href="https://www.upwork.com/freelancers/~019edf4131004f9864?viewMode=1">
                <img
                  alt="Upwork"
                  style={{ height: "40px", width: "40px" }}
                  src={Upwork}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Binyam Tadele</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
