import React, { useState, useEffect } from "react";
import WFooter from "../../../Components/Footer/WFooter";
import WNavbar from "../../../Components/Navbar/WNavbar";
import BikeView1 from "../../../../asset/ExpandSlide/BikeView1.png";
import BikeView2 from "../../../../asset/ExpandSlide/BikeView2.png";
import BikeView3 from "../../../../asset/ExpandSlide/BikeView3.png";
import BikeView4 from "../../../../asset/ExpandSlide/BikeView4.png";
import BikeView5 from "../../../../asset/ExpandSlide/BikeView5.png";
import BikeView6 from "../../../../asset/ExpandSlide/BikeView6.png";
import BikeView7 from "../../../../asset/ExpandSlide/BikeView7.png";
import BikeView8 from "../../../../asset/ExpandSlide/BikeView8.png";
import BikeView9 from "../../../../asset/ExpandSlide/BikeView9.png";
import BikeView10 from "../../../../asset/ExpandSlide/BikeView10.png";
import BikeView11 from "../../../../asset/ExpandSlide/BikeView11.png";
import BikeView12 from "../../../../asset/ExpandSlide/BikeView12.png";
import BikeView13 from "../../../../asset/ExpandSlide/BikeView13.png";
import BikeView14 from "../../../../asset/ExpandSlide/BikeView14.png";
import BikeView15 from "../../../../asset/ExpandSlide/BikeView15.png";

import YellowBikeView1 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView1.png";
import YellowBikeView2 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView2.png";
import YellowBikeView3 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView3.png";
import YellowBikeView4 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView4.png";
import YellowBikeView5 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView5.png";
import YellowBikeView6 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView6.png";
import YellowBikeView7 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView7.png";
import YellowBikeView8 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView8.png";
import YellowBikeView9 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView9.png";
import YellowBikeView10 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView10.png";
import YellowBikeView11 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView11.png";
import YellowBikeView12 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView12.png";
import YellowBikeView13 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView13.png";
import YellowBikeView14 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView14.png";
import YellowBikeView15 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView15.png";
import YellowBikeView16 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView16.png";
import YellowBikeView17 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView17.png";
import YellowBikeView18 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView18.png";
import YellowBikeView19 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView19.png";
import YellowBikeView20 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView20.png";
import YellowBikeView21 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView21.png";
import YellowBikeView22 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView22.png";
import YellowBikeView23 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView23.png";
import YellowBikeView24 from "../../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView24.png";
import BottomScrollBike1 from "../../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike1.png";
import BottomScrollBike2 from "../../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike2.png";
import BottomScrollBike3 from "../../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike3.png";
import BottomScrollBike4 from "../../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike4.png";
import ScrollingBike1 from "../../../../asset/ExpandSlide/ScrollingImages/ScrollingBike1.png";
import ReactSpinningComponent from "./ReactSpinningComponent";
import GenericMotorBike from "../../../../asset/ExpandSlide/ScrollingImages/GenericMotorBike.png";
import "./WDesignDetail.css";
import AnimeLine from "./AnimeLine.gif";
import { motion } from "framer-motion";
import icon360 from "../../../../asset/icon360.svg";
import ArrowLeft from "../../../Assets/Design/ArrowLeft.svg";
import ArrowRight from "../../../Assets/Design/ArrowRight.svg";
import useSwipe from "../../../../components/common/UseDrag/useDrag";
// import AnimeLine from '../../../../asset/ExpandSlide/DesignExpandSlide/AnimeLine.gif';
import BottomCircle from "../../../../asset/ExpandSlide/DesignExpandSlide/BottomCircle.svg";
import {
  SpinBikeFirstSliderComponent,
  SwipeRightSpinSliderComponent2,
  SwipeLeftSpinSliderComponent1,
  SwipeRightSpinSliderComponent1,
  SwipeLeftSpinSliderComponent3,
  LastToFirstSlide,
  SwipeLeftSpinSliderComponent2,
} from "./SlidingComponents";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import "./conStyle.css";
import {
  Pagination,
  Mousewheel,
  Navigation,
  Keyboard,
  EffectFade,
} from "swiper";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";

