import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styleDummy.scss";

const Icon3 = require("../../../asset/fa_battery-2.png");
const BackImg = require("../../../asset/ChargingBg1.png");
const BatteryIcon = require("../../../asset/ChargerImg.png");
const B2icon = require("../../../asset/earthIm.png");
const B3icon = require("../../../asset/CharginImg3.png");
const DownArrow = require("../../../asset/arrowDown.png");

const chargingData = [
  {
    id: 1,
    imgIcon: BatteryIcon,
    cardtitle: "CHARGER",
    exshowroomprice: "On Board",
    // exshowroomrange: "Amp",
  },
  {
    id: 2,
    imgIcon: B2icon,
    cardtitle: "CHARGE ANYWHERE",
    exshowroomprice: "15",
    exshowroomrange: "Amps",
  },
  {
    id: 3,
    imgIcon: Icon3,
    cardtitle: "CHARGE TIME",
    exshowroomprice: "2",
    exshowroomrange: "Hrs",
  },
  {
    id: 4,
    imgIcon: B3icon,
    cardtitle: "Discover more about",
    exshowroomprice: "Charging",
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
  height:62%;
  bottom: 35%;
  display: flex;
  width: 100%;
  align-items: flex-end;
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
  height: 50%;
  bottom: 10%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;
export default function Charging() {
  const navigate = useNavigate();

  return (
    <div className="charging-cntnr" id="Charging">
      <DivTop>
        <div>
          <HeadingHead
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            Charge it <br /> anywhere
          </HeadingHead>
          <HeadingHeadC
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            Seriously, it’s that easy!
          </HeadingHeadC>
        </div>
      </DivTop>
      <DivThird>
        {chargingData.map((j) => (
          <>
            {j.id === 4 ? (
              <DivThirdChild3
                style={{
                  background: "#292B2B",
                  color: "#fff",
                }}
                onClick={() => navigate(`/charging`)}
              >
                <DivThirdChild4>
                  <DivSmall>{<img src={j?.imgIcon} style={{ objectFit: "none" }}/>}</DivSmall>
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
                  <DivSmall>{<img src={j?.imgIcon} style={{ objectFit: "none" }}/>}</DivSmall>
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
            )}
          </>
        ))}
      </DivThird>
    </div>
  );
}
