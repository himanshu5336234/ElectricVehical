import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Footer from '../../components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import "./Cancellation.scss"
function Cancellation() {
    const location = useLocation()
    console.log(location.state)
   //  localStorage.setItem("aboutUsIndex",8)
  return (
    <>
    <Topbar/>
    <div className='Cancel-container'>
       <div className='Cancel-one'>
           <label>
           <ArrowBackIosNewRoundedIcon className='left-arrow'/>
           <span><Link className='link-navigate-careers' to="/">Back</Link></span>
           </label>
       </div>
       <div className='Cancel-two'>
        {/* <h2>{location.state.title}</h2> */}
        <span className='two-title'>Cancellation & Refund Policy</span>
        <p>You can cancel your Pre-booking and get a full refund, at any time before
           booking amount is paid by you as per the communication provided by Oben Electric,
            the amount will be credited to your source account within 7-10 business days. You
             can cancel your reservation before making the booking amount by sending a mail to hello@obenev.com.</p>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cancellation