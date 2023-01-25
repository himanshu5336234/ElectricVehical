import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import WFooter from "../../Components/Footer/WFooter";
import WNavbar from "../../Components/Navbar/WNavbar";
import WBattery from "../Home/Battery/WBattery";
import WCharging from "../Home/Charging/WCharging";
import WConnectivity from "../Home/Connectivity/WConnectivity";
import WDesign from "../Home/Design/WDesign";
import WHome from "../Home/Home/WHome";
import WPerformance from "../Home/Performance/WPerformance";
import WReliable from "../Home/Reliability/WReliable";
import WSafety from "../Home/Safety/WSafety";
import WService from "../WService/WService";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative } from "swiper";
import "./LandingPage.scss";
import WLandingService from "../Home/ServiceandWarrenty/WLandingService";
import { useDispatch, useSelector } from "react-redux";
import { activeIndex } from "../../../redux/Action/activeIndexAction";
// import { swiperInstance } from "../../../redux/Action/swiperInstanceAction";
function LandingPage() {
  const swiper = useSwiper();
  const dispatch = useDispatch();
  const location = useLocation();
  const index = useSelector((state) => state.activeIndex.activeIndex);
  const instance = useSelector((state) => state.swiperInstance.swiperInstance);

  const [slideActive, setSlideActive] = useState(1);

  // const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  console.log(index);

  useEffect(() => {
    if (!swiperInstance?.el) return;
    swiperInstance.slideTo(index);
  }, [location, swiperInstance]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <WNavbar swiper={swiperInstance} activeIndex={index} />
        <Swiper
          direction={"vertical"}
          style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          speed={1500}
          onActiveIndexChange={(swiper) => {
            dispatch(activeIndex(swiper.activeIndex));
            // setActiveIndex(swiper.activeIndex);
          }}
          // onTransitionEnd={() => Swiper.mousewheel.disable()}
          slidesPerView={1}
          spaceBetween={10}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
          // onSwiper={(swiper) => dispatch(swiperInstance(swiper))}
          mousewheel={true}
          // grabCursor={true}
          effect={"creative"}
          // keyboardControl={true}
          // simulateTouch={false}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -50],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          modules={[EffectCreative, Mousewheel, Pagination]}
          // mousewheelReleaseOnEdges={index==8?true:false}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WHome />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WBattery />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WPerformance />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WCharging />
          </SwiperSlide>

          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WConnectivity />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WSafety />
          </SwiperSlide>

          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WReliable />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WDesign />
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <WLandingService />
          </SwiperSlide>
        </Swiper>
        {/* <WFooter /> */}
      </div>
    </>
  );
}
export default LandingPage;
