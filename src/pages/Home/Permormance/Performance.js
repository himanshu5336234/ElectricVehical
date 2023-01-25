import React, { useEffect, useRef, useState } from "react";
// import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import { useNavigate } from "react-router-dom";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import styled from "styled-components";
import "./PerformanceComp.scss";
import B4icon  from "../../../asset/mobArrow.svg";
import AceImg  from "../../../asset/AceImg.svg";
import SpeedIcon  from "../../../asset/SpeedIcon.svg";
import Powerful  from "../../../asset/Powerful.svg";


const BackImg = require("../../../asset/PerformanceBg1.png");
const BatteryIcon = require("../../../asset/SpeedIcon.png");
const B2icon = require("../../../asset/IPMSMMOTOR.png");
const B3icon = require("../../../asset/AceImg.png");
// const B4icon = require("../../../asset/CharginImg3.png");
const DownArrow = require("../../../asset/arrowDown.png");

const title = "Designed to turn on";

const batteryData = [
  {
    img: BackImg,
    imgTitle: "G.O.A.T Performance",
    imgsubtitle: "Rorr on your rides!",
    cardData: [
      {
        id: 1,
        imgIcon: AceImg,
        cardtitle: "QUICK",
        exshowroomprice: "0-40",
        exshowroomrange: "in 3s",
      },
      {
        id: 2,
        imgIcon: SpeedIcon,
        cardtitle: "FAST",
        exshowroomprice: "100",
        exshowroomrange: "kmph",
      },
      {
        id: 3,
        imgIcon: Powerful,
        cardtitle: "POWERFUL",
        exshowroomprice: "10",
        exshowroomrange: "kW",
      },

      {
        id: 4,
        imgIcon: B4icon,
        cardtitle: "DAYUM!",
        exshowroomprice: "Tell me more.",
        // exshowroomrange: "years"
      },
    ],
  },
];

//CSS---------->
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
  margin-bottom: 25px;
`;
const MainDiv = styled.div`
  height: calc(100vh - 90px);
  /* height: 80vh; */
  /* top: 107px; */
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
`;
const DivSecond = styled(motion.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Img1 = styled.img`
  display: flex;
  object-fit: cover;
  width: inherit;
`;
const Img2 = styled.img`
  position: absolute;
  left: 25%;
`;
const DivThird = styled.div`
  padding-top: 10%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DivFourth = styled.div`
  /* border: 1px solid yellow; */
  /* height: 10%; */
`;

const DivThirdChild = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex: 1 1 0%;
  padding-left: 20px;
  align-items: center;
`;
const DivThirdChild2 = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  align-items: flex-start;
  height: 50%;
`;

const DivBottom = styled.div`
  /* flex: 1; */
  height: 10%;
  /* background-color: green; */
`;
const DivThirdChild3 = styled(motion.div)`
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
  display: unset;
  flex-direction: column;
`;
const DivThirdChild5 = styled(motion.div)`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2.5 1 0%;
  /* margin-bottom: -50px; */
`;
const Heading1 = styled(motion.p)`
  font-size: 10px;
  padding-right: 7px;
  font-weight: 500;
  padding-bottom: 8px;

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
  position: absolute;
  color: #fff;
  width: 100%;
  text-align: center;
`;
const DivTop = styled.div`
  height: 60%;
  /* border: 1px solid red; */
  padding-left: 5%;
  display: flex;
  align-items: flex-end;
`;
const DivThird2 = styled.div`
  display: none;
  padding-top: 10%;
  height: 50%;
  justify-content: center;
  width: 100%;
  /* display: flex; */
  color: #fff;
`;
const HeadingRorr = styled(motion.p)`
  font-size: 40px;
  font-weight: 700;
  bottom: 14%;
  line-height: 110%;
  width: 100%;
  color: #fff;
`;
const HeadingRorrC = styled(motion.p)`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  color: #fff;
`;
export default function Battery({ setStateScroll }) {
  const navigate = useNavigate();
  //   const ref = useRef();
  //   const onScreen = useOnScreen(ref);

  //  useEffect(()=>{
  //   onScreen && setStateScroll("Performance")

  // },[onScreen])
  return (
    <>
      {batteryData?.map((i) => (
        <MainDiv
          className="tiktok"
          id="Performance"
          // ref={ref}
        >
          <DivSecond className="performance-containerNew">
            {/* <Img1 src={i?.img} /> */}
            <DivTop>
              <div>
                <HeadingRorr
                  initial={{ y: "5vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  Star
                  <br /> Performance.
                </HeadingRorr>
                <HeadingRorrC
                  initial={{ y: "2vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  The Oscars approve. 
                </HeadingRorrC>
              </div>
            </DivTop>
            <DivThird>
              <DivThirdChild2>
                {i.cardData.map((j) => (
                  <>
                    {j.id === 4 ? (
                      <DivThirdChild3
                        style={{
                          background: "#292B2B",
                          color: "#fff",
                        }}
                        onClick={() => navigate(`/performance`)}
                      >
                        <DivThirdChild4>
                          <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
                          <DivThirdChild5>
                            <Heading1
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // transition={{ delay: 0.3, dration: 0.5 }}
                            >
                              {j?.cardtitle}
                            </Heading1>
                            <div style={{ display: "flex" }}>
                              <p style={{ fontSize: "14px", fontWeight: 700 }}>
                                {j?.exshowroomprice}
                              </p>
                              <p
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  display: "flex",
                                  alignItems: "center",
                                  paddingLeft: "4px",
                                }}
                              >
                                {j?.exshowroomrange}
                              </p>
                            </div>
                          </DivThirdChild5>
                        </DivThirdChild4>
                      </DivThirdChild3>
                    ) : (
                      <DivThirdChild3>
                        <DivThirdChild4>
                          <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
                          <DivThirdChild5>
                            <Heading1
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // transition={{ delay: 0.1, dration: 0.3 }}
                            >
                              {j?.cardtitle}
                            </Heading1>
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
                                  paddingLeft: "4px",
                                }}
                              >
                                {j?.exshowroomrange}
                              </p>
                            </div>
                          </DivThirdChild5>
                        </DivThirdChild4>
                      </DivThirdChild3>
                    )}
                  </>
                ))}
              </DivThirdChild2>
              <DivThird2>
                Scroll Down
                <motion.img
                  animate={{
                    scale: [1, 1.5, 1.5, 1],
                    opacity: [1, 0.8, 0.8, 1],
                  }}
                  viewport={{ amount: 1, once: false }}
                  transition={{ loop: Infinity, duration: 1, repeatDelay: 1 }}
                  src={DownArrow}
                  style={{ width: "20px", height: "20px", paddingLeft: "10px" }}
                />
              </DivThird2>
            </DivThird>
          </DivSecond>

          {/* <DivBottom>

           </DivBottom> */}
        </MainDiv>
      ))}
    </>
  );
}
