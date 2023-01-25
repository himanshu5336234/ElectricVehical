import React from "react";
import "./WSideMenu.scss";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import bg1 from "../../Assets/sidemenu/bg1.png";
import { Link, useNavigate } from "react-router-dom";

function WSideMenu({ openSidebar, setOpenSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={false}
        animate={{ x: openSidebar ? "0vw" : "35vw" }}
        transition={{ duration: 0.9 }}
        className="w-sidemenu"
      >
        <div className="sidemenu-top">
          <CloseIcon
            className="close-icon"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        <div className="sidemenu-bottom">
          <div className="sidemenu-b-top">
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </h3>

            <h3
              onClick={() => {
                navigate("/WebmyBooking");
              }}
              className="menu-text"
            >
              My Booking
            </h3>
            {/* </Link> */}
            <h3
              onClick={() => {
                navigate("/savingCalc");
              }}
              className="menu-text"
            >
              Saving Calculator
            </h3>
            <label className="hr-container">
              <hr className="hr-divider" />
            </label>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/blog");
              }}
            >
              Blog
            </h3>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/press");
              }}
            >
              Press
            </h3>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/about-us");
              }}
            >
              About us
            </h3>
            <label className="hr-container">
              <hr className="hr-divider" />
            </label>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/terms-and-condition");
              }}
            >
              Terms & Condition
            </h3>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </h3>
            <h3
              className="menu-text"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact us
            </h3>
          </div>
          <div className="sidemenu-b-bottom">
            <img src={bg1} />
            <Link to={"/Booking"}>
              <button>TEST THE RORR</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WSideMenu;
