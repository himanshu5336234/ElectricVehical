import React from 'react'
import CommonLayer from '../../../components/CommonLayer/CommonLayer'
import "./Reliablity.scss"
import bg1 from "../../../asset/section/reliability/bg1.jpg"
import bg2 from "../../../asset/section/reliability/bg2.jpg"
import bg3 from "../../../asset/section/reliability/bg3.jpg"
import {motion} from "framer-motion"
import { useEffect } from 'react'
import { useState } from 'react'
import { display, height } from '@mui/system'
import { useRef } from 'react'
import useSwipe from '../../../components/common/UseDrag/useDrag'
function Reliability() {
   
    const [isdown,setIsDown]=useState(false)
    const [isUp,setIsUp]=useState(false)

    const [runDown,setRunDown]=useState(true)
    const [runUp,setRunUp]=useState(false)

    const [section,setSection]=useState(0)

    const [count,setCount]=useState(0)
    const [one,setOne]=useState(false)
    const [two,setTwo]=useState(false)
    const [three,setThree]=useState(false)
    const [four,setFour]=useState(false)

    const divOne=useRef()
    const divTwo=useRef()
    const divThree=useRef()
    const divFour=useRef()


    const [stateScroll, setStateScroll] = useState(1);

  const bind = useSwipe({
    onUp: () => stateScroll < 3 && setStateScroll(stateScroll + 1),
    onDown: () => stateScroll > 1 && setStateScroll(stateScroll - 1)
  });    
      var scrollingDirection = 0; 
      var lastScroll = 9999;
      var scrollIdleTime = 300; 
      document.addEventListener('wheel',wheel);
 
  function wheel(e){
    var delta = e.deltaY;
    var timeNow = performance.now();
    if (delta > 0 && ( scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime) ) {
        
        const check=()=>{
            setRunDown(false)
            
            if(section<=4){
                setSection((prev)=>prev+1)
                setRunDown(false)
                setRunUp(true)
            }
            
            }

        if(runDown){
            check()
        }

        scrollingDirection = 1;

    } else if (delta < 0 && ( scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)) {
        const check=()=>{
            setRunUp(false)
            if(section===3){
                setSection(2)
            }
            if(section===2){
                setSection(1)
            }
            if(section===1){
                setSection(0)
            }

        }
        if(runUp){
            check()
        }
        scrollingDirection = 2;

        
    }
    lastScroll = timeNow;
}

console.log(section)


  return (
    <>
        <CommonLayer title={"Reliability"} value={"Reliability"}/>
        <div className='rel-main'>
        <div className='rel-container'>

            {/* -------------------------1--------------------------- */}

            <motion.div
             
            className='section-slider-one' ref={divOne} id="section-slider-one" >
                <motion.img 
                whileInView={{
                    scale:!(section===0)? [1,0.7,0.7]:[0.7,0.7,1],
                    y:!(section===0)? ["0vh","-10vh","20vh"] : ["20vh","-10vh","0vh"],
                    opacity:!(section===0)? [1,1,0] :[0,1,1]}}
                viewport={{once:false,amount:0}}
                transition={{delay:0.5,duration:2}}
                src={bg1}/>
                <motion.div 
                initial={{y:"20vh",opacity:0}}
                whileInView={{y:"0vh",opacity:1}}
                viewport={{once:false,amount:0}}
                transition={{delay:3,duration:0.5}}
                className='slider-content'>
                    <h2>HIGH GROUND CLEARANCE</h2>
                    <span>150mm</span>
                </motion.div>
            </motion.div>
           {/* --------------------------2--------------------------- */}

            <motion.div ref={divTwo} className='section-slider-two' id='section-slider-two' style={{position:(section===1 || section===2)?"absolute":"",top:(section===1 || section===2)?"0": ""}} >
            <motion.img 
            whileInView={{
                scale:section===1 ?[0.5,0.5,1] : [1,0.5,0.5],
                y:section===1?["20vh","-20vh","0vh"]:["0vh","-20vh","20vh"],
                opacity:section===1?[0,1,1]:[1,1,0]}}
            viewport={{once:false,amount:0}}
            transition={{delay:0.5,duration:2}}
            src={bg2}/>
                <motion.div 
                // initial={{y:"20vh",opacity:0}}
                whileInView={{
                    y:["20vh","0vh"],
                    opacity:[0,1]
            }}
                viewport={{once:false,amount:0}}
                transition={{delay:3,duration:0.5}}
                className='slider-content'>
                    <h2>HIGH GROUND CLEARANCE</h2>
                    <span>150mm</span>
                </motion.div>
            </motion.div>
              {/* ----------------------------3---------------------- */}

            <div className='section-slider-three' ref={divThree} id="section-slider-three" style={{position:section===2?"absolute":"",top:section===2?"0": ""}}>
            <motion.img 
            whileInView={{
                scale:[0.5,0.5,1],
                y:["20vh","-20vh","0vh"],
                opacity:[0,1,1]}}
            viewport={{once:false,amount:0}}
            transition={{delay:0.5,duration:2}}
            src={bg3}/>
                <motion.div 
                // initial={{y:"20vh",opacity:0}}
                whileInView={{
                    y:["20vh","0vh"],
                    opacity:[0,1]
            }}
                viewport={{once:false,amount:0}}
                transition={{delay:3,duration:0.5}}
                className='slider-content'>
                    <h2>HIGH GROUND CLEARANCE</h2>
                    <span>150mm</span>
                </motion.div>
            </div>

            {/* ------------------------------4------------------------- */}
            <div className='section-slider-four' ref={divFour} id="section-slider-four" ></div>
        </div>
        </div>
    </>
  )
}

export default Reliability