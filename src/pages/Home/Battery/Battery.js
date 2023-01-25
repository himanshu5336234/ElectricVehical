import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import B4icon from "../../../asset/mobArrow.svg";
import Safer from "../../../asset/Safer.svg";
import Larger from "../../../asset/Larger.svg";
import BatteryIcon from "../../../asset/fa_battery-2.svg";

import LandingVideo from "../../../asset/LandingPage/Battery.mp4";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
// const HomeImg = require("../../../asset/LandingPage/BatteryFull.png");
// const BatteryIcon = require("../../../asset/Safer.png");
const B2icon = require("../../../asset/Warrenty2Img.png");
const B3icon = require("../../../asset/FullBattery.png");
// const B4icon = require("../../../asset/CharginImg3.png");
const DownArrow = require("../../../asset/Arrow.svg");

const Div = styled.div`
  color: red;
`;
const title = "Designed to turn on";
const batteryData = [
  {
    // img: HomeImg,
    imgTitle: "Keep a cool head",
    // imgsubtitle: "and a cool battery pack",
    cardData: [
      {
        id: 1,
        imgIcon: Safer,
        cardtitle: "SAFER",
        exshowroomprice: "MHX",
        exshowroomrange: "Tech",
      },
      {
        id: 2,
        imgIcon: Larger,
        cardtitle: "BIGGER",
        exshowroomprice: "4.4",
        exshowroomrange: "kW",
      },
      {
        id: 3,
        imgIcon: BatteryIcon,
        cardtitle: "STRONGER",
        exshowroomprice: "3x",
        exshowroomrange: "Life",
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
  /* flex: 1; */
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
const DivSecond = styled.div`
  /* background-image: url("../../../asset/LandingPage/BatteryFull.png"); */
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
  position: relative;
  /* border: 1px solid red; */
  /* height: 100; */
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
  height: 50%;
  display: flex;
  /* position: absolute; */
  width: 100%;
  justify-content: center;
  gap: 10px;
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
  /* background-color: pink; */
  display: flex;
  justify-content: space-evenly;
  /* flex: 3; */
  /* border: 1px solid red; */
  align-items: center;
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
  display: unset;
  flex-direction: column;
`;
const DivThirdChild5 = styled.div`
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2.5 1 0%;
`;
const Heading1 = styled.p`
  font-size: 10px;
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
const DivBottom = styled.div`
  /* flex: 1; */
  height: 10%;
  /* background-color: green; */
`;
const DivTop = styled.div`
  /* padding-top: 10%; */
  // position: absolute;
  // top: 40%;

  // height: 60%;
  margin-bottom:"24px";
  display: flex;
  width: 100%;
  align-items: flex-end;
`;
const DivBottom2 = styled.div`
  // padding-top: 10%;
  // height: 40%;

  position: absolute;
  bottom: 15%;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
export default function Battery({}) {
  const navigate = useNavigate();
  const ref = useRef();
  //   const onScreen = useOnScreen(ref);
  //  useEffect(()=>{
  //  onScreen && setStateScroll("Battery")
  // },[onScreen])
  return (
    <>
      {batteryData?.map((i) => (
        <>
          <MainDiv className="tiktok" ref={ref} id="Battery">
            <DivSecond className="battery-containerNew">
              <video autoPlay muted loop className="landing_video">
                <source src={LandingVideo} type="video/mp4" />
              </video>
              {/* <Img1 src={i?.img}/> */}
              {/* <DivTop>
                <motion.p
                  initial={{ y: "5vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                  style={{
                    color: "#fff",
                    paddingLeft: "5%",
                    // position: "absolute",
                    fontSize: "40px",
                    fontWeight: 700,
                    bottom: "45vh",
                    lineHeight: "110%",
                    left: "5%",
                  }}
                >
                  Battery of Evolution.
                  <br />
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      fontWeight: 500,
                      bottom: "45vh",
                      lineHeight: "110%",
                    }}
                  >
                    Darwin approves.
                  </p>
                </motion.p>
              </DivTop> */}
              <DivBottom2>
                <DivTop style={{marginBottom:"24px"}}>
                  <motion.p
                    initial={{ y: "5vh", opacity: 0 }}
                    whileInView={{ y: "0", opacity: 1 }}
                    transition={{ delay: 0.3, dration: 0.5 }}
                    style={{
                      color: "#fff",
                      paddingLeft: "5%",
                      // position: "absolute",
                      fontSize: "40px",
                      fontWeight: 700,
                      bottom: "45vh",
                      lineHeight: "110%",
                      left: "5%",
                    }}
                  >
                    Battery of Evolution.
                    <br />
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 500,
                        bottom: "45vh",
                        lineHeight: "110%",
                      }}
                    >
                      Darwin approves.
                    </p>
                  </motion.p>
                </DivTop>
                <DivThird>
                  {/* <DivThirdChild2> */}
                  {i.cardData.map((j) => (
                    <>
                      {j.id === 4 ? (
                        <DivThirdChild3
                          style={{
                            background: "#292B2B",
                            color: "#fff",
                          }}
                          onClick={() =>
                            navigate(`/BatteryImg`, {
                              // state: {
                              //   id: "1"
                              // },
                            })
                          }
                        >
                          <DivThirdChild4>
                            <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
                            <DivThirdChild5>
                              <Heading1
                                initial={{ y: "5vh", opacity: 0 }}
                                whileInView={{ y: "0", opacity: 1 }}
                                transition={{ delay: 0.3, dration: 0.5 }}
                              >
                                {j?.cardtitle}
                              </Heading1>
                              <div style={{ display: "flex" }}>
                                <p
                                  initial={{ y: "5vh", opacity: 0 }}
                                  whileInView={{ y: "0", opacity: 1 }}
                                  transition={{ delay: 0.3, dration: 0.5 }}
                                  style={{ fontSize: "14px", fontWeight: 700 }}
                                >
                                  {j?.exshowroomprice}
                                </p>
                                <p
                                  initial={{ y: "5vh", opacity: 0 }}
                                  whileInView={{ y: "0", opacity: 1 }}
                                  transition={{ delay: 0.3, dration: 0.5 }}
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
                      ) : (
                        <DivThirdChild3>
                          <DivThirdChild4>
                            <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
                            <DivThirdChild5>
                              <Heading1
                                initial={{ y: "5vh", opacity: 0 }}
                                whileInView={{ y: "0", opacity: 1 }}
                                transition={{ delay: 0.3, dration: 0.5 }}
                              >
                                {j?.cardtitle}
                              </Heading1>
                              <div style={{ display: "flex" }}>
                                <p
                                  initial={{ y: "5vh", opacity: 0 }}
                                  whileInView={{ y: "0", opacity: 1 }}
                                  transition={{ delay: 0.3, dration: 0.5 }}
                                  style={{ fontSize: "14px", fontWeight: 700 }}
                                >
                                  {j?.exshowroomprice}
                                </p>
                                <p
                                  initial={{ y: "5vh", opacity: 0 }}
                                  whileInView={{ y: "0", opacity: 1 }}
                                  transition={{ delay: 0.3, dration: 0.5 }}
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
                      )}
                    </>
                  ))}
                  {/* </DivThirdChild2> */}
                </DivThird>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      paddingLeft: "10px",
                    }}
                  />
                </DivThird2>
              </DivBottom2>
            </DivSecond>
            {/* <DivBottom>
</DivBottom> */}
          </MainDiv>
        </>
      ))}
    </>
  );
}
