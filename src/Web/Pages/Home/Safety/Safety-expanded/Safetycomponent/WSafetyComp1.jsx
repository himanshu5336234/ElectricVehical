import React from "react";
import styled from "styled-components";
import Safeback from "../../../../../Assets/Safety/safeExpanded/Safeback.png";
import {
  motion,
  useTransform,
  useViewportScroll,
  useDragControls,
} from "framer-motion";

const MainDiv = styled.div`
  overflow-x: hidden;
  /* padding-top: 100px; */
`;
const Div1 = styled.div`
  padding: 16px;

  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
`;
const SubDiv1 = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
const Div2 = styled.div``;
const SubDiv2 = styled.div``;
const P = styled.p`
  position: absolute;
  font-weight: 700;
  font-size: 48px;
  color: #fff;
  /* top: 100%; */
  left: 5%;
  padding-top: 40px;
`;
const P1 = styled(P)`
  padding-top: 110px;

  /* top: 80%; */
  line-height: 100%;
`;

const P2 = styled(motion.p)`
font-family: Red Hat Display;
font-size: 40px;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;


`;
const P3 = styled(motion.p)`
font-family: Red Hat Display;
font-size: 24px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0px;


`;
const IMG = styled(motion.img)`
  position: absolute;
  bottom: 15%;
`;

function WSafetyComp1() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [1, 2]);
  const controls = useDragControls();
  function startDrag(event) {
    controls.start({ event });
  }
  return (
    <MainDiv>
      <Div2>
        <div
          style={{ position: "relative", scaleY: scrollYProgress }}
          className="img-wrapper"
        >
          <motion.div
            initial={{ y: 100, opacity: 1 }}
            whileInView={{ y: 0, opacity: -1 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <P onPointerDown={startDrag}>NO MATTER</P>
            {/* <br/> */}
            <P1>WHERE YOU RORR...</P1>
          </motion.div>

          <motion.div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: `url('${Safeback}')`,
              backgroundSize: "cover",
            }}
            initial={{ width: "130vw" }}
            whileInView={{ width: "100vw" }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <motion.div
            style={{width:"100%",textAlign:"center",color:"#fff"}}
              initial={{ y: "70vh", opacity: 0 }}
              whileInView={{ y: "65vh", opacity: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >

              <P2>STAY SAFE</P2>
              <P3 >With our Exclusive features for your safety & security</P3>
            </motion.div>
          </motion.div>
          <motion.div drag="x" dragControls={controls}></motion.div>
        </div>
      </Div2>
    </MainDiv>
  );
}

export default WSafetyComp1;