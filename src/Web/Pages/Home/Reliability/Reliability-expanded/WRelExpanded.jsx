import React, { useState, useEffect } from "react";
import WFooter from "../../../../Components/Footer/WFooter";
import WNavbar from "../../../../Components/Navbar/WNavbar";
import WIndexOne from "./Scroll/WIndexOne";
import WIndexThree from "./Scroll/WIndexThree";
import WIndexTwo from "./Scroll/WIndexTwo";
import "./WRelExpanded.scss";
import { Swiper,  } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import BackButton from "../../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
function WRelExpanded() {
  const navigate = useNavigate();
  return (
    <>
      <WNavbar />
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>
      <div className="w-rel-wrapper">
    
      
            <WIndexOne />
       
          
            <WIndexTwo />
         
            <WIndexThree />
            <WFooter />
        
      </div>
      
    </>
  );
}

export default WRelExpanded;
