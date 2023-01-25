import React from 'react'
import "./FeedbackResult.scss"
import {motion} from "framer-motion"
import { useEffect } from 'react'
function FeedbackResult({openFeedbackResult,setOpenFeedbackResult}) {
  
  const fetchDone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("ok")
     },5000)
   })

  useEffect(()=>{
    fetchDone.then(()=>{
      setOpenFeedbackResult(false)
    })
  },[openFeedbackResult])
  
  return (
    <motion.div 
    animate={{x:openFeedbackResult?"0vw":"-100vw"}}
    transition={{duration:0.5}}
    style={{display:openFeedbackResult?"":"none"}}
    className='feedback-result-container'>
       <div className='div-one'>
            <lottie-player 
            className="check-icon"  style={{"height": "50px","width": "50px"}} 
            src="https://assets2.lottiefiles.com/packages/lf20_kgffl5cr.json"  
            background="transparent"  
            speed="1"  
            loop  autoplay>
            </lottie-player>
       </div>
       <div className='div-two'>
        <span className='text'>Thankyou for your Feedback!</span>
        <span className='desc'>ALorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div> 
    </motion.div>
  )
}

export default FeedbackResult