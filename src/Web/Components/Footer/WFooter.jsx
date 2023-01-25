import React from "react";
import "./WFooter.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../Assets/footer/footer-oben-logo.png";
import contact from "../../Assets/footer/contact.png";
import { Link } from "react-router-dom";

function WFooter() {
  return (
    <div className="w-footer-container">
      <div className="w-left">
        <div className="left-top">
          <img src={logo} />
        </div>
        <div className="left-bottom">
          <p className="footer-address">
            Indiqube Orion24th Main Rd, Agara Village, 1st Sector, HSR Layout,
            Bengaluru, Karnataka 560102
          </p>
          <p className="footer-email">contact@obenev.com</p>
          <div className="footer-social-logo">
            <a href="https://www.facebook.com/ObenElectric">
              <FacebookOutlinedIcon className="f-logo" />
            </a>
            <a href="https://www.instagram.com/obenelectric/">
              <InstagramIcon className="f-logo" />
            </a>
            <a href="https://www.youtube.com/ObenElectric">
              <YouTubeIcon className="f-logo" />
            </a>
            <a href="https://www.linkedin.com/company/oben-ev/">
              <LinkedInIcon className="f-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-right">
        <div className="right-top">
          <div className="r-t-left">
            <h3 className="info-heading">COMPANY</h3>
            <p>
              <Link to="/about-us">About Us</Link>
            </p>
            <p>
              <Link to="/careers">Careers</Link>
            </p>
            <p>
              <Link to="/faq">FAQs</Link>
            </p>
          </div>
          <div className="r-t-center">
            <h3 className="info-heading">MISSION</h3>
            <p>
              <Link to="/blog">Blog</Link>
            </p>
            <p>
              <Link to="/press">Press</Link>
            </p>
          </div>
          <div className="r-t-right">
            <h3 className="info-heading">LEGAL</h3>
            <p>
              <Link to="/terms-and-condition">Terms & Conditions</Link>
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/cancel">Cancellation & Rfund</Link>
            </p>
          </div>
          <div className="r-t-dummy"></div>
        </div>
        <div className="right-bottom">
          <h3 className="f-copyright">
            Copyright @ObenEV 2022. All Rights Reserved.
          </h3>
          <label className="f-contact-logo">
            <img src={contact} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default WFooter;
