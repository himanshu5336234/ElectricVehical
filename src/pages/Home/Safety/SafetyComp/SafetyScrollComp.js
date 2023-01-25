import React from "react";
import styled from "styled-components";
import "./style.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const DasImg = require("../../../../asset/DAS.png");
const DasImg2 = require("../../../../asset/Das2.png");
const DasImg3 = require("../../../../asset/CBS.png");
const DasImg4 = require("../../../../asset/Das4.png");
const DasImg5 = require("../../../../asset/Das5.png");

const ImgIcon = require("../../../../asset/locationSafety.png");

const DummyData = [
  {
    id: 1,
    subHeading: "DRIVER ALERT SYSTEM",
    heading: "DAS",
    image: DasImg,
    bottomHeading:
      "On-screen audio visual indicators to keep you alert and safe",
  },
  {
    id: 2,
    subHeading: "THEFT PROTECTION",
    heading: "GEO FENCING",
    image: DasImg2,
    imgIcon: ImgIcon,
    bottomHeading: "GPS Tracking on your battery to stop a thief in his tracks",
  },
  {
    id: 3,
    subHeading: "COMBI BRAKING SYSTEM",
    heading: "CBS BRAKES",
    image: DasImg3,
    bottomHeading: "Ride with confidence even at high speeds",
  },
  {
    id: 4,
    heading: "SAFER BATTER PACK ",
    subHeading: "(WITHOUT IP 67 & FLOODS)",
    image: DasImg4,
  },
  {
    id: 5,
    subHeading: "",
    heading: "Motor IP 67",
    image: DasImg5,
  },
];

const MainDiv = styled.div`
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;
const P2 = styled.p`
  font-weight: 400;
  font-size: 24px;
  padding-right: 23px;
`;
const P1 = styled.p`
  font-weight: 700;
  font-size: 32px;
`;
const Div1 = styled.div`
  padding: 26px 16px;
`;
const Div2 = styled.div`
  display: flex;
`;
const P = styled(motion.p)`
  position: absolute;
  color: #fff;
  bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  opacity: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 5%;
  right: 5%;
`;

export default function SafetyScrollComp() {
  return (
    <MainDiv className="container">
     <div className="tiktok">
     {DummyData.map((i) => (
        <div
          className="tiktokNew"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            scrollSnapAlign: "start",
          }}
        >
          <Div1>
            <P1>{i.heading}</P1>
            <Div2>
              <P2>{i.subHeading}</P2>
              <img src={i.imgIcon} />
            </Div2>
          </Div1>
          <div style={{ position: "relative" }}>
            <motion.img
              src={i.image}
              style={{ width: "100%",height:"400px" }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <P
              initial={{ y: 50,  }}
              whileInView={{ y: 0, }}
              // viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {i.bottomHeading}
            </P>
            {/* <p></p> */}
          </div>
        </div>
      ))}
     </div>
    </MainDiv>
  );
}
