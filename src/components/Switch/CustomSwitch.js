import React from 'react'
import "./CustomSwitch.css"

function CustomSwitch({setHaveWhatApp,haveWhatsApp}) {

  return (
    <label className="switch">
  <input type="checkbox" onChange={()=>setHaveWhatApp(!haveWhatsApp)}/>
  <span className="slider round"></span>
</label>
  )
}

export default CustomSwitch