import React from "react";
import "./WIndexThree.scss";
import { motion } from "framer-motion";
import Relbg2 from "../../../../../Assets/Reliability/relExpanded/Relbg2.jpg";
import Relbg3 from "../../../../../Assets/Reliability/relExpanded/DesktopIp67.jpg";

function WIndexThree() {
  return (
    <div className="w-index-two-container">
      {/* <motion.div 
        className='w-section-slider-two'>
          <motion.img 
                 whileInView={{
                     scale:[1,0.5,0.5],
                     y:["0vh","-10vh","-50vh"],
                     opacity:[1,1,0]}}
                 viewport={{once:false,amount:0}}
                 transition={{delay:0.2,duration:1}}
                 src={Relbg2}/>
                 
                 <motion.div 
                 initial={{y:"0vh",opacity:0}}
                 whileInView={{y:"0vh",opacity:1}}
                 viewport={{once:false,amount:0}}
                 transition={{delay:1,duration:0.5}}
                 className='w-slider-content'>
                     <h2>HIGH GROUND CLEARANCE </h2>
                     <span>150mm</span>
                 </motion.div>
        </motion.div> */}
      <motion.div className="w-section-slider-three">
        <motion.img
          whileInView={{
            scale: [0.7, 0.7, 1],
            y: ["0vh", "-20vh", "0vh"],
            opacity: [0, 1, 1],
          }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          src={Relbg3}
        />
        <motion.div
          initial={{ y: "0vh", opacity: 0 }}
          whileInView={{ y: "0vh", opacity: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 1, duration: 2.5 }}
          className="w-slider-content"
        >
          <span className="w-info-one">IP 67</span>
          <h2> BATTERY RATING</h2>
          <span className="w-info-two">
            With a highly certified IP67 rating, the Rorr battery promises a
            tension-free ride in water, dust, rains,
            <br /> and almost anything the city can throw at it.
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WIndexThree;
