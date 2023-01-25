import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styleDummy.scss";

const HomeImg = require("../../../asset/Safety.png");
const BackImg = require("../../../asset/DesignImg.png");
const BatteryIcon = require("../../../asset/Design1.png");
const B2icon = require("../../../asset/SpeedIcon.png");
const B3icon = require("../../../asset/Design2rdIcon.png");
const B4icon = require("../../../asset/CharginImg3.png");
const DownArrow = require("../../../asset/arrowDown.png");

const designData = [
  {
    id: 1,
    imgIcon: B2icon,
    cardtitle: "NEO CLASSIC",
    // exshowroomprice: "200",
    // exshowroomrange: "Proprietary Design",
  },
  {
    id: 2,
    imgIcon: B3icon,
    cardtitle: "FLOATING DESIGN",
    // exshowroomprice: "3 Colors",
    // exshowroomrange: "kms"
  },
  {
    id: 3,
    imgIcon: BatteryIcon,
    cardtitle: "ARX FRANE",
    // exshowroomprice: "Design",
    // exshowroomrange: "years"
  },
  {
    id: 4,
    imgIcon: B4icon,
    cardtitle: "Discover more about",
    exshowroomprice: "Design",
    // exshowroomrange: "years"
  },
];

const DivTop = styled.div`
  left: 5%;
  text-align: -webkit-left;
  /* position: absolute; */
  height: 62%;
  padding-left: 5%;
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
  height: 35%;
  bottom: 10%;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

export default function Design() {
  const navigate = useNavigate();

  return (
    <div className="design-cntnr" id="Design">
      <DivTop>
        <div>
          <HeadingHead
            initial={{ y: "5vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            Designed to <br />
            turn on{" "}
          </HeadingHead>
          <HeadingHeadC
            initial={{ y: "2vh", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            transition={{ delay: 0.3, dration: 0.5 }}
          >
            Even when switched off{" "}
          </HeadingHeadC>
        </div>
      </DivTop>

      <DivThird>
        {designData.map((j) => (
          <>
            {j.id === 4 ? (
              <DivThirdChild3
                style={{
                  background: "#292B2B",
                  color: "#fff",
                }}
                onClick={() => navigate(`/design`)}
              >
                <DivThirdChild4>
                  <DivSmall>
                    {<img src={j?.imgIcon} style={{ objectFit: "none" }} />}
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
            ) : (
              <DivThirdChild3>
                <DivThirdChild4>
                  <DivSmall>
                    {<img src={j?.imgIcon} style={{ objectFit: "none" }} />}
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
            )}
          </>
        ))}
      </DivThird>
    </div>
  );
}
