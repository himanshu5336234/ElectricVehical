import React, { useEffect, useState } from 'react'
import "./Otp.scss"
import {motion} from "framer-motion"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useNavigate} from "react-router-dom"

let otp=1234

function Otp({openOtp,setOpenOtp}) {
  const navigate=useNavigate()
  const [otpField,setOtpField]=useState(new Array(4).fill(""))
  let [otpExpire,setOtpExpire]=useState(20)

 
  //user input otp will be store in a state otpField
  const handleOtp=(e,index)=>{
    if(isNaN(e.target.value)) return false
    
    setOtpField([...otpField.map((d,idx)=> (idx===index)? e.target.value: d)])

    if(e.target.nextSibling){
      e.target.nextSibling.select()
    }

  }

  // when user click on continue after providing otp (validation user otp)
  const handleSubmit=()=>{
    if(otp===Number(otpField.join(""))){
      setOpenOtp(!openOtp)
      navigate("/showroomselection")
    }
    else if(otp!==Number(otpField.join(""))){
      alert("INCORRECT OTP")
    }
  }

 //useEffect this will be resposible for showing expire time when user get otp  
  var downloadTimer
  useEffect(()=>{
    downloadTimer  = setInterval(function(){

      if(otpExpire <=0){
        return ()=>clearInterval(downloadTimer)
      }
      setOtpExpire(otpExpire - 1)
      }, 1000);
    
      return ()=>clearInterval(downloadTimer)
  })
  
  
  return (
    <div style={{display:openOtp?"":"none",position:'absolute'}}>
    <motion.div 
     animate={{
        x:openOtp?"0":"-100vw"
      }}
     initial={{}}
     transition={{
        type:"spring",
        stiffness:60
     }}
    className='otp-container'>
      
      {/* otp box top-------------------------- */}
      <div className='otp-top'>
        <div className='otp-top-closeicon'>
          <CloseOutlinedIcon onClick={()=>setOpenOtp(!openOtp)} className='otpcloseIcon'/>
        </div>
        <div className='otp-top-otplabel'>
          <h3 className='otp-top-heading'>OTP Verification</h3>
          <span className='otp-top-info'>We have sent a verification code on your phone number +91758748494</span>
        </div>
      </div>

      {/* otp box center----------------------- */}
      <div className='otp-center'>
        <div className='otp-input-box-container'>
          {otpField.map((data,index)=>{
            return  <input 
                     onChange={(e)=>handleOtp(e,index)} 
                     type="text" 
                     name="otp"
                     key={index}
                     maxLength={1}  
                     value={data}
                     onFocus={e=>e.target.select()}
                     className='otp-input-box'/>
          })}
          </div>
        <div className='otp-input-details'>
        <span>Resend code in {otpExpire<10? "0"+otpExpire:otpExpire}</span>
        </div>
      </div>

      {/* otp box bottom----------------------- */}
      <div className='otp-bottom'>
        < motion.button 
        onClick={handleSubmit}
        whileTap={{
       scale:0.9          
        }}
        className='otp-button'>CONTINUE</motion.button>
      </div>

    </motion.div>
    </div>
  )
}

export default Otp