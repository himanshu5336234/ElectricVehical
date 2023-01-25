import React from 'react'
import "./BookingNotFound.scss"
import logo from "../../asset/bnf.svg"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function BookingNotFound({openBnf}) {
  return (
    <div style={{display:openBnf?"":"none",position:'absolute', zIndex:"2"}}>
        <motion.div 
     animate={{
        y:openBnf?"10vh":"100vh"
        }}
    transition={{
        type:"spring",
        stiffness:60
    }}
    className='booking-wrapper'>
        <div className='booking-top'>
            <img src={logo}/>
        </div>
        <div className='booking-center'>
            <label className='booking-center-head'>No Booking Found</label>
            <label className='booking-center-text'>Looks like you haven’t booked a test ride yet.</label>
        </div>
        <div className='booking-bottom'>
            <motion.button 
            whileHover={{
                scale:1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            className='booking-bottom-button'><Link to="/book" className='link-book'>TEST THE RORR</Link>
            </motion.button>
            <label className='booking-bottom-label'><Link className='home-link' to="/">HOME</Link></label>
        </div>
    </motion.div>
    </div>
  )
}

export default BookingNotFound