import React, { useEffect, useState } from "react";
import "./WPress.css";
import WFooter from "../../../../Components/Footer/WFooter";
import WComponentNavbar from "../../../../Components/Navbar/WComponentNavbar";
import PressDummyData from "./PressDummyData";
import axios from "axios";

const WPress = () => {
  const [tabs, setTabs] = useState(0);


  const [pressData,setBlogsData] =useState([])

  function handleChange(index,category){
    setTabs(index)
    apiServices(category)
  
  }
  useEffect(()=>{
    apiServices("Trending"  )
  },[])
  function apiServices( category )  {

    axios.post( 'https://api.obenev.com/get-presses', { category} )

      .then( res => setBlogsData(res.data.data))
      ;

  };



















  return (
    <>
      <WComponentNavbar />
      <div className="blog-header">
        <div>
          <span>Press</span>
        </div>
        <div>
          <div style={{ cursor: "pointer" }}>
            <span
              className={tabs === 0 ? "active-blog" : "unactive-tab"}
              onClick={() =>handleChange(0,'Trending') }
            >
              ALL MENTIONS
            </span>
            <span
              className={tabs === 1 ? "active-blog" : "unactive-tab"}
              onClick={() =>handleChange(1,'') }
            >
              CORPORATE
            </span>
            <span
              className={tabs === 2 ? "active-blog" : "unactive-tab"}
              onClick={() =>handleChange(2,'category') }
            >
              MILESTONE
            </span>
            <span
              className={tabs === 3 ? "active-blog" : "unactive-tab"}
              onClick={() =>handleChange(3,'category') }
            >
              PRODUCT REVIEWS
            </span>
          </div>
          <div></div>
        </div>
      </div>
      
  
        <PressDummyData  pressData={pressData}/>
     
      <WFooter />
    </>
  );
};

export default WPress;  
