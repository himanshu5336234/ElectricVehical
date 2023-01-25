import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import "./Charging.scss";
import bg1 from "../../../asset/section/charging/charging1.svg";
import bg2 from "../../../asset/section/charging/charging2.svg";
import bg3 from "../../../asset/section/charging/charging3.svg";
import bg4 from "../../../asset/section/charging/charging4.svg";
import bg5 from "../../../asset/section/charging/charge_time_animation_mobile_AdobeExpress.gif";
import bg6 from "../../../asset/section/charging/AnywhereCharging.svg";
import Slider from "./Slider/Slider";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

const dummydata = [
  {
    id: 0,
    img: bg1,
  },
  {
    id: 1,
    img: bg2,
  },
  {
    id: 2,
    img: bg3,
  },
  {
    id: 3,
    img: bg4,
  },
];

function Charging() {
  let s = useRef();
  let frontRef = useRef();

  let refImgOne = useRef();
  let refImgTwo = useRef();
  let refImgThree = useRef();
  let refImgFour = useRef();
  let refPosition = useRef();

  const [slideActive, setSlideActive] = useState(1);
  const [isFrontOpen, setIsFrontOpen] = useState(false);
  let currentSection = "Charging";

  useEffect(() => {
    const callbackOne = (entries) => {
      const value = entries[0];
      value.isIntersecting && setSlideActive(1);
    };
    const callbackTwo = (entries) => {
      const value = entries[0];
      value.isIntersecting && setSlideActive(2);
    };
    const callbackThree = (entries) => {
      const value = entries[0];
      value.isIntersecting && setSlideActive(3);
    };
    const callbackFour = (entries) => {
      const value = entries[0];
      value.isIntersecting && setSlideActive(4);
    };
    const callbackPosition = (entries) => {
      const value = entries[0];
      // value.isIntersecting && setSlideActive(4)
      setIsFrontOpen(!value.isIntersecting);
    };
    const observeOne = new IntersectionObserver(callbackOne);
    const observeTwo = new IntersectionObserver(callbackTwo);
    const observeThree = new IntersectionObserver(callbackThree);
    const observeFour = new IntersectionObserver(callbackFour);
    const observePosition = new IntersectionObserver(callbackPosition);
    observeOne.observe(refImgOne.current);
    observeTwo.observe(refImgTwo.current);
    observeThree.observe(refImgThree.current);
    observeFour.observe(refImgFour.current);
    observePosition.observe(refPosition.current);
  }, []);

  return (
    <div>
      <CommonLayer title={currentSection} value={"Charging"} />
      <div className="charging-container">
        <div ref={frontRef} className="charging-back">
          <div className="top">
            <h3>ON-BOARD CHARGER</h3>
            <span>
              Instant plug-and-charge. Freedom from carrying bulky chargers on a
              daily commute
            </span>
          </div>
          <div className="bottom">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: isFrontOpen ? 10000 : 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {/* {dummydata.map((data)=>{
                                            return 
                                        })} */}
              <SwiperSlide>
                <img src={bg1} ref={refImgOne} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bg2} ref={refImgTwo} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bg3} ref={refImgThree} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bg4} ref={refImgFour} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="switch">
            <span
              className={
                slideActive === 1 ? "switch-title active" : "switch-title"
              }
            >
              Home
            </span>
            <span
              className={
                slideActive === 2 ? "switch-title active" : "switch-title"
              }
            >
              Cafe
            </span>
            <span
              className={
                slideActive === 3 ? "switch-title active" : "switch-title"
              }
            >
              Office
            </span>
            <span
              className={
                slideActive === 4 ? "switch-title active" : "switch-title"
              }
            >
              Infrastructure
            </span>
          </div>
        </div>
        <div className="checking-ref" ref={refPosition}></div>
        <motion.div
          whileInView={{ y: isFrontOpen ? "0vh" : "50vh" }}
          viewport={{ amount: 0, once: false }}
          transition={{ duration: 0.5 }}
          className="charging-front"
        >
          {/* <div className='dummydiv'></div> */}
          <div className="animation-one">
            <motion.div className="top">
              <motion.img
                initial={{ y: "50vh", opacity: 0 }}
                whileInView={{ y: "5vh", opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1 }}
                src={bg6}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "10vh" }}
              whileInView={{ opacity: 1, y: "1vh" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bottom"
            >
              {/* <h3>Charge anywhere</h3> */}
              <span>ANYWHERE CHARGING</span>
              <p>
                Free yourself of range anxiety with the innovative 15A 3-Pin
                socket that allows you to charge at home, cafes, the highway
                dhaba, even at petrol pumps. Oh, the irony.
              </p>
            </motion.div>
          </div>
          <div className="animation-two">
            <motion.h1
              initial={{ opacity: 0, y: "20vh" }}
              whileInView={{ opacity: 1, y: "0vh" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              CHARGING WAS NEVER THIS EASY
            </motion.h1>
          </div>
          <div className="animation-one">
            <div className="top">
              <motion.img
                initial={{ y: "20vh" }}
                whileInView={{ y: "5vh" }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 1 }}
                src={bg5}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: "20vh" }}
              whileInView={{ opacity: 1, y: "1vh" }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bottom"
            >
              {/* <h3>Charge time</h3> */}
              <span>FAAZZ CHARGE</span>
              <p>
                Rorr’s game-changing charging mechanism gets you to a full
                charge in just 2 hours. That’s less than a minute per km. That’s
                faster than most smartphones.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Charging;
