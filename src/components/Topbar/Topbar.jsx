import React, { useState } from "react";
import "./topbar.scss";
import logo from "../../asset/LogoMain.png";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

function Topbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="topbar">
        <div className="left"></div>

        <div className="center">
          <a href="/">
            <span className="home-route">
              <img src={logo} onClick={scrollToTop} />
            </span>
          </a>
        </div>

        <div className="right">
          <div
            className={openSidebar ? "hamburger active" : "hamburger"}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <span className="hamburger_one" />
            <span className="hamburger_two" />
            <span className="hamburger_three" />
          </div>
        </div>
      </div>
      <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
    </>
  );
}

export default Topbar;
