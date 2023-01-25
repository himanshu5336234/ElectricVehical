import React from 'react'
import "./Job.scss"
import arrowJob from "../../asset/arrow-job.png"
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { useNavigate } from 'react-router-dom';
function Job({data}) {
  const navigate=useNavigate()
  const viewJobDescription=()=>{
    console.log(data)
    
    navigate("/job-description",{state:data})
  }
  return (
    <label className='job-container' onClick={viewJobDescription}>
        <span className='job-title'>{data.title}</span>
        <span className='total-job'>{data.jobs} jobs <img src={arrowJob} className="arrow-icon"/></span>
    </label>
  )
}

export default Job