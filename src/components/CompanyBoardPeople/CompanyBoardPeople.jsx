import React from 'react'
import "./CompanyBoardPeople.scss"
import ObenEvTeam from "../../asset/AboutUS/ObenEvTeam.png"

function CompanyBoardPeople({employee}) {
  return (
    <div className='board-profile'>
      <img src={ObenEvTeam} style={{paddingBottom:"28px"}}/>
        <img className='profile-image' src={employee.img}/>
        <h3 style={{color:"rgba(17, 19, 24, 1)",fontSize:"28px",fontWeight:500}}>{employee.name}</h3>
        <span style={{color:"rgba(17, 19, 24, 1)",fontSize:"16px",fontWeight:400}}>{employee.jobProfile}</span>
        <hr/>
        <p style={{padding:"24px", width:"73%",fontSize:"14px",fontWeight:400,color:"rgba(17, 19, 24, 1)",}}>{employee.qoute}</p>
    </div>
  )
}

export default CompanyBoardPeople