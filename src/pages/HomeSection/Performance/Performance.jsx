import React, { useEffect, useRef } from "react";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import "./Performance.scss";
import img from "../../../asset/GOAT V1.gif";
import perone from "../../../asset/per-one.jpg";
import pertwo from "../../../asset/per-two.jpg";
import perthree from "../../../asset/per-three.jpg";
import perfour from "../../../asset/per-four.jpg";
import perfive from "../../../asset/per-five.jpg";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import PerformanceAnimaScroll from "./PerformanceAnimaScroll/PerformanceAnimaScroll";
import ScrollY from "../../ScrollY/ScrollY";
import { useState } from "react";
import Footer from "../../../components/Footer/Footer";

const dummyData = [
  {
    id: 1,
    title: "Acceleration",
    info: "3s (0-40)",
    img: perone,
  },
  {
    id: 2,
    title: "Top speed",
    info: "100km/h",
    img: pertwo,
  },
  {
    id: 3,
    title: "Waterproof",
    info: "IP 65",
    des: "Easily Drive through flood conditions without any tension",
    img: perthree,
  },
  {
    id: 4,
    title: "Single Stage",
    info: "Belt Drive",
    des: "For smooth running, energetic, instant power, without vibrations",
    img: perfour,
  },
];
function Performance() {
  let refCheckingOne = useRef();
  let refCheckingTwo = useRef();
  let [isFrontVisible, setIsFrontVisible] = useState(false);
  let [isperformanceVisible, setPerformanceVisible] = useState(false);

  let currentSection = "Performance";
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]);

  useEffect(() => {
    const callbackOne = (entries) => {
      let value = entries[0];
      setIsFrontVisible(!value.isIntersecting);
      console.log("one", value.isIntersecting);
    };
    const callbackTwo = (entries) => {
      let value = entries[0];
      setPerformanceVisible(!value.isIntersecting);
      console.log("two", value.isIntersecting);
    };
    let ObserverOne = new IntersectionObserver(callbackOne);
    let ObserverTwo = new IntersectionObserver(callbackTwo);
    ObserverOne.observe(refCheckingOne.current);
    ObserverTwo.observe(refCheckingTwo.current);
  }, []);

  return (
    <>
    <div>
      <CommonLayer title={currentSection} value={"Performance"} />
      <div className="performance-container">
        <div className="performance-wrapper">
          {/* used position stikey and will from where top is mention in scss
            and will stop when parent div height is over */}

          <motion.div className="performance-video">
            <img src={img} />
            <div className="performance-text">
              <motion.span
                animate={{ opacity: isperformanceVisible ? 0 : 1 }}
                transition={{ duration: 1 }}
              >
                Rorr on your riders with
              </motion.span>
              <motion.h3
                animate={{ opacity: isperformanceVisible ? 0 : 1 }}
                transition={{ duration: 1 }}
              >
                G.O.A.T. PERFORMANCE
              </motion.h3>
            </div>
          </motion.div>
        </div>

        {/*animation section doing map to 4 data  */}

        <div
          className="animation-section"
          style={{ display: isFrontVisible ? "" : "none" }}
        >
          {/* {dummyData.map((data,index)=>{
                return <PerformanceAnimaScroll key={data.id} index={index} data={data}/>
            })} */}
          <ScrollY />
        </div>

        <div className="checking-point-one" ref={refCheckingOne}></div>
        <div className="checking-point-two" ref={refCheckingTwo}></div>
      </div>
      
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Performance;
