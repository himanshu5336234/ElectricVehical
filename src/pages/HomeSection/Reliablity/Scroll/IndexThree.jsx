import React from "react";
import "./IndexThree.scss";
import bg2 from "../../../../asset/section/reliability/bg2.jpg";
import bg3 from "../../../../asset/section/reliability/bg3.jpg";
import { motion } from "framer-motion";
function IndexThree() {
  return (
    <div className="index-two-container">
      <motion.div className="section-slider-two">
        <motion.img
          whileInView={{
            scale: [1, 0.5, 0.5],
            y: ["0vh", "-10vh", "-50vh"],
            opacity: [1, 1, 0],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          src={bg2}
        />

        <motion.div
          initial={{ y: "0vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="slider-content"
        >
          <h2>HIGH GROUND CLEARANCE </h2>
          <span>150mm</span>
        </motion.div>
      </motion.div>
      <motion.div className="section-slider-three">
        <motion.img
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["0vh", "-20vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          src={bg3}
        />
        <motion.div
          initial={{ y: "0vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1, duration: 2.5 }}
          className="slider-content"
        >
          <span className="info-one">IP 67</span>
          <h2>BATTERY RATING</h2>
          <span className="info-two">
            With a highly certified IP67 rating, the Rorr battery promises a
            tension-free ride in water, dust, rains, and almost anything the
            city can throw at it.
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default IndexThree;
