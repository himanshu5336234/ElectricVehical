import React from 'react'
import "./BoxComponent.scss"
// import boximg from "../../Assets/Careers/boximg.svg"
import iconarrow from "../../Assets/Careers/iconarrow.svg"

export default function BoxComponent({jobtitle, noOfJobs,boximg}) {
  return (
    <div className='w-box'>
        <img src={boximg} alt='jobimg'/>
        <p>{jobtitle}</p>
        <div className='w-link-div'>
           <p>{noOfJobs} Jobs</p> 
           <img src ={iconarrow} alt='iconarrow'/>
        </div>
    </div> 
  )
}
