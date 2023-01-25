import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import BottomButton from "../../../components/common/CommonFooterButton/BottomButton";
import HomeComp from "./Home.js";
import Battery from "./Battery";
import Performance from "./Performance";
import Topbar from "../../../components/Topbar/Topbar";
import DropDown from "../../../components/common/Dropdown/dropdown";
import Charging from "./Charging";
import Connectivity from "./Connectivity";
import Safety from "./Safety";
import Reliability from "./Reliability";
import Design from "./Design";
import Warrenty from "./Warrenty";
import Pricing from "../Pricing/Pricing";
import FullSpecification from "../FullSpecification/FullSpecificationComp";
import { Mousewheel, Pagination, Navigation } from "swiper";
import { FreeMode, Scrollbar } from "swiper";
export default function HomeScroller() {
  const location = useLocation();
  const [my_swiper, set_my_swiper] = useState();
  const [stateScroll, setStateScroll] = useState("Home");
  const [scrollIndex, setScrollIndex] = useState(0);

  const pages = [
    "Home",
    "Battery",
    "Performance",
    "Charging",
    "Connectivity",
    "Safety",
    "Reliability",
    "Design",
    "Service&Warranty",
    "Pricing",
    "Full Specs",
  ];

  const renderData = () => {
    switch (scrollIndex) {
      case 0:
        return "Home";
      case 1:
        return "Battery";
      case 2:
        return "Performance";
      case 3:
        return "Charging";
      case 4:
        return "Connectivity";
      case 5:
        return "Safety";
      case 6:
        return "Reliability";
      case 7:
        return "Design";
      case 8:
        return "Warrenty";
      case 9:
        return "Pricing";
      case 10:
        return "Full Spaces";
    }
  };

  function checkPage(page) {
    return page == stateScroll;
  }

  useEffect(() => {
    if (location?.state?.id) {
      setScrollIndex(location.state.id);
    }
  }, [location?.state?.id]);


  useEffect(() => {
    if (scrollIndex) {
      my_swiper?.slideTo(scrollIndex);
    }
  }, [scrollIndex]);

  console.log(
    "scrollIndexscrollIndex",
    scrollIndex,
    stateScroll,
    renderData(),
    pages.findIndex(checkPage)
  );

  return (
    <>
      <Topbar />
      <div>
        <div className="top-bottom-inside">
          <DropDown
            setStateScroll={setScrollIndex}
            stateScroll={renderData()}
            color={"#111318"}
            options={pages}
            width={"195px"}
            margin={"0px 32px 0px 0"}
          />
        </div>{" "}
      </div>{" "}
      <Swiper
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        direction={"vertical"}
        style={{ height: "calc(100vh - 90px)" }}
        onActiveIndexChange={(i) => setScrollIndex(i.activeIndex)}
        slidesPerView={"auto"}
        spaceBetween={0}
        mousewheel={true}
       
        Navigation={renderData()}
        modules={[Mousewheel, Pagination, Navigation,]}
      >
        <SwiperSlide style={{ height: "auto" }}>
          <HomeComp />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Battery />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Performance />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Charging />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Connectivity />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Safety />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Reliability />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Design />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Warrenty />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <Pricing />
        </SwiperSlide>
        <SwiperSlide style={{ height: "auto" }}>
          <FullSpecification />
        </SwiperSlide>
      </Swiper>
      <div style={{ position: "absolute", zIndex: 9 }}>
        <BottomButton />
      </div>
    </>
  );
}
