import React from 'react'
import BoxComponent from '../../Common/CareerBoxComponent/BoxComponent'
import WFooter from '../../Components/Footer/WFooter'
import WNavbar from '../../Components/Navbar/WNavbar'
import boximg from "../../Assets/Careers/boximg.svg"
import "./WCareers.scss"
import BackButton from '../../Components/BackButton/BackButton'
import { useNavigate } from 'react-router-dom'

function WCareers() {
  const navigate=useNavigate();

  return (
    <>
    <WNavbar/>
    <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>
    <div className='w-careers'>
    <div className='w-description'>
        <h2>Be a part of the future <span>at obenev</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis.<br/>Lacus, velit luctus sapien eros, sed nec ut. Varius volutpat mollis faucibus integer eget<br/> tellus scelerisque pretium. Eu, at bibendum dignissim laoreet aliquet scelerisque est ut.<br/></p>
        <h5>Openings</h5>
    </div>
    <div className='w-divbox'  onClick={() => {
              navigate("/careers2");
            }} >
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Sales Operations"}/>
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Ownership Management"}/>
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Customer Service Executive"}/>
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Sales Strategy"}/>
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Creative"}/>
        <BoxComponent boximg={boximg} noOfJobs={6} jobtitle={"Customer Service Executive"}/>
    </div>
    
    </div>
    <WFooter/>
    </>
  )
}

export default WCareers