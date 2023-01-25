import React, { useEffect, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import "./MyBooking.scss"
import BgImage from '../../components/BgImage/BgImage'
import img from "../../asset/MobileMyBooking.jpg"
import Footer from '../../components/Footer/Footer'
import {motion} from "framer-motion"
import Otp from '../../components/Otp/Otp'
import BookingCheckOtp from '../../components/BookingCheckOtp/BookingCheckOtp'
import { publicRequest } from '../../ServiceRequest'
import Loading from '../../components/Loading/Loading'
import BookingNotFound from '../../components/BookingNotFound/BookingNotFound'

function MyBooking() {
    const [openOtp,setOpenOtp]=useState(false)
    const [phone,setPhone]=useState(null)
    const [errorField,setErrorField]=useState({})
    const [isLoading,setIsLoading]=useState(false)
    const [openBnf,setOpenBnf]=useState(false)

    // function

    //1) when user click on generate otp
    const handleOtp= async()=>{
      setIsLoading(true)
      try{
        const res=await publicRequest.post("user/login",{phone:Number(phone.phone)})
        if(res?.data?.error) {
          setIsLoading(false)
          setOpenBnf(true)
        }
        if(!res.data.error){
          setIsLoading(false)
          setOpenOtp(!openOtp)
        }
      }catch(err){
        console.log(err)
      }   
    }
    //2)this is for validation
   useEffect(()=>{
    const validate=(phone)=>{
      const error={}
      if(!phone){
       error.phone="phone is required"
      }else if(phone.phone.length !== 10){
        // console.log(phone)
        error.phone="must have 10 char"
      }
      return error
    }
    setErrorField(validate(phone)) 
   },[phone])
   

   // to prevent to take decimal values & special characters
   const handleDecimals = event => {
    let regex  = new RegExp("[a-zA-Z,.,/,`,~,!,@,#,$,%,^,&,*,(,)-,+,=,<,>,?]")
    {
        if(event.key!=="Backspace")
        {
          if(regex.test(event.key) || isNaN(event.target.value))
          {
            event.preventDefault()
          }
        }
    }
    
   }

   //3)this is for setting phone number into state variable
   const handleInput=(e)=>{
    console.log(e.target.value.split("").includes("."))
    if(isNaN(e.target.value) || (e.target.value.split("").includes("."))){
        return false
    }
    setPhone({[e.target.name]:e.target.value})

    
   }
   
  return (
    <div className='mybooking-wrapper' >
    <div className={openOtp || openBnf ?'mybooking-container disable' :'mybooking-container'} >
        <Topbar/>
        <BgImage img={img} />
       <div className='booking-form-container'>
          <div className='form-top'>
          <label className='form-title'>MY Bookings</label>
          <label className='form-input'>
            <span className='form-countrycode'>+91</span>
            <input type="tel" onKeyDown={(event) =>{handleDecimals(event)}} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone?.phone} autoComplete='off' maxLength={10} className='form-input-phonenumber' name="phone" onChange={handleInput} placeholder='Phone no.'/>
          </label>
          </div>
          <div className='button-wrapper'>
          <motion.button 
          whileHover={{
            scale:1.1
          }}
          
          whileTap={{
            scale:0.9
          }}
          onClick={handleOtp}
          disabled={!(Object.keys(errorField)==0)}
          className={Object.keys(errorField)==0?"form-button":'form-button disable'}>
            {isLoading? <Loading/> : "GENERATE OTP"}
            </motion.button>
          </div>
          
       </div>
        <Footer/>
    </div>
   <div className='popup'>
    <BookingNotFound openBnf={openBnf}/>
    <BookingCheckOtp openOtp={openOtp} setOpenBnf={setOpenBnf} setOpenOtp={setOpenOtp} phoneNumber={Number(phone?.phone)}/>
   </div>
    </div>
)
}

export default MyBooking