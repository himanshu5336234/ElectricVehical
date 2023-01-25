import React from 'react'
import Topbar from '../Topbar/Topbar'
import "./CommonLayer.scss"
import CloseIcon from '@mui/icons-material/Close';
import {Link,useNavigate} from "react-router-dom"
import {motion} from "framer-motion"

function CommonLayer({title,value,noBottom,noCommonLayer}) {
     const navigate=useNavigate()
  const handleClose=()=>{
    window.localStorage.setItem("scrollIndex",value);
    navigate(`/#${value}`, {
      state: {id:value}
    })
    console.log("valuevalue",value);
  }
  
  return (
  <>
   { !noCommonLayer && <div className='common-layer-container'>
        <div className='common-layer-top'>
        <Topbar className="topbar"/>
        <label className='label-heading'>
            <span>{title}</span>
            <CloseIcon className='close-icon' onClick={handleClose}/>
        </label>
        </div>
        
        { !noBottom && <div className='common-layer-bottom'>
           <motion.button
           whileHover={{
             scale:1.1
           }}
           whileTap={{
            scale: 0.9
           }}
           ><Link className='link' to="/book">TEST THE RORR</Link></motion.button>
        </div>}
    </div>}
  </>
  )
}

export default CommonLayer