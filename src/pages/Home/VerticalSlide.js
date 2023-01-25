import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import HomeComp from "./HomeComp/HomeComp";
import PerformanceComp from "./Permormance/Performance";

import Battery from "./Battery/Battery";
import Charging from "./Charging/Charging";
import ConnectivityComp from "./Connectivity/ConnectivityComp";
import Safety from "./Safety/Safety";
import Reliability from "./Reliability/Reliability";
import Design from "./Design/Design";
import Warrenty from "./Warrenty/Warrenty";
import Pricing from "./Pricing/Pricing";
import FullSpecification from "./FullSpecification/FullSpecificationComp";

export default function VerticalSlide() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        // pagination={{
        //   clickable: true,
        // }}
       // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <HomeComp />
        </SwiperSlide>
        
        <SwiperSlide>
          <Battery/>
        </SwiperSlide>
        <SwiperSlide>
        <PerformanceComp/>
        </SwiperSlide>
        <SwiperSlide><Charging/></SwiperSlide>
        <SwiperSlide><ConnectivityComp/></SwiperSlide>
        <SwiperSlide><Safety/></SwiperSlide>
        <SwiperSlide><Reliability/></SwiperSlide>
        <SwiperSlide><Design/></SwiperSlide>
        <SwiperSlide><Warrenty/></SwiperSlide>
        <SwiperSlide><Pricing/></SwiperSlide>
        <SwiperSlide><FullSpecification/></SwiperSlide>

      </Swiper>
    </>
  );
}
