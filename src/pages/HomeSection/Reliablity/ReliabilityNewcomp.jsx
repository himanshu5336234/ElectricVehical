import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Topbar from "../../../components/Topbar/Topbar";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import bg1 from "../../../asset/section/reliability/bg1.webp";
import bg2 from "../../../asset/section/reliability/bg2New.png";
import bg3 from "../../../asset/section/reliability/bg3New.png";
import icon1 from "../../../asset/section/reliability/icon1.png";
import icon2 from "../../../asset/section/reliability/icon2.png";

import "./styleReliability.css";
export default function ReliabilityNewcomp() {
  return (
    <>
      <div>
        <Topbar />
        <CommonLayer title={"Reliability"} value={"Reliability"} />

        <div className="container" style={{ height: "100vh",backgroundColor: "rgba(25, 28, 36, 1)" }}>
          <div className="sectionR2 tiktok">
            <div style={{ paddingTop: "50px" }}>
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  padding: "10px 12px",
                  color:"#fff"
                }}
              >
                {/* <p>DRIVER ALERT SYSTEM</p> */}
                <h1>SUPERIOR 200mm GROUND CLEARANCE</h1>
              </div>
              <motion.div
                style={{ position: "relative" }}
                initial={{ y: "40vh", opacity: "0" }}
                whileInView={{ y: "0", opacity: "1" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img src={bg1} style={{ width: "100%" }} />
                <div style={{ position: "absolute", bottom: "20%" }}>
                  <motion.img
                    src={icon1}
                    whileInView={{
                      scale: [1, 0.8, 1],
                      opacity: 0.7
                    }}
                    transition={{
                      loop: Infinity,
                      repeatDelay: 1,
                      duration: 1,
                    }}
                    initial={{ opacity: 0 }}
                    style={{ display: "flex", margin: "auto", }}
                  />

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="heading-bottomReliability"
                  >
                    Custom designed to tackle Indian road conditions, the Rorr
                    will navigate like a pro over potholes, speed bumps, and the
                    like on your city commute. Test ride it to experience an
                    electrifying ride.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="sectionR3 tiktok">
            <div style={{ paddingTop: "50px" }}>
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  padding: "10px 12px",
                  color:"#fff"
                }}
              >
                <h1>WATER WADING CAPACITY</h1>
                {/* <h1>GEO FENCING</h1> */}
              </div>

              <motion.div
                style={{ position: "relative" }}
                initial={{ y: "40vh", opacity: "0" }}
                whileInView={{ y: "0", opacity: "1" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img src={bg2} style={{ width: "100%" }} />
                <div style={{ position: "absolute", bottom: "20%" }}>
                  <motion.img
                    whileInView={{
                      scale: [1, 0.8, 1],
                      opacity: 0.7
                    }}
                    transition={{
                      loop: Infinity,
                      repeatDelay: 1,
                      duration: 1,
                    }}
                    initial={{ opacity: 0 }}
                    src={icon2}
                    style={{ display: "flex", margin: "auto" }}
                  />

                  <motion.p
                    className="heading-bottomReliability"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Easily ride through water or even flooded streets for up to
                    230mm. You just can’t stop the Rorr.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="sectionR4 tiktok">
            <div style={{ paddingTop: "50px" }}>
              <div
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  padding: "10px 12px",
                  color:"#fff"
                }}
              >
                <h1>BATTERY RATING</h1>
                {/* <h1>CBS Brakes</h1> */}
              </div>
              <motion.div
                style={{ position: "relative" }}
                initial={{ y: "40vh", opacity: "0" }}
                whileInView={{ y: "0", opacity: "1" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img src={bg3} style={{ width: "100%" }} />

                <div style={{ position: "absolute", bottom: "20%" }}>
                  <motion.p
                    src={icon1}
                    whileInView={{
                      scale: [1, 0.8, 1],
                      opacity: 0.7
                    }}
                    transition={{
                      loop: Infinity,
                      repeatDelay: 1,
                      duration: 1,
                    }}
                    style={{fontSize: "30px", display: "flex", margin: "auto",color:"#fff",justifyContent:"center" }}
                  >IP 67</motion.p>
                  <motion.p
                    className="heading-bottomReliability"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    With a highly certified IP67 rating, the Rorr battery
                    promises a tension-free ride in water, dust, rains, and
                    almost anything the city can throw at it.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
