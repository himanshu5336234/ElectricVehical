import React from "react";
import "./styleDummy.scss";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const LogoImage = require("../../../asset/LogoImage.png");
  // const HomeImg = require("../../../asset/LandingPage/HomeFull.png");
  const BatteryIcon = require("../../../asset/fa_battery-2.png");
  const SpeedIcon = require("../../../asset/SpeedIcon.png");
  const AccelerationImg = require("../../../asset/AceImg.png");
  const A2nd = require("../../../asset/RorrRang.png");
  const LogoName = require("../../../asset/LogoImage.png");
  const DownArrow = require("../../../asset/arrowDown.png");

  const homeData = [
    {
      Iconimg1: SpeedIcon,
      cardtitle: "Top Speed",
      exshowroomprice: "100",
      exshowroomrange: "km/h",
    },
    {
      Iconimg1: A2nd,
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
      cardtitle: "Acceleration",
      exshowroomprice: "3",
      exshowroomrange: "s(0-40)",
    },
  ];
  const DivThird = styled.div`
    justify-content: start;
    /* padding-top: 10%; */
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;
  const DivThird1 = styled.div`
    display: flex;
    gap: 10px;
    /* position: absolute; */
    bottom: 10%;
    /* height: 50%; */
  `;

  const DivThirdChild = styled.div`
    color: rgb(255, 255, 255);
    /* position: absolute; */
    padding: 0 5%;
    display: flex;
    bottom: -9%;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    position: absolute;
    top: 108px;
    @media (min-width: 376px) and (max-width: 767px) {
      bottom: -9%;
    }
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
  const DivSmall = styled.div`
    object-fit: none !important;
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
  const Heading1 = styled(motion.p)`
    font-size: 12px;
    font-weight: 500;
    padding-right: 15px;
  `;
  const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 62%;
  `;
  const SecondDiv = styled.div`
    position: absolute;
    bottom: 40%;
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding-left: 20px;
  `;
  const navigate = useNavigate();
  function openFullSpecification() {
    navigate("/FullSpeces");
  }
  return (
    <div className="home-cntnr" id="Home">
      <FirstDiv>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          India’s slickest electric bike
        </p>
        <img src={LogoImage} style={{ width: "171px", height: "48px" }} />
      </FirstDiv>
      <SecondDiv>
        <p style={{ color: "#fff" }}>Super Specs</p>
        <p
          style={{ color: "#fff", borderBottom: "2px solid #fff" }}
          onClick={() => navigate("/FullSpeces")}
        >
          Deep Dive
        </p>
      </SecondDiv>

      <DivThird>
        <DivThird1>
          {homeData.map((j) => (
            <DivThirdChild3>
              <DivThirdChild4>
                <DivSmall>
                  {<img src={j?.Iconimg1} style={{ objectFit: "none" }} />}
                </DivSmall>
                <DivThirdChild5>
                  <Heading1>{j?.cardtitle}</Heading1>
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "16px", fontWeight: 700 }}>
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
      </DivThird>
    </div>
  );
}
