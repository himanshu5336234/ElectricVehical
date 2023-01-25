import React from 'react'
import "./BookingNotFound.scss"
import logo from "../../../asset/bnf.svg"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function BookingNotFound({openBnf}) {
  return (
    <div style={{display:openBnf?"":"none",}} className="webNotFoundOTP">
        <motion.div 
     animate={{
        y:openBnf?"10vh":"100vh"
        }}
    transition={{
        type:"spring",
        stiffness:60
    }}
    className='w-Not-booking-wrapper'>
        <div className='w-booking-top'>
            <img src={logo}/>
        </div>
        <div className='w-booking-center'>
            <label className='w-booking-center-head'>No Booking Found</label>
            <label className='w-booking-center-text'>Looks like you haven’t booked a test ride yet.</label>
        </div>
        <div className='w-booking-bottom'>
            <motion.button 
            // whileHover={{
            //     scale:1.1
            // }}
            // whileTap={{
            //     scale: 0.9
            // }}
            className='w-booking-bottom-button'><Link to="/Booking" className='w-link-book'>TEST THE RORR</Link>
            </motion.button>
            <label className='w-booking-bottom-label'><Link className='w-home-link' to="/">HOME</Link></label>
        </div>
    </motion.div>
    </div>
  )
}

export default BookingNotFound