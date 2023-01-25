import React from 'react'
import "./ObenEvNotAvailable.scss"
import notFoungIcon from "../../asset/NoshowroomIcon.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function ObenEvNotAvailable() {
  return (
    <motion.div 
    animate={{x:"0"}}
    initial={{x:"-100vw"}}
    transition={{
        type:"spring",
        stiffness:60
    }}
    className='bnf-wrapper'>
        <div className='bnf-top'>
            <img src={notFoungIcon}/>
        </div>
        <div className='bnf-center'>
            <label className='bnf-center-head'>Good things come to those who wait.</label>
            <label className='bnf-center-text'>eats waiting in line to refuel at the pump.We’ll be in your city soon.</label>
        </div>
        <div className='bnf-bottom'>
            <Link className='link' to="/"><motion.button
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
             className='bnf-bottom-button'>
                GOT IT
            </motion.button></Link>
        </div>
    </motion.div>
  )
}

export default ObenEvNotAvailable