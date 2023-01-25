import React, { useState, useEffect } from "react";
import "./WIndexOne.scss";
import Relbg from "../../../../../Assets/Reliability/relExpanded/Relbg.jpg";
import iconrel from "../../../../../Assets/Reliability/relExpanded/iconrel.svg";
import { motion } from "framer-motion";

function WIndexOne() {
  const [groundClearance, setGroundClearance] = useState(0);

  let myInterval;

  useEffect(() => {
    const changeGroundClearance = () => {
      if (groundClearance < 200) {
        setGroundClearance(groundClearance + 1);
        clearInterval(myInterval);
      }
    };
    clearInterval(myInterval);
    myInterval = setInterval(changeGroundClearance, 20);
  }, [groundClearance]);

  return (
    <div className="w-index-one-container">
      <motion.div className="w-section-slider-one">
        <motion.img
          className="w-bg-img"
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["20vh", "-10vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          src={Relbg}
        />
        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="w-slider-content"
        >
          <div className="w-icon-div">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="w-icon-img"
                src={iconrel}
                style={{ height: "100px", width: "100px", textAlign: "center" }}
              />
            </div>
            <span style={{ display: "none" }}>{groundClearance}mm</span>
            <h2>
              SUPERIOR 200mm <br />
              GROUND CLEARANCE
            </h2>
          </div>
            <p>
              Custom designed to tackle Indian road conditions, the Rorr will
              navigate like a pro over potholes, speed bumps, and the like on
              your city commute. Test ride it to experience an electrifying
              ride.
            </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WIndexOne;
