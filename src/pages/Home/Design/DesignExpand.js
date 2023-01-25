import React, { useEffect, useState, useRef } from "react";
import { ReactImageTurntable } from 'react-image-turntable';
import { ReactImageTurntableProps } from 'react-image-turntable';
import ReactSpinningComponent from './ReactSpinningComponent';
import BikeView1 from '../../../asset/ExpandSlide/BikeView1.png';
import BikeView2 from '../../../asset/ExpandSlide/BikeView2.png';
import BikeView3 from '../../../asset/ExpandSlide/BikeView3.png';
import BikeView4 from '../../../asset/ExpandSlide/BikeView4.png';
import BikeView5 from '../../../asset/ExpandSlide/BikeView5.png';
import BikeView6 from '../../../asset/ExpandSlide/BikeView6.png';
import BikeView7 from '../../../asset/ExpandSlide/BikeView7.png';
import BikeView8 from '../../../asset/ExpandSlide/BikeView8.png';
import BikeView9 from '../../../asset/ExpandSlide/BikeView9.png';
import BikeView10 from '../../../asset/ExpandSlide/BikeView10.png';
import BikeView11 from '../../../asset/ExpandSlide/BikeView11.png';
import BikeView12 from '../../../asset/ExpandSlide/BikeView12.png';
import BikeView13 from '../../../asset/ExpandSlide/BikeView13.png';
import BikeView14 from '../../../asset/ExpandSlide/BikeView14.png';
import BikeView15 from '../../../asset/ExpandSlide/BikeView15.png';

import BottomScrollBike1 from "../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike1.png";
import BottomScrollBike2 from "../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike2.png";
import BottomScrollBike3 from "../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike3.png";
import BottomScrollBike4 from "../../../asset/ExpandSlide/DesignExpandSlide/BottomScrollBike4.png";

import YellowBikeView1 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView1.png";
import YellowBikeView2 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView2.png";
import YellowBikeView3 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView3.png";
import YellowBikeView4 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView4.png";
import YellowBikeView5 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView5.png";
import YellowBikeView6 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView6.png";
import YellowBikeView7 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView7.png";
import YellowBikeView8 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView8.png";
import YellowBikeView9 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView9.png";
import YellowBikeView10 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView10.png";
import YellowBikeView11 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView11.png";
import YellowBikeView12 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView12.png";
import YellowBikeView13 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView13.png";
import YellowBikeView14 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView14.png";
import YellowBikeView15 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView15.png";
import YellowBikeView16 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView16.png";
import YellowBikeView17 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView17.png";
import YellowBikeView18 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView18.png";
import YellowBikeView19 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView19.png";
import YellowBikeView20 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView20.png";
import YellowBikeView21 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView21.png";
import YellowBikeView22 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView22.png";
import YellowBikeView23 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView23.png";
import YellowBikeView24 from "../../../asset/ExpandSlide/DesignExpandSlide/YellowRotation/YellowBikeView24.png";

import Mag from "../../../asset/Mag.svg";
import icon360 from "../../../asset/icon360.svg";
import SpinBikeSlide1 from "../../../asset/ExpandSlide/DesignExpandSlide/SpinBikeSlide1.png";
import RedBike from "../../../asset/ExpandSlide/DesignExpandSlide/RedBike.png";
import BlackBike from "../../../asset/ExpandSlide/DesignExpandSlide/BlackBike.png";
import YellowBike from "../../../asset/ExpandSlide/DesignExpandSlide/YellowBike.png";
import BottomCircle from "../../../asset/ExpandSlide/DesignExpandSlide/BottomCircle.svg";
import ScrollingBike1 from "../../../asset/ExpandSlide/ScrollingImages/ScrollingBike1.png";
import GenericMotorBike from "../../../asset/ExpandSlide/ScrollingImages/GenericMotorBike.png";
import useSwipe from "../../../components/common/UseDrag/useDrag";
import AnimeLine from "../../../asset/ExpandSlide/DesignExpandSlide/AnimeLine.gif";
import {
  SpinBikeFirstSliderComponent,
  SwipeRightSpinSliderComponent2,
  SwipeLeftSpinSliderComponent1,
  SwipeRightSpinSliderComponent1,
  SwipeLeftSpinSliderComponent3,
  LastToFirstSlide,
  SwipeLeftSpinSliderComponent2,
} from "./SlidingComponents";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./DesignExpand.css";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";
import { BookTwoTone, Flag } from "@mui/icons-material";
import { color, width } from "@mui/system";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Mousewheel,
  Navigation,
  Keyboard,
  EffectFade,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./conStyle.css";

