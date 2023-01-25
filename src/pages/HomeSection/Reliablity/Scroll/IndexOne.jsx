import React from "react";
import "./IndexOne.scss";
import bg1 from "../../../../asset/section/reliability/bg1.jpg";
import bike from "../../../../asset/section/reliability/bike.png";
import icon1 from "../../../../asset/section/reliability/icon1.png";
import { motion } from "framer-motion";
function IndexOne({ groundClearance }) {
  return (
    <div className="index-one-container">
      <motion.div className="section-slider-one">
        <motion.img
          className="bg-img"
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["20vh", "-10vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          src={bg1}
        />
        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="slider-content"
        >
          <img className="icon-img" src={icon1} />
          <h2>SUPERIOR 200mm GROUND CLEARANCE</h2>
          <span>
            Custom designed to tackle Indian road conditions, the Rorr will
            navigate like a pro over potholes, speed bumps, and the like on your
            city commute. Test ride it to experience an electrifying ride.
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "10px" }}
        whileInView={{ opacity: 1, x: "0vh" }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 200 }}
        className="bike-container"
      >
        {/* <img src={bike}/> */}
      </motion.div>
    </div>
  );
}

export default IndexOne;
