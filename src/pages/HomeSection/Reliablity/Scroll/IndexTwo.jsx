import React from "react";
import "./IndexTwo.scss";
import bg2 from "../../../../asset/section/reliability/bg2.jpg";
import bg1 from "../../../../asset/section/reliability/bg1.jpg";
import icon2 from "../../../../asset/section/reliability/icon2.png";
import { motion } from "framer-motion";
function IndexTwo() {
  return (
    <div className="index-two-container">
      <motion.div className="section-slider-one">
        <motion.img
          whileInView={{
            scale: [1, 0.5, 0.5],
            y: ["0vh", "-10vh", "-60vh"],
            opacity: [1, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          src={bg1}
        />
        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="slider-content"
        >
          <h2>HIGH GROUND CLEARANCE</h2>
          <span>150mm</span>
        </motion.div>
      </motion.div>

      <motion.div className="section-slider-two">
        <motion.img
          className="section-bg-img"
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["0vh", "-20vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          src={bg2}
        />
        <motion.div
          initial={{ y: "0vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="slider-content"
        >
          <motion.img
            whileInView={{
              scale: [1, 0.8, 1],
            }}
            transition={{
              loop: Infinity,
              repeatDelay: 1,
              duration: 1,
            }}
            className="icon-img"
            src={icon2}
          />
          <h2>WATER WADING CAPACITY</h2>
          <span>
            Easily ride through water or even flooded streets for up to 230mm.
            You just can’t stop the Rorr.
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IndexTwo;
