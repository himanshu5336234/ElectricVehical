import React, { useEffect } from 'react'
import CommonLayer from '../../../components/CommonLayer/CommonLayer'
import "./Reliablity.scss"
import { useState } from 'react'
import useSwipe from '../../../components/common/UseDrag/useDrag'
import IndexOne from './Scroll/IndexOne'
import IndexTwo from './Scroll/IndexTwo'
import IndexThree from './Scroll/IndexThree'
import bg1 from "../../../asset/section/reliability/bg1.jpg"
// import "./relCheck.scss"

function RelCheck() {
   
    const [stateScroll, setStateScroll] = useState(1);
    const [groundClearance,setGroundClearance]=useState(0)
  const bind = useSwipe({
    onUp: () => stateScroll < 3 && setStateScroll(stateScroll + 1),
    onDown: () => stateScroll > 1 && setStateScroll(stateScroll - 1)
  });
  let myInterval
  
  useEffect(()=>{
    const changeGroundClearance=()=>{
      if(groundClearance<200){
        setGroundClearance(groundClearance+1)
        clearInterval(myInterval)
       }  
      }
      clearInterval(myInterval)
    myInterval=setInterval(changeGroundClearance,20)
  },[groundClearance])
  return (
    <div className='rel-wrapper'>
      {/* <img src={bg1} className="common-bg-img"/> */}
        <CommonLayer title={"Reliability"} value={"Reliability"}/>
        <div className='rel-main' {...bind()}>
                {stateScroll===1 && <IndexOne groundClearance={groundClearance}/>}
                {stateScroll===2 && <IndexTwo/>}
                {stateScroll===3 && <IndexThree/>}
        </div>
    </div>
  )
}

export default RelCheck