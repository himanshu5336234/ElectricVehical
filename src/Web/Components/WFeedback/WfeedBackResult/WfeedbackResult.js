import React from 'react'
import "./wFeedbackResult.scss"
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
      console.log("yess bro")
      setOpenFeedbackResult(false)
    })
  },[openFeedbackResult])
  
  console.log(openFeedbackResult?"yes":"no")
  return (
    <motion.div 
    animate={{x:openFeedbackResult?"0vw":"-100vw"}}
    transition={{duration:0.5}}
    style={{display:openFeedbackResult?"":"none"}}
    className='w-feedback-result-container'>
       <div className='w-div-one'>
            <lottie-player 
            className="w-check-icon"  style={{"height": "50px","width": "50px"}} 
            src="https://assets2.lottiefiles.com/packages/lf20_kgffl5cr.json"  
            background="transparent"  
            speed="1"  
            loop  autoplay>
            </lottie-player>
       </div>
       <div className='w-div-two'>
        <span className='w-text'>Thankyou for your Feedback!</span>
        <span className='w-desc'>ALorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div> 
    </motion.div>
  )
}

export default FeedbackResult