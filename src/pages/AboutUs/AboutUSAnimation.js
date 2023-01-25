import React,{useEffect, useState} from "react";
import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar";
import useSwipe from "../../components/common/UseDrag/useDrag"
import AboutUs from "./AboutUs";
import AboutFirst from "./AboutFirst";
import BoardPersonOne from "./ProfileAnimation/BoardPersonOne";
import BoardPersonTwo from "./ProfileAnimation/BoardPersonTwo";
import BoardPersonThree from "./ProfileAnimation/BoardPersonThree";
import Careers from "../Careers/Careers";

//Banner Image
const FirsttImg = require("../../asset/AboutUS/1stImg.png");
const SecondImg = require("../../asset/AboutUS/2ndImg.png");
const ThirdImg = require("../../asset/AboutUS/3rdImg.png");
const FourthImg = require("../../asset/AboutUS/4thImg.png");

//Heading images
const FirstHeading = require("../../asset/AboutUS/1stheading.png");
const SecondHeading = require("../../asset/AboutUS/2ndHeading.png");
const ThirdHeading = require("../../asset/AboutUS/3rdHeading.png");
const FourthHeading = require("../../asset/AboutUS/4thHeading.png");

const ImgDiv = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 91vh;
`;
const ImgHeading = styled.img`
  position: absolute;
  top: 310px;
  left: 5%;
`;
const ParaFirst = styled.p`
  position: absolute;
  top: 400px;
  color: #fff;
  left: 5%;
  font-size:16px;
  font-weight:400;
`;
const ParaSecond = styled(ParaFirst)`
  top: 480px;
`;

export default function AboutUSAnimation() {

  const [stateScroll, setStateScroll] = useState(0);

  const bind = useSwipe({
    onUp: () => stateScroll < 8 && setStateScroll(stateScroll + 1),
    onDown: () => stateScroll >=1 && setStateScroll(stateScroll - 1),
  });

  useEffect(()=>{
    setStateScroll(Number(localStorage.getItem("aboutUsIndex")))
  },[])
  
  return (
    <>
      <Topbar />
      <div {...bind()}>
        {stateScroll===0 && <AboutFirst/> }
        {stateScroll===1 && <BoardPersonOne/>}
        {stateScroll===2 && <BoardPersonTwo/>}
        {stateScroll===3 && <BoardPersonThree/>}
        {stateScroll===4 && <Careers/>}
      </div>
    </>
  );
}
