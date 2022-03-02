import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/footer/footer-logo.png";
import Footer3 from "../../assets/footer/Footer-3.png";
import MadeIn from "../../assets/footer/made-in.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top-section">
        <div className="logo-div">
          <img src={FooterLogo} alt=""></img>
        </div>
        <div className="footer-content">
          <div className="footer-contact">
            <p>Contact</p>
            <p>FAQ's</p>
          </div>
          <div className="footer-contact">
            <p>Tutorials</p>
            <p>Blog</p>
          </div>
          <div className="footer-contact">
            <p>Privacy</p>
            <p>Banned Items</p>
          </div>
          <div className="footer-contact">
            <p>About</p>
            <div className="footer-contact-jobs">
              <div><p>jobs</p></div>
              <div><img src={Footer3} alt="" className="footer-number"></img></div>
            </div>
          </div>
          <div className="footer-contact">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom-section">
        <div>
          <p>Dukaan 2020, All rights reserved.</p>
        </div>
        <div>
          <img src={MadeIn} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
