import React from 'react'
import BgImage from '../../components/BgImage/BgImage'
import Topbar from '../../components/Topbar/Topbar'
import Footer from '../../components/Footer/Footer'
import './Careers.scss'
import img from "../../asset/bg6.jpg"
import Job from '../../components/Job/Job'
import {motion} from "framer-motion"

const dummyJob=[
    {id:1, title:"Sales Operations" ,jobs:6},
    {id:2, title:"Ownership Management",jobs:2},
    {id:3, title:"Customer Service Executive",jobs:3},
    {id:4, title:"Sales Strategy",jobs:2},
    {id:5, title:"Creative",jobs:3}
]

function Careers() {
  return (
    <>
    <div className='careers-container'>
        <div className='company-info-container'>
            <h3 className='company-info-heading'>Be a part of the future
             with <span className='company-name'>Oben EV.</span></h3>
            <p className='company-info-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ut diam feugiat mattis. Lacus, velit luctus sapien eros, sed nec ut. Varius volutpat mollis faucibus integer eget tellus scelerisque pretium. Eu, at bibendum dignissim laoreet aliquet scelerisque est ut.</p>
        
        </div>
        <motion.div 
        initial={{y:"10vh" , opacity:0}}
        whileInView={{y:"0vh" ,opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{delay:0,duration:1}}
        className='job-openning-container'>
            <h3 className='openings'>Openings</h3>
            <div className='job-openings-container'>
             { dummyJob.map((info)=>{
                return <Job data={info} key={info.id}/>
             })}
            </div>
        </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Careers