const DesignExpand = () => {
  const [value, setValue] = useState(0.57);
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
      slideScrollingValue < 3 &&
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
  const spinSlider = [
    { img: SpinBikeSlide1, spinSlideNumber: 0 },
    { img: SpinBikeSlide1, spinSlideNumber: 1 },
    { img: SpinBikeSlide1, spinSlideNumber: 2 },
  ];

  const settings = {
    dots: true,
    lazyLoad: true,
    centerPadding: 0,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    beforeChange: function (currSlide, nextSlide) {
      setSlideValue(nextSlide);
    },
  };

  const min = 0.43;
  const max = 0.57;

  // get value within limits
  const valueWithinLimits = (v) => Math.min(Math.max(v, min), max);

  // custom range
  const range = [0, 100];

    // scaled range value
    const rangeValue = value * (range[1] - range[0]) + range[0]

 
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScrollValue(window.pageYOffset)
            if (window.pageYOffset > 3000) {
                setScrollingCheck(true)
            }
            if (window.pageYOffset < 2800) {
                setScrollingCheck(false)
            }
        })
        if (window.innerWidth < 400) {
            setCircularRadius(300)
        }
        if (window.innerWidth > 400) {
            setCircularRadius(330)
        }
        if (window.innerWidth < 380)
        {
            setCircularRadius(250)
        }
        // if(window.innerWidth)
    }, [scrollValue, slideScrollingValue, scrollingCheck, window.innerWidth, circularRadius])

    // window.addEventListener('scroll',()=>{
    //     // console.log(window.scrollY)
    // })


    return (
        <>
        <CommonLayer title={"Design"} value={"Design"}/>
            <div className="range-slider-img" >
                {/* {
                    RangeSlider.map((data) => {
                        return data.slideNumber === (Math.round(rangeValue)) ? (<img className="range-slider-inner-img" src={data.img}></img>) : null
                    })
                } */}
                <ReactSpinningComponent/>
            </div>
            <motion.div
                initial={{ overflowX: "hidden" }}
                whileInView={{ overflowX: "hidden" }}
                className="design-expand">
                <motion.div className="track"
                    initial={{ overflowX: "hidden" }}
                    whileInView={{ overflowX: "hidden" }}
                >
                    <CircularInput id="circularRange" className="circular-parent-range-slider" radius={circularRadius} value={valueWithinLimits(value)} onChange={v => setValue(valueWithinLimits(v))}>
                        <CircularTrack strokeWidth={3} stroke="rgba(255,255,255,0.2)"/>
                        <CircularProgress className="custom-progress" stroke='rgba(255,255,255,0.2)' strokeWidth={4}/>
                        <CircularThumb r={18} strokeWidth='1' className='stroke-center-main' fill='rgba(0,0,0,0.5)'/>
                        <CircularThumb r={8} strokeWidth='1' fill='rgba(255,255,255)'/>
                    </CircularInput>
                </motion.div>
                <div className="design-content">
                    <div className="design-content-inner">
                        <div className="design-upper-content">
                            <span>DESIGNED TO TURN ON</span>
                            <span>Even When switched off</span>
                        </div>
                        <div className="design-middle-content">
                            <div>
                                <div></div>
                                <span>SPIN YOUR RORR</span>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                    initial={{y:"8vh", opacity:0}}
                    whileInView={{y:"0vh", opacity:1}}
                    transition={{duration:1, delay:0.5}}
                    once={false}
                    className={"design-bottom-content"}>
                        <div>
                            <div><img src={icon360}></img></div>
                            <div className="design-content-hori"></div>
                            <div>
                                <div><img src={Mag}></img></div>
                                <span>ZOOM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

      {/* -------------------------- BIKE SPIN BLANK SLIDES -------------------- */}
      <div className="spin-bike-slider-container">
        <div className="spin-bike-slider-inner-row1">
          <span>3 COLORED</span>
          <span>Classic Designs</span>
        </div>
        <div className="spin-bike-slider-inner-row">
          <div className="spin-bike-slider-inner-column">
            <div {...spinBind()} ref={slideRef}>
              {spinBikeSlider === 0 &&
              lastSlideInfiteCheck === false &&
              spinBikeSliderSwipeControl === true ? (
                <SpinBikeFirstSliderComponent spinBikeSlider={spinBikeSlider} />
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
        <div className="spin-bike-slide-bottom-circle">
          <img src={BottomCircle}></img>
        </div>
        <div className="spin-bike-slide-anime-line">
          <img src={AnimeLine}></img>
        </div>
      </div>

      <div className="bike-scrolling-container">
        <div className="bike-scrolling-inner-container">
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>ARX frame</span>
            <span>Proprietary Design</span>
          </motion.div>
          <div className="bike-scrolling">
            <motion.img
              initial={{ scale: 2 }}
              whileInView={{ scale: 1, x: "20px" }}
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
              A new and innovative frame completely designed inhouse
              specifically for electric motorcycle to provide higher stability
              and agility to an electric motorcycle. Weight distribution /
              sturdiness / lower centre of gravity provides higher stability
            </span>
          </motion.div>
        </div>
        <motion.div
          className="generic-bike"
          initial={{ y: "0vh", x: "-30vw", opacity: 1 }}
          whileInView={{ y: "-15vh", x: "-30vw", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src={BottomScrollBike2}></img>
        </motion.div>
      </div>

            <motion.div
            className="bike-scrolling-container-2">
                {/* <div className="bike-scrolling-container2-dots">
                    <div className="bike-scrolling-container2-inner-dots">

                    <div className={slideScrollingValue===1 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===2 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===3 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===4 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===5 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===6 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>
                    <div className={slideScrollingValue===7 ? "bike-scrolling-container2-dots-active-dots" : "bike-scrolling-container2-dots-non-active-dots"}></div>

                    </div>
                </div> */}
        {/* {
                    slideScrollingValue === 1 ? (
                   
                    ) : slideScrollingValue === 2 ? (<GenericBike2></GenericBike2>) :
                        slideScrollingValue === 3 ? (<GenericBike3></GenericBike3>) : slideScrollingValue === 4 ?
                            (<GenericBike4></GenericBike4>) : slideScrollingValue === 5 ? (<GenericBike5></GenericBike5>) :
                              slideScrollingValue === 6 ? (<GenericBike6/>) : (<GenericBike7/>)
                        (<GenericBike3/>)
                } */}
                <Swiper
                className="mySwiper"
                direction={"vertical"}
                // pagination={{
                //   clickable: true,
                // }}
                effect="fade"
                pagination={false}
                mousewheel={{
                    releaseOnEdges:true,
                    // forceToAxis:false,
                    // sensitivity:1
                }}
                thumbs={{
                    autoScrollOffset:1
                }}
                onAnimationEnd={()=>Swiper.mousewheel.disable()}
                keyboard={true}
                slidesPerView={1}
                onSlideChange={(swiper) => setSwiperNumber(swiper.activeIndex)}
                modules={[Pagination,Thumbs, Mousewheel,EffectFade, Keyboard, Navigation]}
                >
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===0 && (<GenericBike0/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===1 && (<GenericBike2/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===2 && (<GenericBike3/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===3 && (<GenericBike4/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===4 && (<GenericBike7/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===5 && (<GenericBike6/>)}</SwiperSlide>
                    <SwiperSlide style={{width:"100%", height : "100vh"}}>{swipeNumber===6 && (<GenericBike5/>)}</SwiperSlide>
                </Swiper>
            </motion.div>

        </>
    )
}

const GenericBike0 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div>
          <motion.img
            initial={{ y: "0vh", scale: 1, opacity: 0 }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              scale: 1.8,
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            once={false}
            src={BottomScrollBike2}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            NEO CLASSIC LOOK
          </motion.span>
          <span>
            Rorr’s new-age naked street fighter design is inspired by a trending
            retro vibe that will appeal to you and your elder brother. After
            all, you are what you ride.
          </span>
        </div>
      </div>
    </>
  );
};

const GenericBike2 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div className="bike-scrolling-container-right-aligned-img">
          <motion.img
            initial={{ x: "0vh", opacity: 0, y: "0vh", overflowX: "hidden" }}
            whileInView={{
              x: "3vw",
              opacity: 1,
              scale: 1.7,
              y: "-0vh",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike4}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            FLOATING DESIGN
          </motion.span>
          <span>
            Make heads turn wherever you go, and wherever you stop. Make
            onlookers wonder how your bike feels like it’s floating on thin air
          </span>
        </div>
      </div>
    </>
  );
};

const GenericBike3 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div className="bike-scrolling-generic-bike-3">
          <motion.img
            initial={{ opacity: 0, scale: 1, y: "0vh", overflowX: "hidden" }}
            whileInView={{
              x: "0vw",
              opacity: 1,
              scale: 2,
              y: "0vh",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike1}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            TACTICAL DIMENSIONS
          </motion.span>
          <span>
            A longer wheelbase specific for an electric bike combined with
            optimal rake provides amazing sturdiness and further stability.
            You’ll realize it when you take the test ride.
          </span>
        </div>
      </div>
    </>
  );
};

const GenericBike4 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div>
          <motion.img
            initial={{ y: "0vh", opacity: 0, x: "0vh", overflowX: "hidden" }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              scale: 1.5,
              x: "0vw",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike3}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            NEO CLASSIC LOOK
          </motion.span>
          <span>
            Rorr’s new-age naked street fighter design is inspired by a trending
            retro vibe that will appeal to you and your elder brother. After
            all, you are what you ride.
          </span>
        </div>
      </div>
    </>
  );
};
// -----------

const GenericBike5 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div>
          <motion.img
            initial={{ y: "0vh", opacity: 0, x: "0vh", overflowX: "hidden" }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              scale: 2,
              x: "30vw",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike4}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            FLOATING DESIGN
          </motion.span>
          <span>
            Make heads turn wherever you go, and wherever you stop. Make
            onlookers wonder how your bike feels like it’s floating on thin air
          </span>
        </div>
      </div>
    </>
  );
};

