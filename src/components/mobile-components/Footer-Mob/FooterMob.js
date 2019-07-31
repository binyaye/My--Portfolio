import React from 'react';
import './FooterMob.css';
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterMob = () => {
  return (
    <MDBFooter style={{background: "#263238", marginBottom:'0px'}} className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> binytech.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterMob;
