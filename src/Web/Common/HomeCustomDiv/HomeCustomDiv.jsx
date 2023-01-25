import React from 'react';
import "./HomeCustomDiv.css"
const HomeCustomDiv=(props)=>{
   return(
    <>
    <div className='div_container'>
        <img src={props.src} alt="" className='icon_img'/>
        <div className='container_content'>
         <p className='container_content_title'><span>{props.title}</span></p>
         <p className='container_content_value'>{props.value}</p>
        </div>
    </div>
    </>
   )
}
export default HomeCustomDiv;