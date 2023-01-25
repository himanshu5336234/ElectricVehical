import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FirstIcon from "../../../asset/Connectivity1stIcon.png";
import SecondIcon from "../../../asset/Connectivity2ndIcon.png";
import ThirdIcon from "../../../asset/Connectivity3rdIcon.png";
import FourthIcon from "../../../asset/FourthIcon.png";
import ConnectivityBG1 from "../../../asset/ConnectivityBG1.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";


const connectivityData = [
      {
        id: 1,
        imgIcon: FirstIcon,
        cardtitle: "RIDE STATISTICS",
        exshowroomprice: "On Board",
        // exshowroomrange: "Amp",
      },
      {
        id: 2,
        imgIcon: SecondIcon,
        cardtitle: "REMOTE DIAGNOSTIC",
        exshowroomprice: "15",
        exshowroomrange: "Amps",
      },
      {
        id: 3,
        imgIcon: ThirdIcon,
        cardtitle: "FIND MY RORR",
        exshowroomprice: "2",
        exshowroomrange: "Hrs",
      },
      {
        id: 4,
        imgIcon: FourthIcon,
        cardtitle: "Discover more about",
        exshowroomprice: "Connect- ivity",
        // exshowroomrange: "years"
      },
      // {
      //   cardtitle: "Acceleration",
      //   exshowroomprice:"3s(0-40)",
      // },
];

const DivTop = styled.div`
  padding-left: 5%;
   left: 5%;
  text-align: -webkit-left;
  /* position: absolute; */
  height: 62%;
  bottom: 35%;
  display: flex;
  width: 100%;
  align-items: flex-end;
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
text-align: start;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2.5 1 0%;
`;
const Heading1 = styled.p`
  font-size: 10px;
  font-weight: 500;
  padding-right: 14px;
`;
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
const DivThird = styled.div`
padding-top: 5%;
  /* position: absolute; */
  height: 35%;
  bottom: 10%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;
export default function Connectivity() {
  const navigate = useNavigate();

  return (
    <div className='connectivity-cntnr' id="Connectivity">
       <DivTop>
              <div>
                <HeadingHead
                  initial={{ y: "5vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  Connectivity
                </HeadingHead>
                <HeadingHeadC
                  initial={{ y: "2vh", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ delay: 0.3, dration: 0.5 }}
                >
                  IOT Connected{" "}
                </HeadingHeadC>
              </div>
            </DivTop>
            <DivThird>
                {connectivityData.map((j) => (
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
                              <p style={{ fontSize: "16px", fontWeight: 700 }}>
                                {/* {j?.exshowroomprice} */}
                              </p>
                              <p
                                style={{
                                  fontSize: "12px",
                                  fontWeight: 400,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {/* {j?.exshowroomrange} */}
                              </p>
                            </div>
                          </DivThirdChild5>
                        </DivThirdChild4>
                      </DivThirdChild3>
                    )}
                  </>
                ))}
            </DivThird>

      
    </div>
  )
}
