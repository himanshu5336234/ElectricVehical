import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Spz1 from "../../../asset/SpzD.png";
import Icon1 from "../../../asset/icon1.png";
import Icon2 from "../../../asset/icon2.png";
import Icon3 from "../../../asset/icon3.png";
import B1sticon from "../../../asset/B1st.png";
import B2ndicon from "../../../asset/B2nd.png";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
// import "./style.css";

import { useNavigate } from "react-router";
import styled from "styled-components";


const MainDiv = styled.div`
// opacity: 0.9;
padding: 0px;
margin-top: -5px;
width: 100%;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 20px 0px;
  border-radius: 8px;
`;
const SubDiv1 = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const SubDivChild = styled.div`
  // padding:20px;
  position: relative;
  flex: 1;
`;
const SubDivChild1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const SubDiv2 = styled.div`
// width:100%;
height:141px;
background:#2F3131;
border-radius:8px;
color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const SubDiv2P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;
const SubDiv2P2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  opacity:0.8px;
`;
const SubDiv3 = styled.div`
display: flex;
    justify-content: space-between;
    margin-top: 10px;`;
const Para1 = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.6;
`;
const Para2 = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #fff;
`;
const SubChild1 = styled.div`
  flex: 1;
  background: #2f3131;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
`;
const SubChild2 = styled(SubChild1)`
  flex: 1;
  color: #fff;
  background: #2f3131;
  padding: 10px;
`;
const Img1 = styled.img`
  // margin-top:-40px;
`;
const DivIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 32px;
  justify-content: space-around;
`;
const SecondDiv = styled.div`
  // color: rgb(255, 255, 255);
  // display: flex;
  // justify-content: space-between;
  // padding: 20px;
  // }
`;
export default function AccordianPerformance() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //dummy testride data-----------------
  const testRide = {
    // showroom:"EV Motors,Prakashnagar,bangalare",
    address:
      "No. 1702, Dr Rajkumar Rd,Prakash Nagar, Bengalore, Karnataka 560021",
    googleMapLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7018.407544011245!2d77.04484691852416!3d28.41310759465191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228f6259b4b1%3A0x14c010fa6f5998fa!2sSapphire%20Mall!5e0!3m2!1sen!2sin!4v1657866194669!5m2!1sen!2sin",
  };
  const navigate = useNavigate();

  return (
    <MainDiv>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"#fff"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{backgroundColor:"#000",border:"1px solid #000",height:"56px",outline:"none"}}
        >
          <Typography sx={{ width: "100%", flexShrink: 0, fontWeight: 500,color:"#fff" }}>
          Performance
            <br />
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"#000"}}>
          <Div1>
            <SubDiv1>
              <SubDivChild>
                {/* <Para1>32”</Para1>
                <Para2>Seat Height</Para2> */}
                <Img1 src={Spz1} />
              </SubDivChild>
              <SubDivChild1>
                <SubChild1>
                  <Para2>ARX Frame</Para2>
                  <Para1> Proproetary Design</Para1>
                </SubChild1>
                <SubChild2>
                  <Para2>10kW</Para2>
                  <Para1>IPMSM Motor</Para1>
                </SubChild2>
              </SubDivChild1>
            </SubDiv1>
            <SubDiv2 style={{ color: "#fff" }}>
              <SecondDiv>
                <SubDiv2P> 3-Years<br/> Warranty </SubDiv2P>
                <SubDiv2P2>(Battery, Motor, RSA) </SubDiv2P2>
              </SecondDiv>
              <DivIcon>
                <img src={Icon1} />
                <img src={Icon2} />
                <img src={Icon3} />
              </DivIcon>
            </SubDiv2>
            <SubDiv3>
              <div style={{ color: "#fff" }}>
                <img src={B1sticon} />
              </div>
              <div style={{ color: "#fff" }}>
                {" "}
                <img src={B2ndicon} />
              </div>
            </SubDiv3>
          </Div1>
        </AccordionDetails>
      </Accordion>
    </MainDiv>
  );
}
