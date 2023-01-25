import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BgImage from "../BgImage/BgImage";
import "./Sidebar.scss";
import img from "../../asset/hamburger.jpeg";
import { motion, AnimatePresence } from "framer-motion";

function Sidebar({ setOpenSidebar, openSidebar }) {
  const linkVariants = {
    hover: {
      scale: 1.3,
      originX: 0,
    },
    tap: {
      scale: 0.8,
      originX: 0,
    },
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };
  const variants = {
    show: {
      enter: {
        opacity: 1,
        transition: { duration: 2 },
      },
      initial: { opacity: 0 },
    },
    hide: {
      exit: {
        opacity: 0,
        transition: { duration: 2 },
      },
      initial: { opacity: 1 },
    },
  };
  return (
    <motion.div
      animate={{ y: openSidebar ? "0" : "-150vh" }}
      initial={{ y: "-100vh" }}
      transition={{
        type: "spring",
        stiffness: 30,
      }}
      className="sidebar-container"
    >
      <div className="sidebar-top">
        <motion.div
          className="top-one"
          initial={{ opacity: 0 }}
          animate={{ opacity: openSidebar ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.label
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            transition="transition"
            className="top-text"
          >
            <a className="link" href="/">
              Home
            </a>{" "}
          </motion.label>
          <label className="top-text">
            <Link className="link" to="/mybooking">
              My Booking
            </Link>
          </label>
          <label className="top-text">
            <Link className="link" to="/savingcalculator">
              Saving Calculator
            </Link>
          </label>
        </motion.div>

        <label className="hr-container">
          <hr className="hr-divider" />
        </label>

        <motion.div
          className="top-two"
          initial={{ opacity: 0 }}
          animate={{ opacity: openSidebar ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <label className="top-text">
            <Link className="link" to="/about-us">
              About us
            </Link>
          </label>
          <label className="top-text">
            <Link className="link" to="/blogs">
              Blog
            </Link>
          </label>
          <label className="top-text">
            <Link className="link" to="/press">
              Press
            </Link>{" "}
          </label>
        </motion.div>

        <label className="hr-container">
          <hr className="hr-divider" />
        </label>

        <motion.div
          className="top-three"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="top-three-bottom">
            <label className="top-text">
              {" "}
              <Link className="link" to="/terms-and-condition">
                Terms & Condition
              </Link>
            </label>
            <label className="top-text">
              <Link className="link" to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
            </label>
            <label className="top-text">
              <Link className="link" to="/contact-us">
                Contact us
              </Link>
            </label>
          </div>
          <div className="gap">
            <Link to="/book" style={{ textDecoration: "none", color: "black" }}>
              <AnimatePresence>
                {openSidebar && (
                  <motion.button
                    // animate={{opacity: openSidebar ? 1 : 0 }}
                    // transition={{ delay: 0, duration: 0.5 }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    variants={openSidebar ? variants.show : variants.hide}
                    className="sidebar-button"
                  >
                    TEST THE RORR
                  </motion.button>
                )}
              </AnimatePresence>
            </Link>
          </div>
        </motion.div>
      </div>
      <BgImage img={img} />
    </motion.div>
  );
}

export default Sidebar;
