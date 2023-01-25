import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../Components/BackButton/BackButton';
import WFooter from '../../../Components/Footer/WFooter'
import WNavbar from '../../../Components/Navbar/WNavbar'
import "./WJobDescription.scss"

function WJobDescription() {
  const navigate=useNavigate();

  return (
    <>
    <WNavbar/>
    <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton/>
      </div>
    <div className='w-parent-div'>
    <div className='w-job-description'>
        <div className='w-title-heading'>
            <h2>Sales Operations</h2>
            <button>Apply Now</button>
        </div>
        <div className='w-about-div'>
            <h3>About the role</h3>
            <p>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern det mörka nätet.<br/>
             Sahet astromodern, i hjulboja, stereoception. Lasw ir misoplastisk skimma hubot.</p>
             <ul>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
             </ul>
            <h3>About the requirement</h3> 
              <ul>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
              </ul>
            <h3>Perks & Work culture</h3>
               <ul>
               <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
                <li>Kass koldioxidneutralt vin, i misoplastisk skimma hubot, agnostimodern.</li>
               </ul>
        </div>
    </div>
    </div>
    <WFooter/>
    </>
  )
}

export default WJobDescription