import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Home2 from "../../../Assets/batteryExpend/batteryExHome.jpg";
import secondImage from "../../../../asset/batteryV.png";
import thirdImage from "../../../Assets/batteryExpend/wbatteryExpendV2.png";
import fourthImage from "../../../Assets/batteryExpend/BatteryExHeat.jpg";

import TempBattey from "./tempBatteryEx";
import WScrollExpend from "./scrollExpend";
import "./wBatteryStyle.css";
import WNavbar from "../../../Components/Navbar/WNavbar";
import bg from "../../../Assets/batteryExpend/DeskTopWeatherTrainBuild.jpg";
import WFooter from "../../../Components/Footer/WFooter";

import "./Wb.css";
import { margin } from "@mui/system";
export default function WBatteryExpend() {
  const [stateScroll, setStateScroll] = React.useState(true);

  return (
    <>
      <WNavbar />
      <div className="main-container">
        <div style={{ overflowX: "hidden" }}>
          <motion.div
            className="first-container"
            initial={{ width: "140vw" }}
            whileInView={{ width: "100vw" }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false, amount: 0 }}
          >
            <img
              style={{
                width: "inherit",
                height: "inherit",
                overflowY: "hidden",
                objectFit: "cover",
              }}
              className="bg-image"
              src={Home2}
            />
            <motion.div
              className="text-contaner"
              initial={{ bottom: "15%", height: "100vh" }}
              transition={{ delay: 0.3, duration: 1 }}
              whileInView={{ bottom: "15%" }}
            >
              <motion.p
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                KEEP A <br /> COOL HEAD{" "}
                <span style={{ fontSize: "40px", fontWeight: 400 }}>
                  with....
                </span>
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <div className="second-container">
          <motion.img
            src={secondImage}
            style={{ height: "316px", width: "562px" }}
            initial={{ y: "20vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.p
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: " #787E8C",
              lineHeight: "110%",
              textTransform: "uppercase",
            }}
            initial={{ y: "20vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Safest <br />
            battery <br />
            pack <br />
            available
          </motion.p>
        </div>

        <motion.div
          className="third-container"
          initial={{ scale: 0.6, overflow: "hidden", opacity: 0 }}
          whileInView={{
            scale: 1,
            overflow: "hidden",
            opacity: 1,
            width: "100vw",
            height: "100vh",
          }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false, amount: 0 }}
        >
          <img src={fourthImage} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {/* <div>
              <TempBattey setStateScroll={setStateScroll} />
            </div> */}
            <p>BEST-IN-CLASS HEAT MANAGEMENT</p>
            <span style={{fontSize:"24px"}}>
              For the first time ever, up to 50% temperature resistance to
              manage heat at higher speeds and in harsh weather. Made possible
              by the combination of the latest Lithium Ion Phosphate (LFP) cell
              tech & our proprietary Maximum Heat Exchange (MHX) tech.
            </span>
          </motion.div>
        </motion.div>
        <motion.div>
          <WScrollExpend />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: "60vh" }}
          whileInView={{ opacity: 1, y: "0vh" }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.3, duration: 2, type: "spring" }}
        >
          <div className="BgImg" style={{ backgroundImage: `url(${bg})` }}>
            <motion.div style={{ paddingTop: "100px" }}>
              <motion.h2
                initial={{ opacity: 0, y: "20vh" }}
                whileInView={{ opacity: 1, y: "10vh" }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.6, duration: 2, type: "spring" }}
                style={{
                  fontSize: "74px",
                  fontWeight: " 700",
                  lineHeight: "74px",
                  color: "white",
                }}
              >
                ALL-WEATHER ALL-TERRAIN BUILD
              </motion.h2>
              {/* <motion.h4
                initial={{ opacity: 0, y: "20vh" }}
                whileInView={{ opacity: 1, y: "10vh" }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.6, duration: 2, type: "spring" }}
                style={{
                  fontSize: "40px",
                  fontWeight: " 700",
                  lineHeight: "48px",
                  color: "white",
                  margin: "30px 0px",
                }}
              >
                4.4 kW
              </motion.h4> */}
              <motion.p
                initial={{ opacity: 0, y: "20vh" }}
                whileInView={{ opacity: 1, y: "10vh" }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.6, duration: 2, type: "spring" }}
                style={{
                  maxWidth: "816px",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "38px",
                  letterSpacing: "0em",
                  textAlign: " center",
                  margin: "auto",
                  color: "white",
                  paddingTop:"32px"
                }}
              >
                A 5mm aluminum metal sheet protects the battery pack from
                hazards and impacts. IP67 Water & Dust Resistant. Even in
                floods.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        <WFooter />
      </div>
    </>
  );
}
