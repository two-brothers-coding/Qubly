import React from "react";
import "./footer.scss";
import arrow from '../../images/arrow.png'
import Flogo from '../../images/logo-2.png'
import facebook from '../../images/facebook.png'
import twiter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerMain">
          <div className="logo">
          <img src={Flogo} alt="logo2" />
            <p className="footerText">Lorem ipsum dolor sit amet,<br/> consectetuer adipiscing elit, sed <br/>diam nonummy nibh euismod<br/> tincidunt ut laoreet dolore magna <br/>aliquam erat volutpat ut wisi enim <br/>ad minim</p>
            <div className="social">
              <img src={facebook} alt="face" />
              <img src={twiter} alt="twiter" />
              <img src={instagram} alt="insta" />
            </div>
          </div>
          <div className="product">
            <h3 className="h3">Product</h3>
            <h4 className="h4">Connections</h4>
            <h4 className="h4">Protocols</h4>
            <h4 className="h4">Personas</h4>
            <h4 className="h4">Integrations</h4>
            <h4 className="h4">Catalog</h4>
            <h4 className="h4">Pricing</h4>
            <h4 className="h4">Security</h4>
            <h4 className="h4">GDPR</h4>
          </div>
          <div className="developers">
            <h3 className="h3">For Developers</h3>
            <h4 className="h4">Docs</h4>
            <h4 className="h4">API</h4>
            <h4 className="h4">Open Source</h4>
            <h4 className="h4">Engineering Team</h4>
          </div>
          <div className="company">
            <h3 className="h3">Company</h3>
            <h4 className="h4">Careers</h4>
            <h4 className="h4">Blog</h4>
            <h4 className="h4">Press</h4>
          </div>
          <div className="support">
            <h3 className="h3">Support</h3>
            <h4 className="h4">Help Center</h4>
            <h4 className="h4">Contact Us</h4>
            <h4 className="h4">Security</h4>
            <h4 className="h4">Bulletins</h4>
            <h4 className="h4">Documentation</h4>
            <h4 className="h4">Partner</h4>
            <h4 className="h4">Portal</h4>
          </div>
          <div className="newsletter">
            <h3 className="h3">Newsletter</h3>
            <button placeholder="Email"> <img src={arrow} alt="arrow"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
