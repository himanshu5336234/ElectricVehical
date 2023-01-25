import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Footer from '../../components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import "./JobDescription.scss"
function JobDescription() {
    const location = useLocation()
   //  localStorage.setItem("aboutUsIndex",8)
  return (
    <>
    <Topbar/>
    <div className='job-description-container'>
       <div className='jd-one'>
           <label>
           <ArrowBackIosNewRoundedIcon className='left-arrow'/>
           <span><Link className='link-navigate-careers' to="/about-us">Back to Careers</Link></span>
           </label>
       </div>
       <div className='jd-two'>
        <h2>{location.state.title}</h2>
        <span className='two-title'>About the role</span>
        <p>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern det mörka nätet. Sahet astromodern, i hjulboja, stereoception. Lasw ir misoplastisk skimma hubot.</p>
         <ul>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
         </ul>
       </div>
       <div className='jd-three'>
       <span className='three-title'>About the requirement</span>
        <p>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern det mörka nätet. Sahet astromodern, i hjulboja, stereoception. Lasw ir misoplastisk skimma hubot.</p>
         <ul>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
         </ul>
       </div>
       <div className='jd-four'>
       <span className='four-title'>Perks & Work culture</span>
        <p>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern det mörka nätet. Sahet astromodern, i hjulboja, stereoception. Lasw ir misoplastisk skimma hubot.</p>
         <ul>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
            <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
         </ul>
       </div>
       <div className='jd-five'>
         <label>
            <h3>Are you who we’re looking for?</h3>
            <span>Drop your CV at careers@obenev.com </span>
         </label>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default JobDescription