import React from 'react'
import "./WobenevNotAvailable.scss"
import notFoungIcon from "../../../asset/NoshowroomIcon.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function WobenEvNotAvailable() {
  return (
    <motion.div 
    animate={{x:"0"}}
    initial={{x:"-100vw"}}
    transition={{
        type:"spring",
        stiffness:60
    }}
    className='w-bnf-wrapper'>
        <div className='w-bnf-top'>
            <img src={notFoungIcon}/>
        </div>
        <div className='w-bnf-center'>
            <label className='w-bnf-center-head'>Good things come to those who wait.</label>
            <label className='w-bnf-center-text'>eats waiting in line to refuel at the pump.We’ll be in your city soon.</label>
        </div>
        <div className='w-bnf-bottom'>
            <Link className='w-link' to="/"><motion.button
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
             className='w-bnf-bottom-button'>
                GOT IT
            </motion.button></Link>
        </div>
    </motion.div>
  )
}

export default WobenEvNotAvailable