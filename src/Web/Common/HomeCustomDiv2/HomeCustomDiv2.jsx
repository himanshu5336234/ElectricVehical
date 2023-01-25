import React from 'react';
import "./HomeCustomDiv2.css"
const HomeCustomDiv2=(props)=>{
   return(
    <>
    <div className='div_container1'>
        <img src={props.src} alt="" className='img1'/>
        <div className='container_content1'>
         <p className='container_content_title1'>{props.title}</p>
         <p className='container_content_value1'>{props.value}</p>
        </div>
    </div>
    </>
   )
}
export default HomeCustomDiv2;