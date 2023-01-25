import React, { useRef, useEffect } from "react";
import Accordian from "./Accordian";
import Accordian1 from "./Accordian2";
import Accordian3 from "./Accordian3";
import Accordian4 from "./Accordian4";
import DesignImg from "../../../asset/cover-Motorcycle.png";
import PerformanceImg from "../../../asset/cover-performance.png";
import ChargingFull from "../../../asset/cover-charging.png";
import SafetyImg from "../../../asset/cover-safety.png";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Topbar from "../../../components/Topbar/Topbar";
import CommonLayer from "../../../components/CommonLayer/CommonLayer";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import Footer from "../../../components/Footer/Footer";
const Button = styled.button`
  color: #fff;
  padding: 18px;
  width: 100%;
  background: #000;
  border: none;
  outline: none;
  margin-top: 56px;
`;
const MainDiv = styled.div`
  height: calc(100vh - 90px);
  overflow-y: scroll;
  // padding: 20px;
  background-image: unset !important;
`;
const Img1 = styled.img`
  // position:relative;
  width: 100%;
  /* height:200px; */
`;

const FullSpecification = ({}) => {
  const navigate = useNavigate();
  const ref = useRef();
  //   const onScreen = useOnScreen(ref);

  //  useEffect(()=>{
  //   onScreen && setStateScroll("Full Specs")

  // },[onScreen])

  return (
    <>
      {/* <Topbar/> */}
      {/* <CommonLayer title={"Full Specification"} value={"Full Specs"} noCommonLayer={true}/> */}
      <MainDiv
        ref={ref}
        id="Full Specs"
        className="tiktok"
        //  style={{height:'60vh',overflowY:'scroll'}}
      >
        <div style={{padding:"20px" }}>
          <Img1 src={DesignImg} />
          <Accordian />
        </div>

        <div style={{padding:"20px" }}>
          <Img1 src={PerformanceImg} />
          <Accordian1 />
        </div>
        <div style={{padding:"20px" }}>
          <Img1 src={ChargingFull} />
          <Accordian3 />
        </div>
        <div style={{ padding:"20px" }}>
          <Img1 src={SafetyImg} />
          <Accordian4 />
        </div>
        <Footer/>
      </MainDiv>
    </>
  );
};

export default FullSpecification;