const WDesignDetail = () => {
  const slideRef = React.useRef();
  const [slideValue, setSlideValue] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollingCheck, setScrollingCheck] = useState(false);
  const [slideScrollingValue, setSlideScrollingValue] = useState(1);
  const [circularRadius, setCircularRadius] = useState(300);
  const [spinBikeSlider, setSpinBikeSlider] = useState(0);
  const [spinBikeSliderSwipeControl, setSpinBikeSliderSwipeControl] =
    useState(true);
  const [lastSlideInfiteCheck, setLastSlideInfiniteCheck] = useState(false);
  const [rotationalTimeOut, setRotationalTimeOut] = useState(0);
  const [rotationalCheck, setRotationalCheck] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [initialTimeOut, setInitialTimeOut] = useState(false);
  const [swipeNumber, setSwiperNumber] = useState(0);

  const bind = useSwipe({
    onLeft: () => {
      slideScrollingValue < 7 &&
        setSlideScrollingValue(slideScrollingValue + 1);
    },
    onRight: () => {
      slideScrollingValue > 1 &&
        setSlideScrollingValue(slideScrollingValue - 1);
    },
  });

  const spinBind = useSwipe({
    onLeft: () => {
      spinBikeSlider < 2 && setSpinBikeSlider(spinBikeSlider + 1);
      spinBikeSlider === 2 && setSpinBikeSliderSwipeControl(true);
      setSpinBikeSliderSwipeControl(true);
      setRotationalCheck(true);
      if (spinBikeSlider === 2) {
        setSpinBikeSlider(0);
        setLastSlideInfiniteCheck(true);
        setSpinBikeSliderSwipeControl(false);
      }
      if (spinBikeSlider === 0) {
        setLastSlideInfiniteCheck(false);
        setSpinBikeSliderSwipeControl(true);
      }
      setRotationalTimeOut(0);
    },
    onRight: () => {
      spinBikeSlider > 0 && setSpinBikeSlider(spinBikeSlider - 1);
      setSpinBikeSliderSwipeControl(false);
      if (spinBikeSlider === 0) {
        setSpinBikeSlider(2);
      }
      if (spinBikeSlider !== 2 && lastSlideInfiteCheck) {
        setLastSlideInfiniteCheck(false);
      }
      setRotationalTimeOut(0);
      setRotationalCheck(true);
    },
  });

  useEffect(() => {
    let timer;

    if (rotationalCheck === true) {
      setTimeout(() => {
        setInitialTimeOut(true);
      }, 2000);
    }

    if (initialTimeOut) {
      timer = setInterval(() => {
        if (rotationalTimeOut < 22) {
          setRotationalTimeOut((currState) => currState + 1);
        }
      }, 100);
    }

    setTimerId(timer);

    return () => {
      clearInterval(timer);
    };
  }, [spinBikeSlider, initialTimeOut, rotationalCheck]);

  useEffect(() => {
    if (rotationalTimeOut > 22) {
      setInitialTimeOut(false);
      setRotationalCheck(false);
      clearInterval(timerId);
    }
  }, [rotationalTimeOut]);

  const [value, setValue] = useState(0.57);

  const min = 0.43;
  const max = 0.57;

  // get value within limits
  const valueWithinLimits = (v) => Math.min(Math.max(v, min), max);

  // custom range
  const range = [0, 100];

  // scaled range value
  const rangeValue = value * (range[1] - range[0]) + range[0];

  const RangeSlider = [
    { img: YellowBikeView1, slideNumber: 57 },
    { img: YellowBikeView3, slideNumber: 56 },
    { img: YellowBikeView5, slideNumber: 55 },
    { img: YellowBikeView7, slideNumber: 54 },
    { img: YellowBikeView9, slideNumber: 53 },
    { img: YellowBikeView11, slideNumber: 52 },
    { img: YellowBikeView13, slideNumber: 51 },
    { img: YellowBikeView15, slideNumber: 50 },
    { img: YellowBikeView17, slideNumber: 49 },
    { img: YellowBikeView19, slideNumber: 48 },
    { img: YellowBikeView20, slideNumber: 47 },
    { img: YellowBikeView21, slideNumber: 46 },
    { img: YellowBikeView22, slideNumber: 45 },
    { img: YellowBikeView23, slideNumber: 44 },
    { img: YellowBikeView1, slideNumber: 43 },
  ];
  console.log(spinBind);

  console.log("scrolling num", swipeNumber);

  const slideBike = (direction) => {
    if (direction === "left") {
      // console.log("right")
      spinBikeSlider > 0 && setSpinBikeSlider(spinBikeSlider - 1);
      setSpinBikeSliderSwipeControl(false);
      if (spinBikeSlider === 0) {
        setSpinBikeSlider(2);
      }
      if (spinBikeSlider !== 2 && lastSlideInfiteCheck) {
        setLastSlideInfiniteCheck(false);
      }
      setRotationalTimeOut(0);
      setRotationalCheck(true);
    } else {
      // console.log("left")
      spinBikeSlider < 2 && setSpinBikeSlider(spinBikeSlider + 1);
      spinBikeSlider === 2 && setSpinBikeSliderSwipeControl(true);
      setSpinBikeSliderSwipeControl(true);
      setRotationalCheck(true);
      if (spinBikeSlider === 2) {
        setSpinBikeSlider(0);
        setLastSlideInfiniteCheck(true);
        setSpinBikeSliderSwipeControl(false);
      }
      if (spinBikeSlider === 0) {
        setLastSlideInfiniteCheck(false);
        setSpinBikeSliderSwipeControl(true);
      }
      setRotationalTimeOut(0);
    }
  };
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
      <div className="wdesign-spinning-container">
        <div className="wdesign-spinning-left-container">
          <div className="wrange-slider-img">
            {/* {RangeSlider.map((data) => {
              return data.slideNumber === Math.round(rangeValue) ? (
                <img
                  className="wrange-slider-inner-img"
                  src={data.img}
                  style={{ width: "100%" }}
                />
              ) : null;
            })} */}
            <ReactSpinningComponent/>
          </div>

          <div className="wtrack-container">
            <CircularInput
              id="circularRange"
              className="circular-parent-range-slider"
              radius={280}
              value={valueWithinLimits(value)}
              onChange={(v) => setValue(valueWithinLimits(v))}
            >
              <CircularTrack strokeWidth={3} stroke="rgba(255,255,255,0.2)" />
              <CircularProgress
                className="custom-progress"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={4}
              />
              <CircularThumb
                r={18}
                strokeWidth="1"
                className="stroke-center-main"
                fill="rgba(0,0,0,0.5)"
              />
              <CircularThumb r={8} strokeWidth="1" fill="rgba(255,255,255)" />
            </CircularInput>
          </div>

          <div className="left-spinning-shadow"></div>
          <div className="top-spinning-shadow"></div>
          <div className="right-spinning-shadow"></div>
          <motion.div
          initial={{y:"6vh", opacity:0}}
          whileInView={{y:"0vh", opacity:1}}
          transition={{duration:1, delay:0.5}}
          once={false}
          className={"wspinning-text-content"}>
            <div>
              <img src={icon360} />
            </div>
            <span>Spin Your Rorr</span>
          </motion.div>
        </div>
        <div className="wdesign-spinning-right-container">
          <div className="wdesign-inner-spinning-right-container">
            <div className="wdesign-upper-inner-spinning-right-container">
              <span>
                DESIGNED<br></br>TO TURN ON
              </span>
              <span>Even when switched off</span>
            </div>
            <div className="wdesign-bottom-inner-spinning-right-container">
              <img src={AnimeLine} />
            </div>
          </div>
        </div>
      </div>
      <div className="wdesign-rotational-spinning-container">
        <div
          onClick={() => {
            slideBike("left");
          }}
          className="left-arrow-slider"
        >
          <img src={ArrowLeft} />
        </div>
        <div className="wmiddle-rotational-spinning-container">
          <div className="wspin-bike-slider-container">
            <div className="wspin-bike-slider-inner-row1">
              <span>3 COLORED</span>
              <span>Classic Designs</span>
            </div>
            <div className="wspin-bike-slider-inner-row">
              <div className="wspin-bike-slider-inner-column">
                <div {...spinBind()} ref={slideRef}>
                  {spinBikeSlider === 0 &&
                  lastSlideInfiteCheck === false &&
                  spinBikeSliderSwipeControl === true ? (
                    <SpinBikeFirstSliderComponent
                      spinBikeSlider={spinBikeSlider}
                    />
                  ) : spinBikeSlider === 1 &&
                    lastSlideInfiteCheck === false &&
                    spinBikeSliderSwipeControl === true ? (
                    <SwipeLeftSpinSliderComponent1
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : spinBikeSlider === 2 &&
                    lastSlideInfiteCheck === false &&
                    spinBikeSliderSwipeControl === true ? (
                    <SwipeLeftSpinSliderComponent2
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : spinBikeSlider === 2 &&
                    lastSlideInfiteCheck === false &&
                    spinBikeSliderSwipeControl === false ? (
                    <SwipeLeftSpinSliderComponent3
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : spinBikeSlider === 1 &&
                    lastSlideInfiteCheck === false &&
                    spinBikeSliderSwipeControl === false ? (
                    <SwipeRightSpinSliderComponent2
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : spinBikeSlider === 0 &&
                    lastSlideInfiteCheck === false &&
                    spinBikeSliderSwipeControl === false ? (
                    <SwipeRightSpinSliderComponent1
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : spinBikeSlider === 0 &&
                    lastSlideInfiteCheck === true &&
                    spinBikeSliderSwipeControl === false ? (
                    <LastToFirstSlide
                      spinBikeSlider={spinBikeSlider}
                      rotationalTimeOut={rotationalTimeOut}
                    />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="wspin-bike-slide-bottom-circle">
              <img src={BottomCircle}></img>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            slideBike("right");
          }}
          className="right-arrow-slider"
        >
          <img src={ArrowRight} />
        </div>
        <div className="wspin-bike-slide-anime-line">
          <img src={AnimeLine} />
        </div>
      </div>
      <div className="wdesign-scrolling-container">
        <div className="wbike-scrolling-inner-container">
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>ARX frame</span>
            <span>Proprietary Design</span>
          </motion.div>
          <div className="wbike-scrolling">
            <motion.img
              initial={{ scale: 3 }}
              whileInView={{ scale: 1.12, x: "20px" }}
              transition={{ duration: 1 }}
              src={ScrollingBike1}
            ></motion.img>
          </div>
          <motion.div
            initial={{ y: "10vh", opacity: 0, x: "0vw", overflowX: "hidden" }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              x: "-5vw",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span>
              A fully indigenous innovative frame designed specially for
              electric bikes. The design ensures higher stability through a
              lower center of gravity which makes maneuvering through traffic
              (and around those damned potholes) a breeze.
            </span>
          </motion.div>
        </div>
        {/* <motion.div className="wgeneric-bike"
                    initial={{ y: "0vh", opacity: 1}}
                    whileInView={{ y: "-20vh", opacity: 1 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.img
                        src={GenericMotorBike}></motion.img>
                </motion.div> */}
      </div>

      {/* ------------------ LAST SECTION ---------------- */}
      <div className="wbike-scrolling-container-2">
        <Swiper
          direction="vertical"
          pagination={false}
          effect="fade"
          // mousewheel={true}
          mousewheel={{
            releaseOnEdges: true,
          }}
          onAnimationEnd={() => Swiper.mousewheel.disable()}
          onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
          keyboard={true}
          slidesPerView={1}
          modules={[Pagination, EffectFade, Mousewheel, Keyboard, Navigation]}
        >
          <SwiperSlide className="wbike-outer-swipe-slide-container">
            {
              swipeNumber===0 &&
            (<div className="wbike-inner-swipe-slide-container">
              {/* <h1>Hello 1</h1> */}
              <div className="w-bike-inner-swipe-slide-left-container1">
                <motion.img
                initial={{scale:0.8, opacity:0}}
                whileInView={{opacity:1,scale:1,overflowX:"hidden"}}
                viewport={{once:false}}
                transition={{delay:0, duration:0.3, ease:"circOut"}}
                 src={BottomScrollBike2} />
              </div>
              <div className="w-bike-inner-swipe-slide-right-container1">
                <div>
                  <span>Excellent Features</span>
                  <span>NEO CLASSIC LOOK</span>
                  <span>
                    Rorr’s new-age naked street fighter design is inspired by a
                    trending retro vibe that will appeal to you and your elder
                    brother. After all, you are what you ride.
                  </span>
                </div>
              </div>
            </div>)
              }
          </SwiperSlide>
          <SwiperSlide className="wbike-outer-swipe-slide-container">
            {swipeNumber === 1 && (
              <div className="wbike-inner-swipe-slide-container">
                <div className="wbike-inner-swipe-slide-container">
                  <motion.div
                    initial={{ x: "0vw", opacity: 0 }}
                    whileInView={{ x: "-20vw", opacity: 1 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    viewport={{ once: false, amount: 0 }}
                    className="w-bike-inner-swipe-slide-right-container1"
                    style={{ position: "absolute" }}
                  >
                    <div>
                      <span>Excellent Features</span>
                      <span>FLOATING DESIGN</span>
                      <span>
                        Make heads turn wherever you go, and wherever you stop.
                        Make onlookers wonder how your bike feels like it’s
                        floating on thin air.
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    // viewport={{ once: false, amount: 0 }}
                    // initial={{ y: 0 }}
                    // whileInView={{ y: "20vh", x: "50vw" }}
                    // transition={{ delay: 0.5, duration: 1 }}
                    className="w-bike-inner-swipe-slide-left-container1"
                  >
                    <motion.img
                    initial={{opacity:0, y:"0vh"}}
                    whileInView={{opacity:1,y:"20vh", x:"50vw"}}
                    viewport={{once:false}}
                    transition={{delay:0, duration:0.3,ease:"circOut"}}
                     src={BottomScrollBike4} />
                  </motion.div>
                  <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    whileInView={{ y: "-70vh", opacity: 0 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    viewport={{ once: false }}
                    className="w-bike-inner-swipe-slide-right-container1"
                  >
                    <div>
                      <span>Excellent Features</span>
                      <span>TACTICAL DIMENSIONS</span>
                      <span>
                        A longer wheelbase specific for an electric bike
                        combined with optimal rake provides amazing sturdiness
                        and further stability. You’ll realize it when you take
                        the test ride.
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="wbike-outer-swipe-slide-container2">
            {swipeNumber === 2 && (
              <div className="wbike-inner-swipe-slide-container2">
                <motion.div
                initial={false}
                whileInView={{y:"10vh"}}
                >
                  <span>Excellent Features</span>
                  <span>TACTICAL DIMENSIONS</span>
                  <span>
                  A longer wheelbase specific for an electric bike
                        combined with optimal rake provides amazing sturdiness
                        and further stability. You’ll realize it when you take
                        the test ride.
                  </span>
                </motion.div>
                <motion.div
                >
                  <motion.img
                  initial={{scale:0.8, opacity:0,y:"40vh"}}
                  whileInView={{scale:0.8, opacity:1, y:"0vh"}}
                  viewport={{once:false}}
                  transition={{delay:0,duration:0.3, ease:"circOut"}}
                  src={BottomScrollBike2} />
                </motion.div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="wbike-outer-swipe-slide-container">
            {
              swipeNumber===3 && 
            (<div className="wbike-inner-swipe-slide-container">
              <div className="w-bike-inner-swipe-slide-left-container1">
                <motion.img
                initial={{y:"-10vh",x:"-30vw",opacity:0, scale:0.5}}
                whileInView={{y:"0vh",x:"0vw", opacity:1, scale:1}}
                viewport={{once:false}}
                transition={{delay:0, duration:0.3, ease:"circOut"}}
                 src={BottomScrollBike1} />
              </div>
              <div className="w-bike-inner-swipe-slide-right-container1">
                <motion.div
                initial={{y:"-20vh", opacity:0}}
                whileInView={{y:"0vh", opacity:1}}
                viewport={{once:false}}
                transition={{duration:0.3, ease:"circOut"}}
                >
                  <span>Excellent Features</span>
                  <span>Stainless Steel Body</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tempor aliquam ultrices eget. Arcu, et aliquam mollis risus
                    enim.{" "}
                  </span>
                </motion.div>
              </div>
            </div>)
              }
          </SwiperSlide>
          <SwiperSlide className="wbike-outer-swipe-slide-container">
            {
              swipeNumber===4 && 
            (<div className="wbike-inner-swipe-slide-container">
              <div className="w-bike-inner-swipe-slide-left-container1">
                <motion.img
                initial={{y:"0vh",x:"0vw",opacity:0, scale:0.5}}
                whileInView={{y:"0vh",x:"45vw", opacity:1, scale:1}}
                viewport={{once:false}}
                transition={{delay:0, duration:0.3, ease:"circOut"}}
                 src={BottomScrollBike3} />
              </div>
              <div className="w-bike-inner-swipe-slide-right-container1">
                <motion.div
                initial={{x:"0vw",opacity:0}}
                whileInView={{x:"-45vw", opacity:1}}
                viewport={{once:false}}
                transition={{delay:0, duration:0.5}}
                >
                  <span>Excellent Features</span>
                  <span>Stainless Steel Body</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tempor aliquam ultrices eget. Arcu, et aliquam mollis risus
                    enim.{" "}
                  </span>
                </motion.div>
              </div>
            </div>)
              }
          </SwiperSlide>
        </Swiper>
      </div>
      <WFooter />
    </>
  );
};

export default WDesignDetail;
