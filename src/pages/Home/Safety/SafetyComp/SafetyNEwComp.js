import React from "react";
import styled from "styled-components";
import SafetyComp from "./SafetyComp";
import "./style.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Topbar from "../../../../components/Topbar/Topbar";
import CommonLayer from "../../../../components/CommonLayer/CommonLayer";

const DasImg = require("../../../../asset/DASMobile.png");
const DasImg2 = require("../../../../asset/GEOFENCINGMobile.png");
const DasImg3 = require("../../../../asset/CBSMobile.png");
const DasImg4 = require("../../../../asset/ALLWEATHERMobile.png");
const DasImg5 = require("../../../../asset/MobileMotorIP67.png");

const ImgIcon = require("../../../../asset/locationSafety.png");

export default function SafetyNEwComp() {
  return (
    <>
      <Topbar />
      <CommonLayer title={"Safety"} value={"Safety"} />
      <div style={{ height: "100vh" }} className="container">
        <div className="section1">
          <SafetyComp />
        </div>
        <div className="section2">
          <div style={{ paddingTop: "50px" }}>
            <div
              style={{
                fontWeight: "400",
                fontSize: "20px",
                padding: "10px 12px",
              }}
            >
              <h1>DRIVER ALERT SYSTEM(DAS)</h1>
            </div>
            <motion.div
              style={{ position: "relative" }}
              initial={{ y: "40vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.img src={DasImg} style={{ width: "100%" }} />
              <motion.p
                className="heading-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                A first-in-segment smart dashboard on your bike that alerts you
                even when you’re not riding.
              </motion.p>
            </motion.div>
          </div>
         
        </div>
        <div className="section3">
          <div style={{ paddingTop: "50px" }}>
            <div
              style={{
                fontWeight: "400",
                fontSize: "20px",
                padding: "10px 12px",
              }}
            >
              <h1>THEFT PROTECTION</h1>
              {/* <h1>GEO FENCING</h1> */}
            </div>
            <motion.div
              style={{ position: "relative" }}
              initial={{ y: "40vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={DasImg2} style={{ width: "100%" }} />
              <motion.p
                className="heading-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Probably the smartest way to stop a thief in their tracks.
                Literally. Geo-fence your bike and call the cops while they
                figure why the bike’s stopped suddenly. We took one look at the
                Rorr and realized it will be quite a lucrative target.
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="section4">
          <div style={{ paddingTop: "50px" }}>
            <div
              style={{
                fontWeight: "400",
                fontSize: "20px",
                padding: "10px 12px",
              }}
            >
              <h1>Combi-Braking System (CBS)</h1>
              {/* <h1>CBS Brakes</h1> */}
            </div>
            <motion.div
              style={{ position: "relative" }}
              initial={{ y: "40vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={DasImg3} style={{ width: "100%" }} />
              <motion.p
                className="heading-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Your bike will not only rely on the physical brakes anymore.
                Ride with complete confidence and superior control. Test ride?
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="section5">
          <div style={{ paddingTop: "50px" }}>
            <div
              style={{
                fontWeight: "400",
                fontSize: "20px",
                padding: "10px 12px",
              }}
            >
              <h1 style={{ fontSize: "32px" }}>ALL-WEATHER FRIENDLY</h1>
              {/* <p> without IP 67 & floods</p> */}
            </div>
            <motion.div
              style={{ position: "relative" }}
              initial={{ y: "40vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={DasImg4} style={{ width: "100%" }} />
              <motion.p
                className="heading-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                With an IP67 rated battery pack & motor, you can sail through
                heat waves, flooded streets or even the most demanding dirt
                roads.
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="section6">
          <div style={{ paddingTop: "50px" }}>
            <div
              style={{
                fontWeight: "400",
                fontSize: "20px",
                padding: "10px 12px",
              }}
            >
              {/* <p>Combi braking system</p> */}
              <h1>Motor IP 67</h1>
            </div>
            <motion.div
              style={{ position: "relative" }}
              initial={{ y: "40vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src={DasImg5} style={{ width: "100%" }} />
              {/* <p className="heading-bottom">
                Ride with confidence even at high speeds{" "}
              </p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
