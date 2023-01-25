import React from "react";
import { motion } from "framer-motion";
import "./PerformanceAnimaScroll.scss";
function PerformanceAnimaScroll({ data, index }) {
  if (index === 0) {
    // console.log("index 0 ", index);
  }
  return (
    <div className="container1">
      {index === 0 ? (
        <div className="animation-on-scroll">
          <motion.img
            initial={{ y: "-20vh", opacity: 0 }}
            whileInView={{ y: "15vh", opacity: 1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{delay:0.2,duration:0.3}} 
            src={data.img}
          />
          <motion.label
            initial={{ y: "30vh", opacity: 0 }}
            whileInView={{ y: "15vh", opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h1>{data.title}</h1>
            <span className="info">{data.info}</span>
            <span className="des">{data.des ? data.des : ""}</span>
          </motion.label>
        </div>
      ) : (
        <div className="animation-on-scroll">
          <motion.img
            initial={{ y: "30vh", opacity: 0 }}
            whileInView={{ y: "15vh", opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            src={data.img}
          />
          <motion.label
            initial={{ y: "30vh", opacity: 0 }}
            whileInView={{ y: "15vh", opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1>{data.title}</h1>
            <span className="info">{data.info}</span>
            <span className="des">{data.des ? data.des : ""}</span>
          </motion.label>
        </div>
      )}
    </div>
  );
}

export default PerformanceAnimaScroll;
