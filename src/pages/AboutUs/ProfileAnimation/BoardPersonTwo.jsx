import React from 'react'
import "./BoardPersonTwo.scss"
import ObenEvTeam from "../../../asset/AboutUS/ObenEvTeam.png"
import cto from "../../../asset/AboutUS/person2.jpg"
import ceo from "../../../asset/AboutUS/person1.jpg"
import {motion} from "framer-motion"
function BoardPersonTwo({employee}) {
  return (
    <div className='board-profile'>
      <div className='top-label'>
      <img src={ObenEvTeam} style={{paddingBottom:"28px"}}/>
      </div>

      <div 
      className='profile-container'>
      <motion.img 
      initial={{y:"-5vw",opacity:1,scale:1}}
      whileInView={{y:"10vw",opacity:0,scale:0}}
      viewport={{once:false,amount:0}}
      transition={{duration:2,delay:0.5}}
      className='profile-image' src={ceo} />
        <motion.h3 
        initial={{opacity:1,y:"-3vh"}}
        whileInView={{opacity:0}}
        viewport={{amount:0,once:false}}
        transition={{duration:1,delay:0.1}}
        >Madhumita Agrawal</motion.h3>
        <motion.span 
        initial={{opacity:1,y:"-3vh"}}
        whileInView={{opacity:0}}
        viewport={{amount:0,once:false}}
        transition={{duration:1,delay:0.1}}
        >Founder and CEO</motion.span>
        <hr/>
        <motion.p 
        className='leader-qoute'
        initial={{opacity:1,y:"-3vh"}}
        whileInView={{opacity:0}}
        viewport={{amount:0,once:false}}
        transition={{duration:1,delay:0.1}}
        >“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”</motion.p>
      </div>


    <div 
    className='profile-container-two' style={{position:"absolute"}}>
        <motion.img 
        initial={{y:"50vw",opacity:0}}
        whileInView={{y:"5vw",opacity:1}}
        viewport={{once:false,amount:0}}
        transition={{duration:1.5,delay:0.5}}
        className='profile-image' src={cto} />
        <motion.h3 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:false,amount:0}}
        transition={{duration:1,delay:1}}
        >Dinkar Agrawal</motion.h3>
        <motion.span 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:false,amount:0}}
        transition={{duration:1,delay:1}}
        >Founder and CEO</motion.span>
        <hr/>
        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:false,amount:0}}
        transition={{duration:1,delay:1}}
        className="leader-qoute">“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”</motion.p>
      </div>

    </div>
  )
}

export default BoardPersonTwo