import React from 'react'
import {motion} from "framer-motion"
import "./ChargingAnimaScroll.scss"
import { Children } from 'react'
function ChargingAnimaScroll({data}) {
  return (
        <div className='container'>
            <motion.div 
            initial={{y:"50vh",opacity:0}}
            whileInView={{y:"0vh",opacity:1}}
            viewport={{once:true,amount:0}}
            transition={{duration:1}}
            className='Charging-on-scroll'>
                    <img src={data.img}/>
                    <label>
                    <h1>{data.title}</h1>
                    <span className='info'>{data.info}</span>
                    <span className='des'>{data.des?data.des:""}</span>
                    </label>
            </motion.div>
        </div>
  )
}

export default ChargingAnimaScroll