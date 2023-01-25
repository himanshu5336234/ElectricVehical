import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FourthIcon from "../../../asset/FourthIcon.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import "./ReliabilityComp.scss";
import GroundClearance from "../../../asset/GroundClearance.svg"
import WaterWading from "../../../asset/WaterWading.svg"
import ResistantBattery from "../../../asset/ResistantBattery.svg"
const B3icon = require("../../../asset/CharginImg3.png");
const ReliabilityFrameImg = require("../../../asset/ReliabilityFrameImg.png");
const ReliabilityFirstIconImg = require("../../../asset/ReliabilityFirstImg.png");
const ReliabilitySecondIconImg = require("../../../asset/ReliabilitySecondicon.png");
const ReliabilityThirdImgIcon = require("../../../asset/ReliabilityThirdImgIcon.png");
const DownArrow = require("../../../asset/arrowDown.png");

const reliabilityData = [
  {
    img: ReliabilityFrameImg,
    imgTitle: "Most Reliable",
    imgsubtitle: "Engineering for you",
    cardData: [
      {
        id: 1,
        imgIcon: GroundClearance,
        cardtitle: "BIG",
        exshowroomprice: "200mm",
        exshowroomrange: "High Ground Clearance",
      },
      {
        id: 2,
        imgIcon: WaterWading,
        cardtitle: "TALL",
        exshowroomprice: "230mm",
        exshowroomrange: "Highest Water Wader",
      },
      {
        id: 3,
        imgIcon: ResistantBattery,
        cardtitle: "ROBUST",
        exshowroomprice: "IP67 Water",
        exshowroomrange: "Resistant Battery",
      },
      {
        id: 4,
        imgIcon: B3icon,
        cardtitle: "DAYUM!",
        exshowroomprice: "Tell me more.",
        // exshowroomrange: "years"
      },
      // {
      //   cardtitle: "Acceleration",
      //   exshowroomprice:"3s(0-40)",
      // },
    ],
  },
];

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
  height: calc(100vh - 90px);
  /* height: 80vh; */
  top: 107px;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
`;
const DivSecond = styled.div`
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
  /* border: 1px solid red; */
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
const Heading1 = styled.p`
  font-size: 10px;
  font-weight: 500;
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
const HeadingHead = styled(motion.p)`
  font-size: 40px;
  font-weight: 700;
  line-height: 100%;
  color: #fff;
`;
const HeadingHeadC = styled(motion.p)`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export default function Reliability({}) {
  const navigate = useNavigate();
  const ref = useRef();
  //   const onScreen = useOnScreen(ref);

  //  useEffect(()=>{
  //   onScreen && setStateScroll("Reliability")

  // },[onScreen])
  return (
    <>
      {reliabilityData.map((i) => (
        <MainDiv className="tiktok" id="Reliability" ref={ref}>
          <DivSecond className="reliability-containerNew">
            {/* <Img1 src={i?.img} /> */}
            <DivTop>
              <div>
                <HeadingHead
                  initial={{ y: "5vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  A Reliable Romeo.
                </HeadingHead>
                <HeadingHeadC
                  initial={{ y: "2vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  Indian Dads Forum approves. 
                </HeadingHeadC>
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
                        onClick={() => navigate(`/reliabilityDetails`)}
                      >
                        <DivThirdChild4>
                          <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
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
                    ) : (
                      <DivThirdChild3>
                        <DivThirdChild4>
                          <DivSmall>{<img src={j?.imgIcon} />}</DivSmall>
                          <DivThirdChild5>
                            <Heading1>{j?.cardtitle}</Heading1>
                            <div style={{ display: "flex" }}>
                              <p style={{ fontSize: "14px", fontWeight: 700 }}>
                                {j?.exshowroomprice}
                              </p>
                            </div>
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

          {/* <DivFourth
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
              background: "#fff",
              position: "fixed",
              width: "100%",
              bottom: 0,
              padding: "10px 0",
            }}
          >
            <div>
              <p style={{ fontSize: "12px", fontWeight: 400 }}>
                Ex-showroom Price
              </p>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>₹ 1,24,999/-</p>
            </div>
            <Button1 onClick={""}>BOOK TEST RIDE</Button1>
          </DivFourth> */}
          {/* <DivBottom></DivBottom> */}
        </MainDiv>
      ))}
    </>
  );
}