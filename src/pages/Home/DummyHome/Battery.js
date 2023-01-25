import React from "react";
import "./styleDummy.scss";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Battery() {
  const BatteryIcon = require("../../../asset/Group 36648.png");
  const B2icon = require("../../../asset/Warrenty2Img.png");
  const B3icon = require("../../../asset/Group 370000010.png");
  const B4icon = require("../../../asset/CharginImg3.png");
  const DownArrow = require("../../../asset/arrowDown.png");

  const DivTop = styled.div`
    /* padding-top: 10%; */
    /* height: 100%; */
    text-align: -webkit-left;
    /* position: absolute; */
    height:62%;
    bottom: 35%;
    display: flex;
    width: 100%;
    align-items: flex-end;
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
    font-size: 12px;
    font-weight: 500;
    display: flex;
    text-align: start;
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
  const DivThird = styled.div`
  padding-top: 5%;
  /* position: absolute; */
  bottom: 10%;
  height: 50%;
     display: flex;
    /* position: absolute; */
    width: 100%;
    justify-content: center;
    gap: 10px;
  `;

  const batteryData = [
    {
      id: 1,
      imgIcon: BatteryIcon,
      cardtitle: "SAFER",
      exshowroomprice: "MHX",
      exshowroomrange: "Tech",
    },
    {
      id: 2,
      imgIcon: B2icon,
      cardtitle: "LARGER",
      exshowroomprice: "4.4",
      exshowroomrange: "kW",
    },
    {
      id: 3,
      imgIcon: B3icon,
      cardtitle: "LONGER ",
      exshowroomprice: "3x",
      exshowroomrange: "Life",
    },
    {
      id: 4,
      imgIcon: B4icon,
      cardtitle: "Discover more about",
      exshowroomrange: "Battery",
      // exshowroomrange: "years"
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="battery-cntnr" id="Battery">
      <DivTop>
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
          Keep a <br />
          Cool head
        </motion.p>
      </DivTop>
     <DivThird>
     {batteryData.map((j) => (
        <>
          {j.id === 4 ? (
            <DivThirdChild3
              style={{
                background: "#292B2B",
                color: "#fff",
              }}
              onClick={() =>
                navigate(`/BatteryImg`, {
                  state: {
                    id: "1"
                  },
                })
              }
            >
              <DivThirdChild4>
                <DivSmall>{<img src={j?.imgIcon} style={{objectFit: "none"}}/>}</DivSmall>
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
                      style={{ fontSize: "16px", fontWeight: 700 }}
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
                <DivSmall>{<img src={j?.imgIcon} style={{objectFit: "none"}}/>}</DivSmall>
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
                      style={{ fontSize: "16px", fontWeight: 700,paddingRight:"3px" }}
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
     </DivThird>
    </div>
  );
}
