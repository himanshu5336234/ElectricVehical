import React, { useRef } from 'react'
import "./Slider.scss"
function Slider({data,index,setIsHover}) {


  return (
    <div  className='slider-img-container' style={{transform: `translateX(${-(index*100)}vw)`}}>
        <img  src={data.img} onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}/>
    </div>
  )
}

export default Slider