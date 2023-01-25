import React from 'react'
import "./BoardPersonOne.scss"
import ObenEvTeam from "../../../asset/AboutUS/ObenEvTeam.png"
import ceo from "../../../asset/AboutUS/person1.jpg"
import {motion} from "framer-motion"

function BoardPersonOne({employee}) {
  return (
    <div className='board-profile'>
      <div className='top-label'>
      <img src={ObenEvTeam} style={{paddingBottom:"28px"}}/>
      </div>

       <motion.div 
       initial={{y:"50vw",opacity:0}}
       whileInView={{y:"-5vw",opacity:1}}
       viewport={{once:false,amount:0}}
       transition={{duration:1,delay:0}}
       className='profile-container'>

        <img className='profile-image' src={ceo}/>
          <h3 >Madhumita Agrawal</h3>
          <span >Founder and CEO</span>
          <hr/>
          <p className='leader-qoute'>“Lorem ipsum dolor sit amet, consectetur adipiscit elit. Nunc mofit amet.”</p>
       </motion.div>
       </div>
  )
}

export default BoardPersonOne