import React,{useRef,useEffect,useState} from 'react'
import useOnScreen from "../../../../components/common/CutomHook/ScrollCustomHokks"
import DegreeC from "../../../../asset/degreeC.png"

export default function TempBatteryEx({setStateScroll}) {

  const ref = useRef();
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    onScreen && setStateScroll("");
    console.log("TempComp111", onScreen);
  }, [onScreen]);

  // console.log({ref})
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    setTimeout(() => {
      if(onScreen && count<45){
        setCount(count+1)
      }
      }, 100);
  },[count,onScreen])

  useEffect(()=>{
    setTimeout(() => {
      if(onScreen && count<45){
        setCount(count+1)
      }
      }, 100);
  },[count,onScreen])
  console.log(count)
  return (
    <div style={{display:"flex" }}>
                 {count}<img src={DegreeC} style={{width:"45px" }}/>
                   <p style={{fontSize:"72px",fontWeight:700}}>45</p>
                 <img src={DegreeC}/>

    </div>
  )
}
