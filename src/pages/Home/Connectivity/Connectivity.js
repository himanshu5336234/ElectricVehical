import React, { ref, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ConnectivityBg from "../../../asset/ConnectivityBg.jpg";
import Slide1 from "../../../asset/Connectivityhome.png";
import Slide2 from "../../../asset/performance tuning.png";
import Slide3 from "../../../asset/service connect.png";
import Slide4 from "../../../asset/remote diagnostics.png";
import SlideAni from "../../../asset/get started.png";
import Union from "../../../asset/Union.svg";
import HandAnimation from "../../../asset/HandAnimation.gif";
import "./Connectivity.css";
import Animation from "./Animation.gif";
import AnimeLine from "./AnimeLine.gif";
import Slider from "react-slick";
import { display, width } from "@mui/system";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./conStyle.css";
import {
  useScroll,
  useViewportScroll,
  useTransform,
  motion,
} from "framer-motion";
// import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import Topbar from "../../../components/Topbar/Topbar";
import "../../../components/CommonLayer/CommonLayer.scss";
import CloseIcon from "@mui/icons-material/Close";
import useSwipe from "../../../components/common/UseDrag/useDrag";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
export default function Connectivity() {
  const animateRef = useRef();
  const animateRef2 = useRef();
  const navigate = useNavigate();
  const [checkClick, setCheckClick] = useState(true);
  const [checkSlideState, setCheckSlideState] = useState();
  const [slidingControls, setSlidingControls] = useState(0);
  const [swiperNumber, setSwiperNumber] = useState(0);

  let checkStatus;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: function (currSlide, nextSlide) {},
    afterChange: function (curr) {
      return curr;
    },
  };
  const handleClose = () => {
    navigate("/");
  };
  useEffect(() => {
    let check = true;
    const run = () => {
      window.addEventListener("scroll", () => {
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

  const bind = useSwipe({
    onLeft: () => {
      slidingControls < 3 && setSlidingControls(slidingControls + 1);
    },
    onRight: () => {
      slidingControls > 0 && setSlidingControls(slidingControls - 1);
    },
  });

  return (
    <>
      <CommonLayer title={"Connectivity"} value={"Connectivity"} />
      <div className="connectivity-parent-container">
        <div className="connectivity-container ">
          <img src={ConnectivityBg}></img>
          <div className="ani-circle">
            <div className="onscroll-circle-parent">
              <img
                className={
                  checkClick
                    ? "onscroll-circle-animation-first "
                    : "onscroll-circle-animation"
                }
                src={Animation}
              ></img>
            </div>
            <div className="ani-circle-content">
              <div
                className={
                  checkClick ? "" : "onscroll-text-bottom-aligned-span"
                }
              >
                <div
                  className={
                    checkClick ? "" : "onscroll-text-bottom-aligned-ror"
                  }
                >
                  <img src={Union}></img>
                  <span>Rorr</span>
                </div>
                <div className="ani-circle-content-text">
                  <span>SMART</span>
                  <span>CONNECT</span>
                </div>
              </div>
            </div>
          </div>
          <div ref={animateRef} className="connectivity-bottom">
            {checkClick ? (
              <img
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                }}
                src={AnimeLine}
              ></img>
            ) : (
              <span className={checkClick ? "" : "floating-text-iot"}>
                IOT CONNECTED
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="connectivity-bottom-container">
        <div className="connectivity-inner">
          <div className="connectivity-gif">
            <img src={AnimeLine}></img>
          </div>
        </div>
        {checkClick ? null : (
          <span className={checkClick ? "" : "floating-text"}>
            what you get
          </span>
        )}
        <div className="connectivity-bottom-inner-container">
          <div className="connectivity-custom-slider-container">
            <div className="custom-slider-img-section">
              {/* {
               slidingControls === 0 ? (<div>
                <img className="shadow-effect" src={Slide1}></img>
              </div>) : slidingControls === 1 ? (<div>
                <img className="shadow-effect" src={Slide2}></img>
              </div>) : slidingControls === 2 ?(<div>
                <img className="shadow-effect" src={Slide3}></img>
              </div>) : (<div>
                <img className="shadow-effect" src={Slide4}></img>
              </div>)
              } */}
              <Swiper
                direction={"horizontal"}
                // pagination={{
                //   clickable: true,
                // }}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                slidesPerView={1}
                onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
                onSwiper={(swiper) => {
                  //  setSwiper(swiper);
                }}
                modules={[Pagination, Mousewheel, Keyboard, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#191C24",
                  }}
                >
                  <img className="shadow-effect" src={Slide1} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#191C24",
                  }}
                >
                  <img className="shadow-effect" src={Slide2} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#191C24",
                  }}
                >
                  <img className="shadow-effect" src={Slide3} />
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#191C24",
                  }}
                >
                  <img className="shadow-effect" src={Slide4} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="custom-slider-img-dots">
              <div>
                <motion.div
                  initial={{ y: "0vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 1 }}
                  className={
                    swiperNumber === 0
                      ? "active-dots-slider"
                      : "nonactive-dots-slider"
                  }
                ></motion.div>
                <motion.div
                  initial={{ y: "0vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 1.1 }}
                  className={
                    swiperNumber === 1
                      ? "active-dots-slider"
                      : "nonactive-dots-slider"
                  }
                ></motion.div>
                <motion.div
                  initial={{ y: "0vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 1.2 }}
                  className={
                    swiperNumber === 2
                      ? "active-dots-slider"
                      : "nonactive-dots-slider"
                  }
                ></motion.div>
                <motion.div
                  initial={{ y: "0vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  viewport={{ amount: 1 }}
                  transition={{ duration: 1.3 }}
                  className={
                    swiperNumber === 3
                      ? "active-dots-slider"
                      : "nonactive-dots-slider"
                  }
                ></motion.div>
                {/* <motion.div
                initial={{y : "10vh", opacity: 0}}
                whileInView={{y : "0", opacity: 1}}
                viewport={{amount: 1}}
                transition={{duration: 1.4}}
                 className={slidingControls===4? "active-dots-slider" : "nonactive-dots-slider"}></motion.div> */}
              </div>
            </div>
            <div className="bottom-slider-content">
              {swiperNumber === 0 ? (
                <motion.div
                  className={
                    swiperNumber === 0
                      ? "bottom-slider-content-scroll"
                      : "bottom-slider-content-scroll-hidden"
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, y: "2vh" }}
                    whileInView={{ opacity: 1, y: "0vh" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className={
                      swiperNumber === 0
                        ? "bottom-slider-content-show-hide-show"
                        : "bottom-slider-content-show-hide"
                    }
                  >
                    FIND MY RORR
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                  >
                    Works even better than that smartphone of yours.One click to
                    get instant location, battery status, and range.
                  </motion.span>
                </motion.div>
              ) : swiperNumber === 1 ? (
                <div
                  className={
                    swiperNumber === 1
                      ? "bottom-slider-content-scroll"
                      : "bottom-slider-content-scroll-hidden"
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, y: "2vh" }}
                    whileInView={{ opacity: 1, y: "0vh" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    TRUE RIDING CONTROL
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                  >
                    Get ride histories & riding patterns to have real control on
                    your rides.This is how we use technology to help humans ride
                    better and adapt smarter.
                  </motion.span>
                </div>
              ) : swiperNumber === 2 ? (
                <motion.div className="bottom-slider-content-scroll">
                  <motion.span
                    initial={{ opacity: 0, y: "2vh" }}
                    whileInView={{ opacity: 1, y: "0vh" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    REMOTE DIAGNOSTICS
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                  >
                    Stay connected with your electric bike through the App and
                    monitor bike health to stay safewith smart alerts.
                  </motion.span>
                </motion.div>
              ) : swiperNumber === 3 ? (
                <div className="bottom-slider-content-scroll">
                  <motion.span
                    initial={{ opacity: 0, y: "2vh" }}
                    whileInView={{ opacity: 1, y: "0vh" }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    SERVICE CONNECT
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                  >
                    One click to find a nearby charger, raise a service request
                    or just talk to usabout your work place politics. We’re
                    happytohelp.
                  </motion.span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-button">
        <div className="footer-button-inner">
          <span>BOOK A TEST RIDE</span>
        </div>
      </div> */}
      {/* <Footer></Footer> */}
    </>
  );
}
