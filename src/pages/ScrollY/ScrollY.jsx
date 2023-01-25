import React from "react";
import "./ScrollY.scss";
import perone from "../../asset/acceleration s1.jpg";
import pertwo from "../../asset/top speed S1.jpg";
import perthree from "../../asset/waterproof S1.jpg";
import perfour from "../../asset/belt drive S1.jpg";
import perfive from "../../asset/IPMSM Motor S1 .jpg";
import PerformanceAnimaScroll from "../HomeSection/Performance/PerformanceAnimaScroll/PerformanceAnimaScroll";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const dummyData = [
  {
    id: 1,
    // title:"Acceleration",
    info: "ZIP",
    des: "Acceleration from 0-40 in 3 seconds",
    img: perone,
  },
  {
    id: 2,
    // title:"Top speed",
    info: "ZAP",
    des: "100 kmph Top Speed",
    img: pertwo,
  },
  {
    id: 3,
    // title: "Waterproof",
    info: "ZOOM",
    des: "Heavy Duty 10kW motor with proprietary IPMSM tech means more miles without heating & 330Nm Torque",
    img: perfour,
  },
  {
    id: 4,
    // title: "Single Stage",
    info: "FLOOD FIGHTER",
    des: "IP65 rating means easy rides through flood conditions.",
    img: perthree,
  },
];

function ScrollY() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1.2]);
  return (
    <div className="app">
      <div className="section">
        <PerformanceAnimaScroll index={0} data={dummyData[0]} />
        <PerformanceAnimaScroll index={1} data={dummyData[1]} />
        <PerformanceAnimaScroll index={2} data={dummyData[2]} />
        <PerformanceAnimaScroll index={3} data={dummyData[3]} />

        <div className="animation-section-last">
          {/* top */}
          <div className="img-wrapper" style={{ scaleY: scrollYProgress }}>
            <motion.div
              initial={{ width: "150vw", height: "90vh" }}
              whileInView={{ width: "100vw", height: "45vh" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="img-container-last"
            >
              <img src={perfive} />
            </motion.div>
            <motion.label
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
              className="des-container"
            >
              {/* <span className="heading">Heavy Duty</span> */}
              <h3 className="title">SMOOTH AS BUTTER</h3>
            </motion.label>
          </div>
          {/* bottom */}
          <motion.div
            initial={{ opacity: 0, y: "20vh" }}
            whileInView={{ opacity: 1, y: "0vh" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className="extra-info-wrapper"
          >
            <span>
              Single-Stage Belt Drive means energetic, instant power without
              vibrations You test ride experience will feel quite special.
            </span>
            <motion.h3
              initial={{ opacity: 0, x: "-20vw" }}
              whileInView={{ opacity: 1, x: "0vw" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 1.5, duration: 1, type: "spring" }}
              className="animate-left"
            >
              330Nm Torque{" "}
            </motion.h3>
            <motion.h3
              initial={{ opacity: 0, x: "20vw" }}
              whileInView={{ opacity: 1, x: "0vh" }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 1.5, duration: 1, type: "spring" }}
              className="animate-right"
            >
              on wheel
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ScrollY;
