import React from "react";
import "./Footer.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-one">
        <div className="footer-one-left">
          <label className="footer-one-header">COMPANY</label>
          <label className="footer-one-text">
            <Link className="footer-one-text" to="/about-us">
              About Us
            </Link>
          </label>
          <label className="footer-one-text">
            <Link className="footer-one-text" to="/careers">
              Careers
            </Link>
          </label>
          <label className="footer-one-text">
            <Link className="footer-one-text" to="/faq">
              FAQs
            </Link>
          </label>
        </div>
        <div className="footer-one-right">
          <label className="footer-one-header">MISSION</label>
          <label className="footer-one-text">
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/press">
              Blog
            </Link>
          </label>
          <label className="footer-one-text">
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/blogs">
              Press
            </Link>
          </label>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <div className="footer-two">
        <label className="footer-two-title">LEGAL</label>
        <label className="footer-two-text">
          <Link className="footer-two-text" to="/terms-and-condition">
            Terms & Conditions
          </Link>
        </label>
        <label className="footer-two-text">
          <Link className="footer-two-text" to="/privacy-policy">
            Privacy Policy
          </Link>
        </label>
        <label className="footer-two-text">
          <Link className="footer-two-text" to="/cancel">
            Cancellation & Refund
          </Link>
        </label>
      </div>
      <hr className="footer-hr-line" />
      <div className="footer-three">
        <div className="footer-three-address">
          <label>
            Indiqube Orion 24th Main Rd, Agara Village, 1st Sector, HSR Layout,
            Bengaluru, Karnataka 560102
          </label>
        </div>
        <div className="footer-three-email">
          <label>contact@obenev.com</label>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <div className="footer-four">
        <div className="logo-container">
          <a href="https://www.facebook.com/ObenElectric">
            <FacebookOutlinedIcon className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/obenelectric/">
            <InstagramIcon className="footer-icon" />
          </a>
          <a href="https://www.youtube.com/ObenElectric">
            <YouTubeIcon className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/company/oben-ev/">
            <LinkedInIcon className="footer-icon" />
          </a>
        </div>
        <label>Copyright @ObenEv 2022. All Rights Reserved</label>
      </div>
    </div>
  );
}

export default Footer;
