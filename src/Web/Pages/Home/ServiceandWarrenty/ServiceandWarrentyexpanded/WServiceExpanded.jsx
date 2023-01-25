import React from "react";
import {
  EffectCreative,
  EffectFade,
  Scrollbar,
  Mousewheel,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WFooter from "../../../../Components/Footer/WFooter";
import WNavbar from "../../../../Components/Navbar/WNavbar";
import WService from "../../../WService/WService";
import "./WServiceExpanded.scss";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
} from "framer-motion";
import BackButton from "../../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

function WServiceExpanded() {
  const navigate = useNavigate();
  return (
    <>
      <WNavbar />
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>
      <div className="w-service-expanded">
        <Swiper
          direction={"vertical"}
          //   nested={true}
          slidesPerView={1}
          spaceBetween={10}
          speed={3000}
          scrollbar={true}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.0000000000000001,
            releaseOnEdges: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
          // effect={"fade"}
          // fadeEffect= {{
          //     crossFade: true,
          //   }}
          //   onSlideNextTransitionEnd={() => Swiper.mousewheel.disable()}
        >
          <SwiperSlide>
            <WService />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "100vh !important",
              overflow: "inherit !important",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Swiper
              direction={"horizontal"}
              //   nested={true}
              style={{
                height: "100vh !important",
                overflow: "unset !important",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              }}
              slidesPerView={1}
              spaceBetween={10}
              speed={3000}
              //   scrollbar={true}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.000000000009,
                releaseOnEdges: true,
              }}
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -100],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative, Mousewheel, Pagination]}
              className="mySwiper"

              //   mousewheel={{
              //     forceToAxis: true,
              //     releaseOnEdges: true,
              //   }}
              //   modules={[Pagination, Mousewheel, EffectFade]}
              //   onSlideNextTransitionEnd={() => Swiper.mousewheel.disable()}
            >
              <SwiperSlide>
                <div
                  //   initial={{ x: "90vw",opacity: 1 }}
                  //   whileInView={{ x: "0vw", opacity: 1 }}
                  //   transition={{ duration: 1 , delay:2}}
                  //   viewport={{ once: false }}
                  className="w-ser4"
                >
                  <p>3 Yrs</p>
                  <h2>ROAD ASSISTANCE</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus
                    <br /> aenean donec iaculis fringilla magnis.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-ser2"
                  // // initial={{ x: "0vh", opacity: 1 }}
                  //   whileInView={{ x: "0vh", opacity: 1 }}
                  //   transition={{ delay: 3, duration: 2 }}
                  //   viewport={{ once: false }}
                >
                  <p>3 Yrs</p>
                  <h2>BATTERY WARRANTY</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus
                    <br /> aenean donec iaculis fringilla magnis.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="w-ser3"
                  //   initial={{ x: "0vh", opacity: 1 }}
                  //   whileInView={{ x: "0vh", opacity: 1 }}
                  //   transition={{ delay: 3, duration: 2 }}
                  //   viewport={{ once: false }}
                >
                  <p>3 Yrs</p>
                  <h2>MOTOR WARRANTY</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus
                    <br /> aenean donec iaculis fringilla magnis.
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          {/* <SwiperSlide style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div style={{ position: "absolute", bottom: "0px" }}>
              <WFooter />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <WFooter />
    </>
  );
}

export default WServiceExpanded;
