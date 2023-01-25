import React, { useRef, useState } from "react";
import styled from "styled-components";
import Topbar from "../../../components/Topbar/Topbar";
import Home2 from "../../../asset/Keep a cool head.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import WriteImg from "../../../asset/Safest battery pack available..png";
import VImg from "../../../asset/batteryV.png";
import TempImg from "../../../asset/BatteryIMGtemp.png";
import Scroll from "./ScroollData/Scroll";
import Bimg from "../../../asset/BottomVideo.png";
import { useLocation } from "react-router-dom";

import "./BatteryImage.scss";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import TempComp from "./TempComp";
import Scroller from "./scrollData/scroller";
import dieCast from "../../../asset/aluminium die cast S1.jpg";
import Footer from "../../../components/Footer/Footer";
const MainDiv = styled.div`
  overflow: hidden;
`;
const Div1 = styled.div`
  padding: 16px;

  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
`;
const SubDiv1 = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const SubDiv2 = styled.div``;
const Div2 = styled.div`
  overflow: hidden;
  width: 100vw;
  /* border: 1px solid red; */
`;

const PDiv = styled(motion.div)`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  /* margin-top: -60%; */
  margin-left: 20px;
  position: absolute;
  color: #fff;
`;
const P2 = styled(motion.p)`
  position: absolute;
  margin-top: -37%;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  text-align: center;
`;
export default function BatteryImage() {
  const [stateScroll, setStateScroll] = useState(false);
  const ref = useRef();
  const [close, setClose] = React.useState(true);

  const location = useLocation();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const testRef = () => {
  };


  return (
    <>
      {/* <Topbar /> */}
      <CommonLayer title={"Battery"} value={"Battery"} />
      <MainDiv>
        <Div2>
          <div>
            <motion.div
              className="img-wrapper"
              style={{ position: "relative",paddingTop:"10vh" }}
              initial={{ width: "140vw", height: "100vh" }}
              whileInView={{ width: "100vw", height: "60vh" }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true, amount: 0 }}
            >
              <motion.img
                style={{
                  width: "inherit",
                  height: "inherit",
                  // scaleX: scale,
                  overflowY: "hidden",
                  objectFit: "cover",
                  // position: "relative",
                }}
                className="bg-image"
                src={Home2}
              />
              <PDiv
                initial={{ bottom: "15%" }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileInView={{ bottom: "15%" }}
              >
                <motion.p
                  initial={{
                    x: 10,
                    fontSize: "40px",
                    fontWeight: 700,
                    bottom: "15%",
                  }}
                  whileInView={{
                    x: 0,
                    fontSize: "32px",
                    fontWeight: 700,
                    bottom: "30%",
                  }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  KEEP A COOL
                  <br /> HEAD
                </motion.p>
                <motion.p
                  initial={{
                    x: 100,
                    scale: 0,
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                  whileInView={{
                    x: 0.5,
                    scale: 1,
                    duration: 2,
                    delay: 1,
                    // width: 20,
                  }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  style={{ color: "#fff", marginBottom: "25px" }}
                >
                  with....
                </motion.p>
              </PDiv>
            </motion.div>
          </div>

          <div
          // style={{ marginTop: "35%" }}
          >
            <motion.div
              style={{ padding: "20px" }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <img src={WriteImg} />
            </motion.div>
            <motion.div
              // style={{ padding: "20px" }}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0, duration: 1 }}
            >
              <img src={VImg} style={{ width: "100%" }} />
            </motion.div>
          </div>
          <TempComp setStateScroll={setStateScroll} />
       

          <Scroller />
          <div style={{ height: "60vh", width: "100vw" }}>
            <motion.img
              style={{ width: "100%", position: "relative" }}
              initial={{ y: "20vh" }}
              whileInView={{ y: "0" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              src={dieCast}/>
           
            <P2 
             initial={{ opacity: 0}}
             whileInView={{textAlign:"center",opacity: 1 }}
             viewport={{ once: true, amount: 0 }}
             transition={{ delay: 0.5, duration: 0.3 }}
            >
              ALL-WEATHER <br/>ALL-TERRAIN BUILD
            
            </P2>
           
            <br />
            <motion.p
              initial={{ y: "20vh", opacity: "0" }}
              whileInView={{ y: "0", opacity: "1" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ padding: "24px", fontSize: "18px", fontWeight: 400 }}
            >
              A 5mm aluminum metal sheet protects the battery pack from hazards
              and impacts. IP67 Water & Dust Resistant. Even in floods.
            </motion.p>
          </div>
        </Div2>
      </MainDiv>
      {/* <Footer/> */}
    </>
  );
}
