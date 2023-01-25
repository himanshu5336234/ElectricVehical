import React, { useEffect, useRef, useState } from "react";
import WFooter from "../../../Components/Footer/WFooter";
import WNavbar from "../../../Components/Navbar/WNavbar";
import ConnectivityBg from "../../../../Web/Assets/Connectivity/ConnectivityBg.jpg";
import Union from "../../../../asset/Union.svg";
import Animation from "../../../../pages/Home/Connectivity/Animation.gif";
import AnimeLine from "../../../../pages/Home/Connectivity/AnimeLine.gif";
import "./WConnectivityDetails.css";
import Slide1 from "../../../../asset/Slide1.png";
import Slide2 from "../../../../asset/Slide2.png";
import Slide3 from "../../../../asset/Slide3.png";
import Slide4 from "../../../../asset/Slide4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./conStyle.css";
import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { motion } from "framer-motion";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

const WConnectivityDetail = () => {
  const animateRef = useRef();
  const navigate = useNavigate();
  const [checkClick, setCheckClick] = useState(true);
  const [slidingControls, setSlidingControls] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [swiperNumber, setSwiperNumber] = useState(0);

  useEffect(() => {
    let check = true;
    const run = () => {
      window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset <= 100 && window.pageYOffset >= 50 && check) {
          check = false;
          setCheckClick(false);
        }
        if (window.pageYOffset == 0) {
          check = true;
          setCheckClick(true);
        }
      });
    };
    run();
  }, [checkClick]);
  // window.addEventListener('wheel', wheel)

  function wheel(e) {
    // console.log("scrolling", parseInt(e.deltaY));
    console.log("inner scrolling", window.pageYOffset);
    setSlidingControls(slidingControls + 1);
  }
  console.log(slidingControls);

  console.log("Swiper Values are getting", swiper);

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
      <div className="wconnectivity-parent-container">
        <div className="wconnectivity-container ">
          <img src={ConnectivityBg}></img>
          <div className="wani-circle">
            <div className="wonscroll-circle-parent">
              <img
                className={
                  checkClick
                    ? "wonscroll-circle-animation-first"
                    : "wonscroll-circle-animation"
                }
                src={Animation}
              ></img>
            </div>
            <div className="wani-circle-content">
              <div
                className={
                  checkClick ? "" : "wonscroll-text-bottom-aligned-span"
                }
              >
                <div
                  className={
                    checkClick ? "" : "wonscroll-text-bottom-aligned-ror"
                  }
                >
                  <img src={Union}></img>
                  <span>Rorr</span>
                </div>
                <div className="wani-circle-content-text">
                  <span>SMART</span>
                  <span>CONNECT</span>
                </div>
              </div>
            </div>
          </div>
          <div ref={animateRef} className="wconnectivity-bottom">
            {checkClick ? (
              <img
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                }}
                src={AnimeLine}
              />
            ) : (
              <span className={checkClick ? "" : "wfloating-text-iot"}>
                IOT CONNECTED
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="wconnectivity-bottom-container">
        <div>
          {/* <img src={Slide1}></img>
            <img src={Slide2}></img>
            <img src={Slide3}></img>
            <img src={Slide4}></img> */}
          {swiperNumber === 0 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide1}
            />
          ) : swiperNumber === 1 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide2}
            />
          ) : swiperNumber === 2 ? (
            <motion.img
              className="sliding-img-transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              src={Slide3}
            />
          ) : (
            swiperNumber === 3 && (
              <motion.img
                className="sliding-img-transition"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                src={Slide4}
              />
            )
          )}
        </div>

        {/* ---------------- IMPORTED SLIDER ---------------------- */}
        <div className="wconnectivity-slider-container-content">
          <Swiper
            direction={"vertical"}
            // pagination={{
            //   clickable: true,
            // }}
            pagination={false}
            mousewheel={{
              sensitivity:1,
              thresholdDelta:1,
              forceToAxis:true
              
            }}
            speed={1800}
            keyboard={true}
            slidesPerView={1}
            onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
            onSwiper={(swiper) => {
              // console.log("Helloooo");
              setSwiper(swiper);
            }}
            modules={[Pagination, Mousewheel, Keyboard, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%", backgroundColor: "#191C24" }}
            >
              <div>
                <span>FIND MY RORR</span>
                <span>
                  Works even better than that smartphone of yours. One click to
                  get instant location, battery status, and range.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%", backgroundColor: "#191C24" }}
            >
              <div>
                <span>TRUE RIDING CONTROL</span>
                <span>
                  Get ride histories & riding patterns to have real control on
                  your rides. This is how we use technology to help humans ride
                  better and adapt smarter.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%", backgroundColor: "#191C24" }}
            >
              <div>
                <span>Remote Diagnostics</span>
                <span>
                  Stay connected with your electric bike through the App and
                  monitor bike health to stay safe with smart alerts.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="inner-sliding-content"
              style={{ width: "100%", backgroundColor: "#191C24" }}
            >
              <div>
                <span>Service Connect</span>
                <span>
                  One click to find a nearby charger, raise a service request or
                  just talk to us about your work place politics. We’re happy to
                  help.
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="wconnectivity-slider-container-indicator">
          <div
            className={
              swiperNumber === 0
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 1
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 2
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
          <div
            className={
              swiperNumber === 3
                ? "wconnectivity-slider-container-indicator-active-dots"
                : "wconnectivity-slider-container-indicator-dots"
            }
          ></div>
        </div>
      </div>
      <WFooter />
    </>
  );
};

export default WConnectivityDetail;
