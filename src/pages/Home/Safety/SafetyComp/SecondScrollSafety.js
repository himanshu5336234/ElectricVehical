import React,{useState, useEffect} from 'react';
import DownArrow from "../../../../asset/chevrondown.png"
import styled from "styled-components";
import SafetySecondImg from "../../../../asset/SafetySecondImg.png";

import { motion, useTransform, useViewportScroll } from "framer-motion";

const P2 = styled(motion.p)`
  font-weight: 700;
  font-size: 24.7525px;
  line-height: 110%;
  position: absolute;
  bottom: 30%;
  color: #fff;
  width: 100%;
  text-align: center;
  color: #fff;
`;
const P3 = styled(motion.p)`
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  text-align: center;
  position: absolute;
  color: #fff;
  bottom: 21%;
  width: 77%;
`;
const IMG = styled(motion.img)`
 position: absolute;
  bottom: 15%;
`;
export default function SecondScrollSafety() {
  const [checkClick, setCheckClick] = useState(true);
  const sc = React.useRef();
  
  const { scrollYProgress } = useViewportScroll();
  console.log("scrollYProgress",scrollYProgress)
 
  console.log("use effect",window.pageYOffset)
  window.addEventListener('scroll', ()=> {
    console.log(window.scrollY)
  })
  window.onscroll = function()
  {
    console.log("on click event", window.scrollY)
  }
  console.log('propert', window)

  const scale = useTransform(scrollYProgress, [1,0], [1, 2]);
  useEffect(() => {
    let check = true;
    const run=()=>{
      window.addEventListener('scroll', ()=>{
        if(window.pageYOffset<=600 && window.pageYOffset>=500 && check)
        {
            check = false
            setCheckClick(false)   
        }
        if(window.pageYOffset==0)
        {
          check = true;
          setCheckClick(true)
        }
      }) 
    }
    run()
  }, [checkClick])
  const testing = ()=>{
    console.log("testong122")
  }
  return (
    <div>
        <div
            style={{ position: "relative", scaleY: scrollYProgress }}
            className="img-wrapper"
          >
            <div onScroll={testing}  ref={sc} className="image-div">
              <img src={SafetySecondImg} className={ "image-Onclick"}/>
            </div>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <P2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                STAY SAFE
              </P2>
              <P3
                initial={{ y: 100,opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                With our Exclusive features for your safety & security
              </P3>
              <IMG
                initial={{ y: 100,  }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              src={DownArrow}/>
            </div>
          </div>
    </div>
  )
}
