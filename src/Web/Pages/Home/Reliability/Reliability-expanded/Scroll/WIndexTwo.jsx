import React from "react";
import "./WIndexTwo.scss";
import { motion } from "framer-motion";
import Relbg from "../../../../../Assets/Reliability/relExpanded/Relbg.jpg";
import Relbg2 from "../../../../../Assets/Reliability/relExpanded/Relbg2.jpg";
import icondrop from "../../../../../Assets/Reliability/relExpanded/icondrop.svg";

function WIndexTwo() {
  return (
    <div className="w-index-two-container">
      {/* <motion.div 
        className='w-section-slider-one'>
          <motion.img 
                 whileInView={{
                     scale:[1,0.5,0.5],
                     y:["0vh","-10vh","-60vh"],
                     opacity:[1,1,1]}}
                 viewport={{once:false,amount:0}}
                 transition={{delay:0.2,duration:1}}
                 src={Relbg}/>
                 <motion.div 
                 initial={{y:"20vh",opacity:0}}
                 whileInView={{y:"0vh",opacity:1}}
                 viewport={{once:false,amount:0}}
                 transition={{delay:3,duration:0.5}}
                 className='w-slider-content'>
                     <h2>HIGH GROUND CLEARANCE</h2>
                     <span>150mm</span>
                 </motion.div>
        </motion.div> */}

      <motion.div className="w-section-slider-two">
        <motion.img
          className="w-section-bg-img"
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["20vh", "-10vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          src={Relbg2}
        />
        <motion.div
          initial={{ y: "0vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-slider-content"
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
            className="w-icon-img"
            src={icondrop}
          />
          <h2>
            WATER WADING
            <br /> CAPACITY
          </h2>
          <span>
            Easily ride through water or even flooded streets for up to 230mm.
            <br />
            You just can’t stop the Rorr.
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WIndexTwo;
