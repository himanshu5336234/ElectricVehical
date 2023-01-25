import React, { useEffect, useState } from 'react'
import BgImage from '../../components/BgImage/BgImage'
import Footer from '../../components/Footer/Footer'
import Topbar from '../../components/Topbar/Topbar'
import "./ContactUs.scss"
import img from "./../../asset/bg7.jpg"
import {motion} from "framer-motion"
import emailjs from 'emailjs-com';
import Loading from '../../components/Loading/Loading'
import whatsapp from "../../asset/icon/whatsapp.png"
import axios from 'axios'

const initialState={
  name:"",
  phone:"",
  message:""
}

function ContactUs() {
  const [userProperty,setUserProperty]=useState(initialState)
  const [errorField,setErrorFied]=useState({})
  const [loading,setLoading]=useState(false)

  //function to store user input to userProperty state
  const handleUserInput=(e)=>{
    setUserProperty((prev)=>{
     return  {...prev,[e.target.name]:e.target.value}
    })
  }

  //function to validate user input
  const validate=(userInput)=>{

    let error={}
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    //name checking 
    if(!userInput?.name){
      error.name="name is required.."
    }else if(userInput?.name.length <= 4){
       error.name="name should have 4 char"
    }

    //phone checking...........
    if(!userInput?.phone){
       error.phone="Phone is Required"
    }else if(userInput.phone.length <=9){
      error.phone="must be 10 digit"
    }

    //message checking
    if(!userInput?.message){
      error.message="message is required"
    }else if(userInput?.message.length <=10){
      error.message="message should be meaningful"
    }
    return error
  }

  //when value change for userProperty this useEffect will run 
  useEffect(()=>{
    setErrorFied(validate(userProperty))
   },[userProperty])

   //functin when user click on sednd message button
   const sendMessage=(e)=>{
    e.preventDefault();
    console.log(userProperty);
     axios.post("https://api.obenev.com/user/contact-us" , userProperty).then(res => alert(res.data.message));
    //     setLoading(true)
    // emailjs.send('gmail', 'template_lkvjpp6',userProperty, 'ZBJ1O29ULstrvC_1l')
    //   .then((result) => {
    //     setLoading(false)
    //     setUserProperty(initialState)
          
    //   }, (error) => {
    //       alert(error.text);
    //   });

    // alert("api build on progress ....")
    setUserProperty(initialState)

   }

  return (
    
 <>
 <Topbar/>
 <BgImage img={img} />
 <div className='contact-container'>
  <div className='contact-one'>
    <h3>Contact us.</h3>
    <p>Give us a call at (+91) 9876543210/Fill out the form below, or, </p>
    <label className='whatsapp-label'>
    <img src={whatsapp}/>
    <strong>Connect with us on WhatsApp</strong>
    </label>
  </div>
  <div className='contact-two'>
    <label className='input-label'>
      <input className='main-input' autoComplete='off' value={userProperty.name} onChange={handleUserInput} name="name" type="text" placeholder='Name'/>
    </label>
    <label className='input-label'>
      <span>+91</span>
      <hr/>
      <input  className='main-input' autoComplete='off' value={userProperty.phone} name='phone' onChange={handleUserInput} maxLength="10" type="tel" placeholder='Phone No.'/>
    </label>
    <label className='input-textarea'>
      <textarea rows="6" cols="72" name="message" value={userProperty.message} onChange={handleUserInput} placeholder='Message or question' />
    </label>
  </div>
  <div className='contact-three'>
    <motion.button
   whileHover={{
    scale: 1.1
   }}
   whileTap={{
    scale: 0.9
   }}
   onClick={sendMessage}
    disabled={!(Object.keys(errorField)==0)}
    className={Object.keys(errorField)==0?"contact-button":"contact-button disable"}
    >
      {loading? <Loading/> :"SEND MESSAGE"} 
    </motion.button>
    <p>By clicking “Send Message”, I give my consent to Oben EV to communicate with me by e-mail, Whatsapp, SMS or phone call.</p>
  </div>

 </div>
 <Footer/>
 </>
  )
}

export default ContactUs