const GenericBike6 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div>
          <motion.img
            initial={{ y: "0vh", opacity: 0, x: "0vh", overflowX: "hidden" }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              scale: 2,
              x: "-30vw",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike4}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            TACTICAL DIMENSIONS
          </motion.span>
          <span>
            A longer wheelbase specific for an electric bike combined with
            optimal rake provides amazing sturdiness and further stability.
            You’ll realize it when you take the test ride.
          </span>
        </div>
      </div>
    </>
  );
};

const GenericBike7 = () => {
  return (
    <>
      <div className="design-expand-swiper-outer-container">
        <div>
          <motion.img
            initial={{ y: "0vh", opacity: 0, x: "0vh", overflowX: "hidden" }}
            whileInView={{
              y: "0vh",
              opacity: 1,
              scale: 2,
              x: "30vw",
              overflowX: "hidden",
            }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.3, ease: "circOut" }}
            src={BottomScrollBike3}
          ></motion.img>
        </div>
        <div>
          <span>Excellent Features</span>
          <motion.span
            initial={{ opacity: 0, y: "3vh" }}
            whileInView={{ scale: 1, opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            FLOATING DESIGN
          </motion.span>
          <span>
            Make heads turn wherever you go, and wherever you stop. Make
            onlookers wonder how your bike feels like it’s floating on thin air
          </span>
        </div>
      </div>
    </>
  );
};

export default DesignExpand;
