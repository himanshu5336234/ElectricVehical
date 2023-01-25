import React from "react";
import styled from "styled-components";
import Topbar from "../../../../components/Topbar/Topbar";
import SafetyImgComp from "../../../../asset/SafetyImgComp.png";
import SafetySecondImg from "../../../../asset/staySafeNew.png";
import SafetyScrollComp from "./SafetyNEwComp";
import "./style.css";
import CommonLayer from "../../../../components/CommonLayer/CommonLayer";
import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
} from "framer-motion";
import DownArrow from "../../../../asset/chevrondown.png";
import SecondScrollSafety from "./SecondScrollSafety";

const MainDiv = styled.div`
  overflow-x: hidden;
  /* padding-top: 100px; */
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
const Div2 = styled.div``;
const SubDiv2 = styled.div``;
const P = styled.p`
  position: absolute;
  font-weight: 700;
  font-size: 48px;
  color: #fff;
  /* top: 100%; */
  left: 5%;
  padding-top: 40px;
`;
const P1 = styled(P)`
  padding-top: 110px;

  /* top: 80%; */
  line-height: 100%;
`;

const P2 = styled(motion.p)`
  font-weight: 700;
  font-size: 24.7525px;
  line-height: 110%;
  position: absolute;
  bottom: 32%;
  color: #fff;
  width: 100%;
  text-align: center;
  color: #fff;
`;
const P3 = styled(motion.p)`
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  position: absolute;
  color: #fff;
  bottom: 25%;
  width: 77%;
`;
const IMG = styled(motion.img)`
  position: absolute;
  bottom: 15%;
`;

export default function SafetyComp() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [1, 2]);
  const controls = useDragControls();
  function startDrag(event) {
    controls.start({ event });
  }
  return (
    <>
      <MainDiv>
       
        <Div2>
       
          <div
            style={{ position: "relative", scaleY: scrollYProgress }}
            className="img-wrapper"
          >
            <motion.div
              initial={{ y: 100, opacity: 1 }}
              whileInView={{ y: 0, opacity: 0 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <P onPointerDown={startDrag}>NO MATTER</P>
              {/* <br/> */}
              <P1>WHERE YOU RORR...</P1>
            </motion.div>
            <motion.div drag="x" dragControls={controls} />
            <motion.div
              style={{ width: "100vw", 
              height: "100vh"
             }}
              initial={{ width: "220vw" }}
              whileInView={{ width: "100vw" }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true, amount: 0 }}
            >
              <motion.img
                src={SafetySecondImg}
                viewport={{ once: true, amount: 0 }}
                style={{
                  width: "inherit",
                  height: "inherit",
                  // scaleX: scale,
                  overflowY: "hidden",
                  objectFit: "cover",
                }}
                className="bg-image"
              />
            </motion.div>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <P2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                STAY SAFE
              </P2>
              <P3
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                With our Exclusive features for your safety & security
              </P3>
              <IMG
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                src={DownArrow}
              />
            </div>
          </div>
        </Div2>
        {/* <br /> */}
        {/* <SecondScrollSafety/> */}
        {/* <br /> */}
        {/* <div
          className="container"
          style={{ border: "1px solid #fff", overflowY: "unset" }}
        >
          <SafetyScrollComp />
        </div> */}
      </MainDiv>
    </>
  );
}
