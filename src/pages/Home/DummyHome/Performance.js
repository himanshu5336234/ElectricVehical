import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styleDummy.scss";

const DivTop = styled.div`
  left: 5%;
  padding-left: 5%;
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
  height: 35%;
  display: flex;
  /* position: absolute; */
  width: 100%;
  justify-content: center;
  gap: 10px;
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

const BackImg = require("../../../asset/PerformanceBg1.png");
const BatteryIcon = require("../../../asset/SpeedIcon.png");
const B2icon = require("../../../asset/PerformanceImgNew.png");
const B3icon = require("../../../asset/AceImg.png");
const B4icon = require("../../../asset/CharginImg3.png");
const DownArrow = require("../../../asset/arrowDown.png");

const performanceData = [
  {
    id: 1,
    imgIcon: B3icon,
    cardtitle: "ACCELE-RATION",
    exshowroomprice: "3",
    exshowroomrange: "s(0-40)",
  },
  {
    id: 2,
    imgIcon: BatteryIcon,
    cardtitle: "TOP SPEED",
    exshowroomprice: "100",
    exshowroomrange: "km/h",
  },
  {
    id: 3,
    imgIcon: B2icon,
    cardtitle: "RORR RANGE",
    exshowroomprice: "200",
    exshowroomrange: "kms",
  },

  {
    id: 4,
    imgIcon: B4icon,
    cardtitle: "Discover more about",
    exshowroomprice: "Perfor- mance",
    // exshowroomrange: "years"
  },
];

export default function Performance() {
  const navigate = useNavigate();

  return (
    <div className="performance-cntnr" id="Performance">
      <DivTop>
        <div>
          <HeadingRorr
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            G.O.A.T <br /> Performance
          </HeadingRorr>
          <HeadingRorrC
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            Rorr on your rides!
          </HeadingRorrC>
        </div>
      </DivTop>

      <DivThird>
        {performanceData.map((j) => (
          <>
            {j.id === 4 ? (
              <DivThirdChild3
                style={{
                  background: "#292B2B",
                  color: "#fff",
                }}
                onClick={() =>
                  navigate(`/performance`, {
                    // state: {
                    //   id: "1"
                    // },
                  })
                }
              >
                <DivThirdChild4>
                  <DivSmall>
                    {<img src={j?.imgIcon} style={{ objectFit: "none" }} />}
                  </DivSmall>
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
                        style={{
                          fontSize: "16px",
                          lineHeight:"100%",
                          fontWeight: 700,
                          display: "flex",
                          textAlign: "start",
                        }}
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
                  <DivSmall>
                    {<img src={j?.imgIcon} style={{ objectFit: "none" }} />}
                  </DivSmall>
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
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          paddingRight: "3px",
                        }}
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
