import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./wFeedbackForm.scss"
import star from "../../../../asset/feedback/Star.png"
import star1 from "../../../../asset/feedback/Star1.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {motion} from "framer-motion"
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../../components/Loading/Loading';
import { publicRequest } from '../../../../ServiceRequest';
import { useSelector } from 'react-redux';
function FeedbackForm({openFeedBack,setOpenFeedback,setOpenFeedbackResult,openFeedbackResult,bid,uid,}) {
   const [feedbackMessage,setFeedbackMessage]=useState("")
   const [rating,setRating]=useState(0)
   const [fieldError,setFieldError]=useState({})
   const [fetching,setFetching]=useState(false)
   const token = useSelector((state) => state.user.users.token);
//click on close icon, it will close the feedback window
  const handleClose=()=>{
    setOpenFeedback(!openFeedBack)
    setRating(0)
    setFeedbackMessage("")
  }
//this will set the feedback message 
  const handleChange=(e)=>{
   setFeedbackMessage(e.target.value)
  } 

//click on submit feedback 
  const handleSubmit= async()=>{
 setFetching(true)
 try{
const res=await publicRequest.post("/user/give-feedback",{
"rating": rating,
"review": feedbackMessage,
"userid": uid,
"bookingid": bid,
},
{
  "content-type": "text/json",
  headers: {
    Authorization: `Bearer ${token}`,
  },
}
)
if(!res.error){
  setFetching(false)
  setOpenFeedback(!openFeedBack)
  setFeedbackMessage("")
  setRating(0)
  setOpenFeedbackResult(!openFeedbackResult)
}else{
  setFetching(false)
  setOpenFeedback(!openFeedBack)
  setFeedbackMessage("")
  setRating(0)
  alert("some error")
}





 }catch(err){
  console.log(err)
 }
}
//this will set the rating 
  const handleRating=(rating)=>{
    setRating(rating)
  }
//this is for validation
  useEffect(()=>{
   const checkError=()=>{
     const error={}
     if(feedbackMessage?.length <=4){
       error.message="error two"
     }
     if(rating==0){
       error.rating="error three"
     }
     return error
   }
   setFieldError(checkError())
  },[feedbackMessage,rating])
console.log()
  return (
      <div 
    // animate={{x:openFeedBack?"0vw":"-100vw"}}
    transition={{duration:0.5}}
    style={{display:openFeedBack?"":"none"}}
    className='w-feedback-container'>
        <div className='w-div-one'>
            <div className='w-one-top'>
                <label className='w-left'>
                    <span className='w-title'>How was your Ride?</span>
                </label>
                <label className='w-right'>
                   {/* <CloseIcon onClick={handleClose} className='w-close-icon'/> */}
                </label>
            </div>
            <div className='w-one-bottom'>
                <img className='w-rating-icon' src={rating>=1?star1:star} onClick={()=>handleRating(1)}/>
                <img className='w-rating-icon' src={rating>=2?star1:star} onClick={()=>handleRating(2)}/>
                <img className='w-rating-icon' src={rating>=3?star1:star} onClick={()=>handleRating(3)}/>
                <img className='w-rating-icon' src={rating>=4?star1:star} onClick={()=>handleRating(4)}/>
                <img className='w-rating-icon' src={rating>=5?star1:star} onClick={()=>handleRating(5)}/>
            </div>
        </div>
        <div className='w-div-two'>
            <div className='w-two-top'>
              <label>
                <input type="text" value={feedbackMessage} onChange={handleChange} placeholder='Type your feedback here'/>
              </label>
            </div>
            <div className='w-two-bottom'>
                <motion.button 
                whileTap={{
                  scale: 0.9
                }}
                className={(Object.keys(fieldError)==0)?"w-feedback-button":"w-feedback-button w-disable"} onClick={handleSubmit}disabled={!(Object.keys(fieldError)==0)}>
               {fetching?<Loading/>:"SUBMIT FEEDBACK" }  </motion.button>
            </div>
        </div>
    </div>
  )
}

export default FeedbackForm