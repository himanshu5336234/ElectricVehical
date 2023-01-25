import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Statistics from "../../../asset/Statistics.svg";
import Remote from "../../../asset/Remote.svg";
import ThirdIcon from "../../../asset/FindMyRorr.svg";
import FourthIcon from "../../../asset/FourthIcon.png";
import ConnectivityBG1 from "../../../asset/ConnectivityBG1.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useOnScreen from "../../../components/common/CutomHook/ScrollCustomHokks";
import "./Connectivity.css";
const connectivityData = [
  {
    img: ConnectivityBG1,
    imgTitle: "Charge it anywhere",
    imgsubtitle: "Seriously, it’s that easy!",
    cardData: [
      {
        id: 1,
        imgIcon: Statistics,
        cardtitle: "TRACK",
        exshowroomprice: "Ride",
        exshowroomrange: "Vitals",
      },
      {
        id: 2,
        imgIcon: Remote,
        cardtitle: "CHECK",
        exshowroomprice: "Remote",
        exshowroomrange: "Diagnostics",
      },
      {
        id: 3,
        imgIcon: ThirdIcon,
        cardtitle: "FIND",
        exshowroomprice: "your Rorr ",
        exshowroomrange: "via GPS",
      },
      {
        id: 4,
        imgIcon: FourthIcon,
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
const DownArrow = require("../../../asset/arrowDown.png");

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
`;
const MainDiv = styled.div`
  /* height: 80vh; */
  height: calc(100vh - 90px);
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
  padding-right: 10px;
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
  /* border: 1px solid yellow; */
  display: flex;
  align-items: flex-end;
  padding-left: 5%;
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
  line-height: 110%;
  color: #fff;
`;
const HeadingHeadC = styled(motion.p)`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
const LogoImage = require("../../../asset/Connectivity.png");

export default function Connectivity({}) {
  const navigate = useNavigate();
  const ref = useRef();
  //   const onScreen = useOnScreen(ref);

  //  useEffect(()=>{
  //   onScreen && setStateScroll("Connectivity")

  // },[onScreen])
  return (
    <div>
      {connectivityData.map((i) => (
        <MainDiv className="tiktok" id="Connectivity" ref={ref}>
          <DivSecond className="connectivity-containerNew">
            {/* <Img1 src={i?.img} /> */}
            <DivTop>
              <div>
                <HeadingHead
                  initial={{ y: "5vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  Connected Everywhere.
                </HeadingHead>
                <HeadingHeadC
                  initial={{ y: "2vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  Your smart appliances approve.{" "}
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
                        onClick={() => navigate(`/connectivity`)}
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
          {/* <div> */}

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

          {/* </div> */}
          {/* <DivBottom></DivBottom> */}
        </MainDiv>
      ))}
    </div>
  );
}
