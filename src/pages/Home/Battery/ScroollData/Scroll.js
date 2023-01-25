import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useSwipe from "../../../../components/common/UseDrag/useDrag";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./scrollStyle.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const FirstImg = require("../../../../asset/1stScrollImg.png");
const SecondImg = require("../../../../asset/BatteryScroll2ndImg.png");
const ThirdImg = require("../../../../asset/Battery3rdimg.png");
const FourthImg = require("../../../../asset/Battery4img.png");

const Div = styled.div`
  /* padding: 0 24px; */
  width: 100%;
  /* width: 100%; */
  /* margin: 8px auto 24px; */
  overflow-x: auto;
  transition: all 5s ease;
  /* margin: 0 10px; */
  // white-space: nowrap;
  display: flex;
  /* height: 100vh; */

  overflow-x: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-x: repeat();
`;
const Heading = styled.p`
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 16px;
`;
const Para = styled.p`
  height: 120px;
  font-weight: 400;
  font-size: 18px;
  /* padding-bottom: 30px; */
`;
const Div2 = styled.div`
  /* margin: 8px; */
  /* height: max-content; */
  display: flex;
  align-items: flex-end;
  justify-content: unset;
  /* height: 100vh; */
  justify-content: space-evenly;
`;
const ImgDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DivPara = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
`;
export default function Scroll() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const dummyData = [
    {
      id: 1,
      heading: "Larger: 4.4kWh",
      para: "Class leading battery size to provide you with the highest range of 200kms *(IDC) on single charge to go anywhere in the city.",
      Image: FirstImg,
    },
    {
      id: 2,
      heading: "BIGGER IS ALWAYS BETTER:",
      para: "A class leading 4.4kWh battery that gives you a 200km range (IDC) on a single charge.Yep. Just imagine where all you could go in the city",
      Image: SecondImg,
    },
    {
      id: 3,
      heading: "Cleaner",
      para: "Go truly green with Rorr as LFP cell technology is more ecofriendly, sustainable & does not include any hazards materials like Nickle & cobalt in other widely used batteries.",
      Image: ThirdImg,
    },
    {
      id: 4,
      heading: "Smart monitoring",
      para: "To always keep you updated of the battery health to always keep you safe with the smart alerts on connected app.",
      Image: FourthImg,
    },
  ];

  const [stateScroll, setStateScroll] = useState(1);

  const bind = useSwipe({
    onLeft: () => stateScroll < 4 && setStateScroll(stateScroll + 1),
    onRight: () => stateScroll > 1 && setStateScroll(stateScroll - 1),
  });
  // console.log("stateScroll", stateScroll);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Heading
            // animate={{x: 0}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            BIGGER IS ALWAYS BETTER:
          </Heading>
          <DivPara>
            {" "}
            <Para
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              A class leading 4.4kWh battery that gives you a 200km range (IDC)
              on a single charge. Yep. Just imagine where all you could go in
              the city.
            </Para>
          </DivPara>
          <ImgDiv>
            <img src={FirstImg} style={{ width: "100%" }} />
          </ImgDiv>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Heading
            // animate={{x: 0}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Longer Life
          </Heading>
          <div>
            {" "}
            <Para
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              3x higher life than other widely used Lithium batteries, to give
              you the best battery life.",
            </Para>
          </div>
          <ImgDiv>
            <img src={SecondImg} style={{ width: "100%" }} />
          </ImgDiv>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Heading
            // animate={{x: 0}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Cleaner
          </Heading>
          <div>
            {" "}
            <Para
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              Go truly green with Rorr as LFP cell technology is more
              ecofriendly, sustainable & does not include any hazards materials
              like Nickle & cobalt in other widely used batteries.
            </Para>
          </div>
          <ImgDiv>
            <img src={ThirdImg} style={{ width: "100%" }} />
          </ImgDiv>
        </SwiperSlide>
        <SwiperSlide>
          <Heading
            // animate={{x: 0}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Smart monitoring
          </Heading>
          <div>
            {" "}
            <Para
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              To always keep you updated of the battery health to always keep
              you safe with the smart alerts on connected app.
            </Para>
          </div>
          <div>
            <img src={FourthImg} style={{ width: "100%" }} />
          </div>{" "}
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
