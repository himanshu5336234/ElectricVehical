import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CommonLayer from "../../../../components/CommonLayer/CommonLayer";
import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
  AnimatePresence,
} from "framer-motion";
import WarrentyScrollComp from "./WarrentyScrollComp";
import "./WarrentyComp.scss";
import "./warrentyStyle.css";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const WarrentyMainImg = require("../../../../asset/peace of mind .jpg");
const sliderImg1 = require("../../../../asset/road assistance .jpg");
const sliderImg2 = require("../../../../asset/MobileServiceCrouselSecond.png");
const sliderImg3 = require("../../../../asset/MobileServiceCrouselThird.png");

// const MainDiv = styled.div`
// height: 79vh;`;
// const P = styled(motion.p)`
//   position: absolute;
//   font-weight: 700;
//   font-size: 48px;
//   color: #000;
//   left: 47%;

//   line-height: 110%;
// `;
// const P1 = styled(P)`
//   /* padding-top: 110px; */
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 100%;
//   left: 47%;
//   line-height: 110%;
// `;

const dummyData = [
  {
    id: 1,
    heading: "Battery Warranty",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus aenean donec iaculis fringilla magnis.",
  },
  {
    id: 2,
    heading: "Motor Warranty",
    title:
      "Velit vitae, massa urna lacus velit sollicitudin eget amet. Metus in cursus amet elit. Lectus faucibus felis odio a lorem.",
  },
  {
    id: 3,
    heading: "Road Assistance",
    title:
      "Ornare volutpat nulla curabitur blandit donec ullamcorper nunc sem. Quis ultricies mattis diam eget scelerisque. ",
  },
];

