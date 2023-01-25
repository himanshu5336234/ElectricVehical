import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// import "./style.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import styled from "styled-components";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const FirstImg = require("../../../../asset/longer life S1.jpg");
const SecondImg = require("../../../../asset/larger battery S1.jpg");
const ThirdImg = require("../../../../asset/cleaner eco friendly S1.jpg");
const FourthImg = require("../../../../asset/Smart Monitoring S1.jpg");
const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
`;
const Heading = styled(motion.p)`
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 16px;
  padding: 18px 28px 0;
`;
const Para = styled(motion.p)`
  height: 130px;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  /* padding-bottom: 30px; */
  padding: 10px 32px;
`;

const DivPara = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
`;
const BatterySwiper = styled(Swiper)`

`;

const dummyData = [
  {
    id: 1,
    heading: "BIGGER IS ALWAYS BETTER",
    para: "A class leading 4.4kWh battery that gives you a 200km range (IDC) on a single charge.Yep. Just imagine where all you could go in the city",
  },
  {
    id: 2,
    heading: "A LONGER, FULLER LIFE",
    para: "3X longer than other Lithium batteries around.",
  },
  {
    id: 3,
    heading: "EVEN THE BATTERY IS GREEN",
    para: "The LFP cell tech is more eco-friendly & sustainable since it doesn’t have any hazards materials like Nickle & Cobalt,unlike other widely used batteries.",
  },
  {
    id: 4,
    heading: "STILL KEEP AN EYE ON IT",
    para: "Smart monitoring keeps you updated about battery health with the smart alerts on your connected app.",
  },
];

export default function Scroller() {
  const [swiper, setSwiper] = useState(0);

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      {dummyData.map((i, index) => (
        <>
          {index === swiper ? (
            <>
              <Heading
                // animate={{x: 0}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, type: "tween" }}
              >
                {i.heading}
              </Heading>
              <DivPara>
                {" "}
                <Para
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.8, type: "tween" }}
                >
                  {i.para}
                </Para>
              </DivPara>
            </>
          ) : null}
        </>
      ))}

      <Swiper
        onActiveIndexChange={(i) => setSwiper(i.activeIndex)}
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={10}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide style={{ background: "#F3F3F3" }}>
          <ImgDiv>
            <img src={FirstImg} />
          </ImgDiv>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#F3F3F3" }}>
          {" "}
          <ImgDiv>
            <img src={SecondImg} style={{ width: "100%" }} />
          </ImgDiv>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#F3F3F3" }}>
          {" "}
          <ImgDiv>
            <img src={ThirdImg} style={{ width: "100%" }} />
          </ImgDiv>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#F3F3F3" }}>
          {" "}
          <ImgDiv>
            <img src={FourthImg} style={{ width: "100%" }} />
          </ImgDiv>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
