import React from 'react'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import "./Alert.scss"
import {motion} from "framer-motion"
function Alert() {
  return (
    <div className='alert-container'>
        <div className='alert-top-header'>
            <label className='alert-icon-header-container'>
                <WarningAmberRoundedIcon className='alert-icon'/>
                <span className='alert-head'>ALERT!</span>
            </label>
        </div>

        <div className='alert-info'>
            <div className='alert-top'>
                <span className='greeting-label'>Dear Patron,</span>
                <p className='greeting-info'>It has come to our notife that there are many fake websites which are preset online and taking  fake pre-bookings and partial booking amount in the name of Oben Electric.</p>
            </div>
            <div className='alert-bottom'>
            <p className='greeting-info'><span className='greeting-label'>Please not that our website is <a href='www.obenev.com' >www.obenev.com</a></span>  and we only take test ride bookings through our genuine website.</p>  
             <p className='greeting-info'>We request all of you to be cautions and verify before booking your test ride.</p>
             <p className='greeting-info'>We are only taking free test ride bookings now and will not ask for any amount for that.</p>
             <p className='greeting-info'>We’re taking all measures on priority to safeguard our beloved customers from any such fraud.</p>
        </div>
        </div>
        
        <div className='alert-button-container'>
            <motion.button 
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            className='alert-button'>
                GOT IT
            </motion.button>
        </div>
    </div>
  )
}

export default Alert