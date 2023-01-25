import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import "./HomeComp.scss";
import Range from "../../../Web/Assets/icon/Range.png";
import AccelerationImg from "../../../asset/AceImg.svg";
import SpeedIcon from "../../../asset/SpeedIcon.svg";
import RRange from "../../../asset/RRange.svg";
import BatteryIcon from "../../../asset/BatteryIcon.svg";
import LandingVideo from "../../../asset/LandingPage/HomeVideo.mp4";

const LogoImage = require("../../../asset/LogoImage.png");
// const HomeImg = require("../../../asset/LandingPage/HomeFull.png");
// const BatteryIcon = require("../../../asset/BatteryIcon.svg");
// const SpeedIcon = require("../../../asset/SpeedIcon.png");
// const AccelerationImg = require("../../../asset/AceImg.svg");
// const RRange = require("../../../asset/RRange.svg");
const LogoName = require("../../../asset/LogoImage.png");
const DownArrow = require("../../../asset/arrowDown.png");
const homeData = [
  {
    logoImg: LogoImage,
    // img: HomeImg,
    cardData: [
      {
        Iconimg1: SpeedIcon,
        cardtitle: "Top Speed",
        exshowroomprice: "100",
        exshowroomrange: "km/h",
      },
      {
        Iconimg1: RRange,
        cardtitle: "Range (IDC)",
        exshowroomprice: "200",
        exshowroomrange: "kms",
      },
      {
        Iconimg1: BatteryIcon,
        cardtitle: "Charge Time",
        exshowroomprice: "2",
        exshowroomrange: "hrs",
      },
      {
        Iconimg1: AccelerationImg,
        cardtitle: "Accele-ration",
        exshowroomprice: "3",
        exshowroomrange: "s(0-40)",
      },
    ],
  },
];
//CSS----------------------------->
const DivSmall = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(243, 243, 243, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 6px;
  flex: 1;
`;
const MainDiv = styled.div`
  /* background-image: url("../../../asset/HomeFull.png"); */
  // background-color: yellow;
  height: calc(100vh - 90px);
  /* height: 80vh; */
  width: 100%;
  /* border: 1px solid red; */
  /* top: 107px; */
  /* position: absolute; */
  display: flex;
  flex-direction: column;
`;
const DivSecond = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Img1 = styled.img`
  object-fit: cover;
  width: inherit;
`;
const Img2 = styled.img`
  /* position: absolute; */
  left: 25%;
`;
const DivThird = styled.div`
  justify-content: start;
  // padding-top: 10%;
  // height: 40%;
  position: absolute;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const DivThirdChild = styled.div`
  color: rgb(255, 255, 255);
  /* position: absolute; */
  padding: 0 5%;
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  top: 108px;
  @media (min-width: 376px) and (max-width: 767px) {
    bottom: 0;
  }
`;
const DivThirdChild2 = styled.div`
  display: flex;
  /* background-color: pink; */
  justify-content: space-evenly;
  /* flex: 3; */
  /* border: 1px solid red; */
  align-items: center;
  /* position: absolute;
  width: 100%;
  bottom: 15%; */
  height: 100%;
`;
const DivThirdChild3 = styled.div`
  display: flex;
  background: rgb(255, 255, 255);
  width: 76px;
  border-radius: 12px;
  height: 122px;
  @media (min-width: 376px) and (max-width: 767px) {
    width: 85px;
    height: 132px;
  }
`;
const DivThirdChild4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivThirdChild5 = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2.5 1 0%;
`;
const Heading1 = styled(motion.p)`
  font-size: 10px;
  font-weight: 500;
  padding-right: 15px;
  text-transform: uppercase;
`;
const Button1 = styled.button`
  font-size: 12px;
  font-weight: 700;
  background: rgb(245, 245, 245);
  border: none;
  outline: none;
  padding: 12px 32px;
`;
const DivLogo = styled.div`
  /* position: absolute; */
  height: 60%;
  top: 5%;
  color: #fff;
  width: 100%;
  text-align: center;
`;
const DivBottom = styled.div`
  /* flex: 1; */
  height: 10%;
  /* background-color: green; */
`;
const FirstChild = styled.div`
  // padding-top: 5%;
  // height: 50%;
  position: absolute;
  top: 5%;
  left: 30%;
`;
const SecondChild = styled.div`
  height: 50%;
  display: flex;
  align-items: self-end;
`;
const DivThird1 = styled.div`
  display: flex;
  gap: 10px;
  height: 50%;
`;
const DivThird2 = styled.div`
  padding-top: 10%;
  height: 50%;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  display: flex;
  color: #fff;
`;
export default function HomeComp({ ref, setState, scrollDown }) {
  const navigate = useNavigate();
  function openFullSpecification() {
    navigate("/FullSpeces");
  }
  // const location = useLocation();
  // // console.log("locationlocation", location);
  // // const ref = useRef();
  // const onScreen = useOnScreen(ref);
  // useEffect(() => {
  //   onScreen && setStateScroll("Home");
  // }, [onScreen]);
  return (
    <div ref={ref} id="home">
      {homeData.map((i) => (
        <MainDiv className="tiktok home-Img" id="Home">
          <DivSecond className="home-container">
            {/* <Img1 src={i.img} /> */}
            <video autoPlay muted loop className="landing_video">
              <source src={LandingVideo} type="video/mp4" />
            </video>
            <DivLogo>
              <FirstChild>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  India’s slickest electric bike
                </p>
                <Img2 src={LogoName} />
              </FirstChild>
              {/* <SecondChild>
                <DivThirdChild>
                  <p style={{ color: "#fff" }}>Super Specs</p>
                  <p
                    style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                    onClick={() => navigate("/FullSpeces")}
                  >
                    Deep Dive
                  </p>
                </DivThirdChild>
              </SecondChild> */}
            </DivLogo>
            {/* <div> */}
            <DivThird>
              <div style={{ display: "flex", justifyContent: "space-between",width:"90%",marginBottom:"24px" }}>
                <p style={{ color: "#fff" }}>Super Specs</p>
                <p
                  style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                  onClick={() => navigate("/FullSpeces")}
                >
                  Deep Dive
                </p>
              </div>
              <DivThird1>
                {i.cardData.map((j) => (
                  <DivThirdChild3>
                    <DivThirdChild4>
                      <DivSmall>
                        {<img src={j?.Iconimg1} style={{ width: "20px" }} />}
                      </DivSmall>
                      <DivThirdChild5>
                        <Heading1>{j?.cardtitle}</Heading1>
                        <div style={{ display: "flex" }}>
                          <p style={{ fontSize: "14px", fontWeight: 700 }}>
                            {j?.exshowroomprice}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: 400,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {j?.exshowroomrange}
                          </p>
                        </div>
                      </DivThirdChild5>
                    </DivThirdChild4>
                  </DivThirdChild3>
                ))}
              </DivThird1>
              {/* <DivThird2 >
                {
                  scrollDown ?  "Scroll Down" : "Scroll Up"
                }
                <motion.img 
                animate={{scale:[1,1.5,1.5,1],opacity:[1,0.8,0.8,1]}}
                viewport={{amount:1,once:false}}
                transition={{loop:Infinity,duration:1,repeatDelay:1}}
                src={DownArrow} style={{width:"20px",height:"20px",paddingLeft:"10px"}}/>
              </DivThird2> */}
            </DivThird>
          </DivSecond>
        </MainDiv>
      ))}
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