export default function WarrentyComp() {
  const scrollRef = useRef();
  const imgRefOne = useRef();
  const imgRefTwo = useRef();
  const imgRefThree = useRef();

  const [isScrolling, setIsScrolling] = useState(false);
  const [index, setIndex] = useState(0);
  const [isSliderOneVisible, setIsSliderOneVisible] = useState(false);
  const [isSliderTwoVisible, setIsSliderTwoVisible] = useState(false);
  const [isSliderThreeVisible, setIsSliderThreeVisible] = useState(false);

  const [activeHeading, setActiveHeading] = useState("");
  const [activeTitle, setActiveTitle] = useState("");
  var menu = ["", "", ""];
  const variants = {
    show: {
      enter: {
        opacity: 1,
        transition: { duration: 2,type:"spring" },
      },
      initial: { opacity: 0,y:"1vh" },
    },
    hide: {
      exit: {
        opacity: 0,
        transition: { duration: 1 },
      },
      initial: { opacity: 2,y:"0vh"},
    },
  };
  useEffect(() => {
    if (isSliderOneVisible) {
      setActiveHeading(dummyData[0].heading);
      setActiveTitle(dummyData[0].title);
    }
    if (isSliderTwoVisible) {
      setActiveHeading(dummyData[1].heading);
      setActiveTitle(dummyData[1].title);
    }
    if (isSliderTwoVisible) {
      setActiveHeading(dummyData[2].heading);
      setActiveTitle(dummyData[2].title);
    }
  });

  useEffect(() => {
    const callbackOne = (entries) => {
      let value = entries[0];
      setIsScrolling(!value.isIntersecting);
      console.log("scrolling", value.isIntersecting);
    };
    const sliderOne = (entries) => {
      let value = entries[0];
      setIsSliderOneVisible(!value.isIntersecting);
      console.log("one", value.isIntersecting);
    };
    const sliderTwo = (entries) => {
      let value = entries[0];
      setIsSliderTwoVisible(!value.isIntersecting);
      console.log("two", value.isIntersecting);
    };
    const sliderThree = (entries) => {
      let value = entries[0];
      setIsSliderThreeVisible(!value.isIntersecting);
      console.log("three", value.isIntersecting);
    };
    const observer = new IntersectionObserver(callbackOne);
    const observers1 = new IntersectionObserver(sliderOne);
    const observers2 = new IntersectionObserver(sliderTwo);
    const observers3 = new IntersectionObserver(sliderThree);

    observer.observe(scrollRef.current);
    observers1.observe(imgRefOne.current);
    observers2.observe(imgRefTwo.current);
    observers3.observe(imgRefThree.current);
  }, []);

  return (
    <>
      <CommonLayer title={"Service & Warranty"} value={"Service&Warranty"} />
      <div className="warrenty-wrapper">
        <motion.div
          // animate={{width:isScrolling?"180vw" : "100vw",height:isScrolling?"calc(100vh - 85px)":"60vh"}}
          initial={{ width: "200vw", opacity: 0 }}
          whileInView={{ width: "100vw", opacity: 1 }}
          // transition={{duration:1}}
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: false, amount: 0 }}
          className="war-img-container"
        >
          <motion.img
            // animate={{width:isScrolling?"100%":"50%"}}
            // transition={{duration:1}}
            src={WarrentyMainImg}
            className="war-img"
          />
          <div className="scrollCheck" ref={scrollRef}></div>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 280, opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1, duration: 1 }}
          // animate={{ y: isScrolling ? "7vh" : "0vh" }}
          // transition={{ duration: 1 }}
          className="war-on-img-info"
        >
          <motion.h1
            style={{ color: "#fff" }}
            // animate={{ fontSize: isScrolling ? "30px" : "40px" }}
            transition={{ duration: 1 }}
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: false, amount: 0 }}
            // transition={{ delay: 1, duration: 1 }}
          >
            PEACE OF MIND
          </motion.h1>
          <motion.p
            style={{ color: "#fff" }}
            // animate={{ fontSize: isScrolling ? "16px" : "20px" }}
            transition={{ duration: 1 }}
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // viewport={{ once: false, amount: 0 }}
            // transition={{ delay: 1, duration: 1 }}
          >
            It keeps you on the rider's seat
          </motion.p>
        </motion.div>

        <div className="war-out-img-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pellentesque malesuada tincidunt diam ultrices donec vitae duis. Ac
            quam habitant cursus nibh amet amet, laoreet.
          </p>
        </div>

        <div className="war-slider-container">
          <div className="war-img-slider">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={5}
              mousewheel={true}
              onActiveIndexChange={(swiper) => {
                setIndex(swiper.activeIndex);
              }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' + className + '">' + menu[index] + "</span>"
                  );
                },
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={sliderImg1} ref={imgRefOne} className="img-slider" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderImg2} ref={imgRefTwo} className="img-slider" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={sliderImg3}
                  ref={imgRefThree}
                  className="img-slider"
                />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            {index == 0 ? (
              <motion.div
                className={
                  index == 0 ? "war-slider-info" : "war-slider-info-hide"
                }
              >
                
                <motion.span
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className={
                    index == 0 ? "war-slider-year" : "war-slider-year-hide"
                  }
                >
                  3 YEARS
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className={
                    index == 0
                      ? "war-slider-heading"
                      : "war-slider-heading-hide"
                  }
                >
                  Battery Warranty
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className={
                    index == 0 ? "war-slider-desc" : "war-slider-desc-hide"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  aenean donec iaculis fringilla magnis
                </motion.p>
                {/* <AnimatePresence>
                  {index == 0 && (
                    <motion.span
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 0 ? variants.show : variants.hide}
                      className="war-slider-year"
                    >
                      3 Years
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {index == 0 && (
                    <motion.h3
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 0 ? variants.show : variants.hide}
                      className="war-slider-heading"
                    >
                      Battery Warranty
                    </motion.h3>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {index == 0 && (
                    <motion.p
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 0 ? variants.show : variants.hide}
                      className="war-slider-desc"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Risus aenean donec iaculis fringilla magnis.
                    </motion.p>
                  )}
                </AnimatePresence> */}
              </motion.div>
            ) : index == 1 ? (
              <motion.div
                className={
                  index == 1 ? "war-slider-info" : "war-slider-info-hide"
                }
              >
                <motion.span
                initial={{ opacity: 0, y: "2vh" }}
                whileInView={{ opacity: 1, y: "1vh" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className={
                  index == 1 ? "war-slider-year" : "war-slider-year-hide"
                }
              >
                3 YEARS
              </motion.span>
                {/* <AnimatePresence>
                  {index == 1 && (
                    <motion.span
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 1 ? variants.show : variants.hide}
                      className="war-slider-year"
                    >
                       3 Years
                    </motion.span>
                  )}
                </AnimatePresence> */}
                {/* <AnimatePresence>
                  {index == 1 && (
                    <motion.h3
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 1 ? variants.show : variants.hide}
                      className="war-slider-heading"
                    >
                      Motor Warranty
                    </motion.h3>
                  )}
                </AnimatePresence> */}
                <motion.h3
                initial={{ opacity: 0, y: "2vh" }}
                whileInView={{ opacity: 1, y: "1vh" }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className={
                  index == 1 ? "war-slider-heading" : "war-slider-heading-hide"
                }
              >
                Motor Warranty
              </motion.h3>
                {/* <AnimatePresence>
                  {index == 1 && (
                    <motion.p
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 1 ? variants.show : variants.hide}
                      className="war-slider-desc"
                    >
                      Velit vitae, massa urna lacus velit sollicitudin eget
                      amet. Metus in cursus amet elit. Lectus faucibus felis
                      odio a lorem
                    </motion.p>
                  )}
                </AnimatePresence> */}
                <motion.p
                initial={{ opacity: 0, y: "2vh" }}
                whileInView={{ opacity: 1, y: "1vh" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className={
                  index == 1 ? "war-slider-desc" : "war-slider-desc-hide"
                }
              >
                Velit vitae, massa urna lacus velit sollicitudin eget amet.
                Metus in cursus amet elit. Lectus faucibus felis odio a lorem
              </motion.p>
              </motion.div>
            ) : (
              <motion.div
                className={
                  index == 2 ? "war-slider-info" : "war-slider-info-hide"
                }
              >
                <motion.span
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className={
                    index == 2 ? "war-slider-year" : "war-slider-year-hide"
                  }
                >
                  3 YEARS
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className={
                    index == 2
                      ? "war-slider-heading"
                      : "war-slider-heading-hide"
                  }
                >
                  Road Assistance
                </motion.h3>
                {/* <AnimatePresence>
                  {index == 2 && (
                    <motion.span
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 2 ? variants.show : variants.hide}
                      className="war-slider-year"
                    >
                      3 YEARS
                    </motion.span>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {index == 2 && (
                    <motion.h3
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 2 ? variants.show : variants.hide}
                      className="war-slider-heading"
                    >
                      Road Assistance
                    </motion.h3>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {index == 2 && (
                    <motion.p
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      variants={index == 2 ? variants.show : variants.hide}
                      className="war-slider-desc"
                    >
                      Ornare volutpat nulla curabitur blandit donec ullamcorper
                      nunc sem. Quis ultricies mattis diam eget scelerisque.
                    </motion.p>
                  )}
                </AnimatePresence> */}
                <motion.p
                  initial={{ opacity: 0, y: "2vh" }}
                  whileInView={{ opacity: 1, y: "0vh" }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className={
                    index == 2 ? "war-slider-desc" : "war-slider-desc-hide"
                  }
                >
                  Ornare volutpat nulla curabitur blandit donec ullamcorper nunc
                  sem. Quis ultricies mattis diam eget scelerisque.
                </motion.p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <MainDiv>

        <motion.div
          style={{ width: "100vw", marginTop: "105px" }}
          initial={{ width: "140vw", height: "100vh" }}
          whileInView={{ width: "100vw", height: "60vh" }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <motion.img
            src={WarrentyMainImg}
            style={{
              width: "inherit",
              height: "inherit",
              // scaleX: scale,
              overflowY: "hidden",
              objectFit: "cover",
              position: "relative",
            }}
          />
          <motion.div
            // initial={{ width: "140vw", height: "100vh" }}
            // whileInView={{ width: "100vw", height: "50vh" }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <P
              initial={{ fontSize: "40px", top: "47%" }}
              whileInView={{ fontSize: "32px", top: "24%" }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              PEACE OF MIND
            </P>
            <P1
              initial={{ fontSize: "18px", top: "60%" }}
              whileInView={{ fontSize: "18px", top: "35%" }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              It keeps you on the rider’s seat
            </P1>
          </motion.div>
         
        </motion.div>
        <div>
            <motion.p
            style={{padding:"24px",fontSize:"16px",fontWeight:"400"}}
              initial={{ y: "20vh", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.5, duration: 2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pellentesque malesuada tincidunt diam ultrices donec vitae duis.
              Ac quam habitant cursus nibh amet amet, laoreet.
            </motion.p>
          </div>

      </MainDiv>
      
      <WarrentyScrollComp/> */
}
