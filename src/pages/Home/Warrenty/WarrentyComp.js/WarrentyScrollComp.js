import React, { useState, useRef } from "react";
import styled from "styled-components";
import useSwipe from "../../../../components/common/UseDrag/useDrag";

import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
} from "framer-motion";

const FirstImg = require("../../../../asset/WarrentyFirstImgScroll.png");
const secondImg = require("../../../../asset/WarrentySecondImg.png");
const thirdImg = require("../../../../asset/WarrentyThirdImg.png");

const MainDiv = styled.div``;
const P = styled(motion.p)`
  font-weight: 500;
  font-size: 14px;
  padding-top: 4px;
`;
const P1 = styled(motion.p)`
  font-weight: 600;
  font-size: 28px;
  padding-bottom: 12px;
`;
const Para = styled(motion.p)`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;
export default function WarrentyScrollComp() {
  const [stateScroll, setStateScroll] = useState(1);
  const bind = useSwipe({
    onUp: () => stateScroll < 3 && setStateScroll(stateScroll + 1),
    onDown: () => stateScroll > 1 && setStateScroll(stateScroll - 1),
  });
  const ref = useRef();
  console.log("testing123", ref);
  return (
    <div {...bind()} style={{ height: "80vh",overflowY:"scroll" }}>
      {/* {stateScroll === 1 ? ( */}
        <div syle={{ height: "100vh" }} ref={ref}>
          <img
            src={FirstImg}
            style={{ width: "100%" }}
            initial={{ y: "40vh" }}
            whileInView={{ y: "0" }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 1, duration: 2 }}
          />
          <div style={{ padding: "40px 24px" }}>
            <P>3 YEARS</P>
            <P1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              viewport={{ once: true, amount: 0 }}
            >
              Battery Warranty
            </P1>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              aenean donec iaculis fringilla magnis.
            </Para>
          </div>
        </div>
      {/* ) : stateScroll === 2 ? ( */}
        <div syle={{ height: "100vh" }}>
          <motion.img
            src={secondImg}
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ delay: 0.5, duration: 2 }}
          />
          <div style={{ padding: "40px 24px" }}>
            <P>5 YEARS</P>
            <P1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              viewport={{ once: true, amount: 0 }}
            >
              Motor Warranty
            </P1>
            <Para>
              Velit vitae, massa urna lacus velit sollicitudin eget amet. Metus
              in cursus amet elit. Lectus faucibus felis odio a lorem.
            </Para>
          </div>
        </div>
      {/* ) : stateScroll === 3 ? ( */}
        <div syle={{ height: "100vh" }}>
          <motion.img
            src={thirdImg}
            style={{ width: "100%" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ delay: 0.5, duration: 2 }}
          />
          <div style={{ padding: "40px 24px" }}>
            <P>5 YEARS</P>
            <P1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              viewport={{ once: true, amount: 0 }}
            >
              Road Assistance
            </P1>
            <Para>
              Ornare volutpat nulla curabitur blandit donec ullamcorper nunc
              sem. Quis ultricies mattis diam eget scelerisque. .
            </Para>
          </div>
        </div>
      {/* ) : ( */}
        {/* <p>No Data Found</p> */}
      {/* )} */}
    </div>
  );
}
