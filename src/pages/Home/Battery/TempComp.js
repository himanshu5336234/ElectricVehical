import React, { useRef, useEffect, useState } from "react";
import TempImg from "../../../asset/Max heat exchange LFP cells.jpg";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import DegreeC from "../../../asset/degreeC.png";

export default function TempComp({ setStateScroll }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  const ref = useRef();
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    onScreen && setStateScroll("");
  }, [onScreen]);

  // console.log({ref})
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (onScreen && count < 45) {
        setCount(count + 1);
      }
    }, 100);
  }, [count, onScreen]);
  return (
    <div>
      <div></div>
      <motion.div style={{}} ref={ref}>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          // animate={{x: 0}}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ fontSize: "32px", fontWeight: 700, padding: "24px" }}
        >
          BEST-IN-CLASS HEAT MANAGEMENT:
        </motion.p>
        {/* <h1
          style={{
            opacity: 1,
            fontSize: "48px",
            fontWeight: 300,
            padding: "8px 24px",
          }}
          ref={ref}
        >
          {count}
          <img src={DegreeC} style={{ width: "45px" }} />
        </h1> */}
        <p
          style={{
            padding: "24px",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "160%",
          }}
        >
          For the first time ever, up to 50% temperature resistance to manage
          heat at higher speeds and in harsh weather. Made possible by the
          combination of the latest Lithium Ion Phosphate (LFP) cell tech & our
          proprietary Maximum Heat Exchange (MHX) tech.
        </p>
        <motion.div>
          <motion.img
            src={TempImg}
            style={{ width: "100%", scaleX: scale }}
            // style={{ scaleX: scale }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
