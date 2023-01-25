import React, { useEffect, useState } from 'react'
import "./WBookingCheckOtp.scss"
import {motion} from "framer-motion"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {useNavigate} from "react-router-dom"
import { publicRequest } from '../../../ServiceRequest';
import {useDispatch} from "react-redux"
import { setBooking, setUser,setPayment } from '../../../redux/userReducer';
import Loading from '../../../components/Loading/Loading';

let otp=1234
let bookingNumber=7978478703
let initialValue=20
const dummyBookTest={
  map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.734846225386!2d77.1181494144074!3d28.637707990598887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04e92f3aaaab%3A0x7a006ccb04aa684e!2sOBEN%20PRODUCTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1659430990426!5m2!1sen!2sin",
  date:"July 07, 2022",
  address:"No. 1702, Dr Rajkumar Rd, Prakash Nagar,Bengaluru, Karnataka 560021",
  name:"EV Motors, Prakashnagar, Bangalore",
  timeSlot:"10 am - 12 pm"
}

function BookingCheckOtp({openOtp,setOpenOtp,phoneNumber,setOpenBnf}) {
  const navigate=useNavigate()
  const [otpField,setOtpField]=useState(new Array(4).fill(""))
  let [otpExpire,setOtpExpire]=useState(initialValue)
  let [invalidOtp,setInvalidOtp]=useState(false)
  let [bookingInfo,setBookingInfo]=useState()
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch()

  //user input otp will be store in a state otpField
  const handleOtp=(e,index)=>{
    console.log(e)
    if(isNaN(e.target.value)) return false
    setOtpField([...otpField.map((d,idx)=> (idx===index)? e.target.value: d)])
    if(e.target.nextSibling && e.target.value !== ''){
      e.target.nextSibling.select()
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
  const handleResend=()=>{
    setInvalidOtp(false)
    setOtpExpire(initialValue)
    setOtpField(new Array(4).fill(""))
  }

  //task- once user input correct otp he will be redirected to next 
  const handleSubmit= async()=>{
    setIsLoading(true)
    setOtpExpire(initialValue)
     try{
     const res=await publicRequest.post('user/verify',{phone:phoneNumber,otp:Number(otpField.join(""))})
     console.log(res.data)
     if(!res.data.error){
      setIsLoading(false)
      if(res.data.bookData._id){
        dispatch(setUser({...res.data.user,token:res.data.token}))
        dispatch(setBooking({...res.data.bookData,payment:res.data.payment}))
        dispatch(setPayment(res.data.payment))
        navigate('/WResult')
      }else{
        setOpenOtp(false)
        setOpenBnf(true)
      }
     }else{
      setIsLoading(false)
      setInvalidOtp(true)
     }
     }catch(err){
      console.log(err)
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


  // checking console
  
  
  return (
    <div style={{display:openOtp?"":"none",}} className="webOTP">
    <motion.div 
    //  animate={{
    //   y:openOtp?"20vh":"100vh"
    //   }}
    //  initial={{}}
    //  transition={{
    //     type:"spring",
    //     stiffness:60
    //  }}
    className='w-otp-container'>
      
      {/* otp box top-------------------------- */}
      <div className='w-otp-top'>
        <div className='w-otp-top-closeicon'>
          <CloseOutlinedIcon onClick={()=>{
            setOpenOtp(!openOtp)
            setOtpField(new Array(4).fill(""))
            setOtpExpire(initialValue)
            }} className='w-otpcloseIcon'/>
        </div>
        <div className='w-otp-top-otplabel'>
          <h3 className='w-otp-top-heading'>OTP Verification</h3>
          <span className='w-otp-top-info'>We have sent a verification code<br/> on your phone number +91 {phoneNumber}</span>
        </div>
      </div>

      {/* otp box center----------------------- */}
      <div className='w-otp-center'>
        <div className='w-otp-input-box-container'>
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
                     className={!invalidOtp?"w-otp-input-box":"w-otp-input-box error"}/>
          })}
          </div>
        <div className='w-otp-input-details'>
        {}

        {invalidOtp ? <span style={{color:"red"}} >Incorrect code.<strong style={{fontWeight:"500",color:"black"}} onClick={handleResend}>Resend code</strong></span> : otpExpire==0?<span>Didn’t receive the code? <strong style={{fontWeight:"500"}} onClick={handleResend}>Resend code</strong></span>:<span>Resend code in : {otpExpire<10? "0"+otpExpire:otpExpire} sec</span>}
        </div>
      </div>

      {/* otp box bottom----------------------- */}
      <div className='w-otp-bottom'>
        < motion.button 
        disabled={!(otpField.join("").length ===4)}
        onClick={handleSubmit}
        whileTap={{
       scale:0.9          
        }}
        className={(otpField.join("").length ===4)?'w-otp-button':'w-otp-button disable'}>
          {isLoading? <Loading/> : "CONTINUE" }
          </motion.button>
      </div>

    </motion.div>
    </div>
  )
}

export default BookingCheckOtp