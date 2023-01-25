import React from 'react'
import { useLocation } from 'react-router-dom'
import "./PageNotFound.scss"

function PageNotFound({data}) {
    const location = useLocation()
  return (
    <div className='error-container'>
<lottie-player 
style={{
    "width": "300px", 
    "height": "300px"
}}
src="https://assets4.lottiefiles.com/packages/lf20_gs9xrxtb.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player><span className='error-message'>{location?.state?.message}</span>
  </div>
  )

}

export default PageNotFound