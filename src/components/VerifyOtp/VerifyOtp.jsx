import React, { useEffect, useState } from 'react'
import "./VerifyOtp.scss"
import {motion} from "framer-motion"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useNavigate} from "react-router-dom"
import { publicRequest } from '../../ServiceRequest';
import { setBooking, setUser } from '../../redux/userReducer';
import {useDispatch} from "react-redux"
import Loading from '../Loading/Loading';

let otp=1234
let initialValue=20

function VerifyOtp({openOtp,setOpenOtp,bookingDetails}) {
  const navigate=useNavigate()
  const [otpField,setOtpField]=useState(new Array(4).fill(""))
  let [otpExpire,setOtpExpire]=useState(initialValue)
  let [invalidOtp,setInvalidOtp]=useState(false)
  const [isLoading,setIsLoading]=useState(false)

  const dispatch=useDispatch()

  //user input otp will be store in a state otpField
  const handleOtp=(e,index)=>{
    if(isNaN(e.target.value)) return false
    setOtpField([...otpField.map((d,idx)=> (idx===index)? e.target.value: d)])
    if(e.target.nextSibling && e.target.value !== ''){
      e.target.nextSibling.select()
    }
  }

  // In order to move the cursor backward in the OTP field
  const handleKeyDown = (e) => {
    if(e.key === 'Backspace' && e.target.value === '')
    {
      if(e.target.previousSibling){
    e.target.previousSibling.select()
    }
    }
}

  //task- once user input correct otp he will be redirected to next 
  // page if he provided city which are availabe oben or diloge box of oben not availabe 
  const handleSubmit= async()=>{
    setIsLoading(true)
    setOtpExpire(initialValue)
     try{
     const res=await publicRequest.post('user/verify',{...bookingDetails,otp:Number(otpField.join(""))})
     if(!res.data.error){  //error check for otp
      setIsLoading(false)
      if(res.data?.bookData?._id){ //checking for booking
        dispatch(setUser(res.data))
        dispatch(setBooking(res.data.bookData))
        navigate("/result")
      }else{
        if(bookingDetails.cityAvailability==="yes"){
          dispatch(setUser({...res.data.user,token:res.data.token}))
          navigate('/showroomselection',{state: {bookingDetails:{...bookingDetails,UserId:res.data.user._id}}})
        
        }else{
          navigate('/oevnf')
        }
      } 
       
     }else{
      setIsLoading(false)
      setInvalidOtp(true)
     }
     }catch(err){
     }
  }

 //useEffect this will be resposible for showing expire time when user get otp  
  useEffect(()=>{
    let timer
    if(openOtp){
      timer = otpExpire > 0 && setInterval(()=>setOtpExpire(otpExpire - 1),1000)
    }
    return () => clearInterval(timer)
  },[otpExpire,openOtp])

  //this function will resend otp to the same phone number 
  const handleResend=async()=>{
    try{
      const res=await publicRequest.post("user/register",bookingDetails)
    }catch(err){
      console.log(err)
    }
    setIsLoading(false)
    setInvalidOtp(false)
    setOtpExpire(initialValue)
    setOtpField(new Array(4).fill(""))
  }

  // checking console
  
  
  return (
    <div style={{display:openOtp?"":"none",position:'absolute'}}>
    <motion.div 
     animate={{
        y:openOtp?"20vh":"100vh"
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
          <CloseOutlinedIcon onClick={()=>{
            setOpenOtp(!openOtp)
            setOtpField(new Array(4).fill(""))
            setOtpExpire(initialValue)
            }} className='otpcloseIcon'/>
        </div>
        <div className='otp-top-otplabel'>
          <h3 className='otp-top-heading'>Punch in the OTP</h3>
          <span className='otp-top-info'>We’ve sent you one on <br/>+91 {bookingDetails?.phone}</span>
        </div>
      </div>

      {/* otp box center----------------------- */}
      <div className='otp-center'>
        <div className='otp-input-box-container'>
          {otpField.map((data,index)=>{
            return  <input 
                     onInput={(e)=>handleOtp(e,index)} 
                     onKeyDown={(e) => handleKeyDown(e) }
                     type="tel" 
                     name="otp"
                     key={index}
                     maxLength={1}  
                     value={data}
                     onFocus={e=>e.target.select()}
                     className={!invalidOtp?"otp-input-box":"otp-input-box error"}/>
          })}
          </div>
        <div className='otp-input-details'>
        {}
        {invalidOtp ? <span style={{color:"red"}} >Incorrect code.<strong style={{fontWeight:"500",color:"black"}} onClick={handleResend}>Resend code</strong></span> : otpExpire==0?<span>That code is lost in space. <strong style={{fontWeight:"500"}} onClick={handleResend}>Resend code</strong></span>:<span>Send it again in: {otpExpire<10? "0"+otpExpire:otpExpire}</span>}
        </div>
      </div>

      {/* otp box bottom----------------------- */}
      <div className='otp-bottom'>
        < motion.button 
        disabled={!(otpField.join("").length ===4)}
        onClick={handleSubmit}
        whileTap={{
       scale:0.9          
        }}
        className={(otpField.join("").length ===4)?'otp-button':'otp-button disable'}>
        {isLoading? <Loading/> : "CONTINUE"}  
        </motion.button>
      </div>

    </motion.div>
    </div>
  )
}

export default VerifyOtp