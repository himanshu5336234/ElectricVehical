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
import B1sticon from "../../../asset/SpB1.png";
import B2ndicon from "../../../asset/SpB2.png";
import Spz3 from "../../../asset/Mask group.png";
import "./FullSpecification.scss";

import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
// import "./style.css";

import { useNavigate } from "react-router";
import styled from "styled-components";
import { height } from "@mui/system";

const MainDiv = styled.div`
padding: 0px;
    margin-top: -7px;
    width: 100%;
    text-align: start;
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
  gap: 10px;
`;
const SubDivChild = styled.div`
  // padding:20px;
  width:100%;
  position: relative;
  flex: 6;
`;
const SubDivChildRight = styled.div`
flex: 4;
display: flex;
flex-direction: column;
gap: 10px;

`;
const SubDivChildRight1 = styled.div`
flex: 3;
font-weight: 400;
font-size: 14px;
line-height: 110%;
opacity: 0.6;
color:#fff;
border-radius: 8px;
background-color: #2F3131;
display:flex;
justify-content: center;
align-items: center;

`;
const SubDivChildRight2 = styled(SubDivChildRight1)`
flex: 4;

`;
const SubDivChildRight3 = styled(SubDivChildRight1)`
flex: 3;

`;
const SubDivChild1 = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 10px;
  gap: 5px;
  
`;
const SubDiv2 = styled.div`
// width:100%;
height:115px;
background:#2F3131;
border-radius:8px;
color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    padding: 15px;

`;

const SubDiv2P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
`;
const SubDiv2P2 = styled.p`
  font-weight: 400;
  font-size: 14px;
  opacity: 0.6;
`;
const SubDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 32vh;
  width: 100%;
  gap: 10px;

`;

const Para1 = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.6;
  padding-left: 10px;
`;
const Para2 = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #fff;
  padding-left: 10px;
`;
const SubChild1 = styled.div`
  flex: 1;
  background: #2f3131;
  padding: 10px;
  border-radius: 8px;
`;
const SubChild2 = styled(SubChild1)`
  flex: 1;
  color: #fff;
  background: #2f3131;
  padding: 10px;
  margin-bottom: 0;
`;
const Img1 = styled.img`
  // margin-top:-40px;
  width: 130px;
`;
const DivIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 32px;
  justify-content: space-between;
`;
const SecondDiv = styled.div`
  // color: rgb(255, 255, 255);
  // display: flex;
  // justify-content: space-between;
  // padding: 20px;
  // }
`;
const SubDivBottom = styled.div`
display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 140px;
`;

const Border = styled.div`
background-color: rgb(0, 0, 0);
border-top: 1px solid #f8f8f8;

`;

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //dummy testride data-----------------
  const testRide = {
    firstHeading:"Motorcycle",
    seatHeight: "32”",
    seatHeightText: "Seat Height",
    designText: "ARX",
    designText2:"Fram",
    designText4:"Proproetary Fram Design",
    kw1:"10kW",
    kwRange:"IPMSM Motor",
    year:"3-Years",
    warrenty:"Warrenty",
    warrentyOptions:"(Battery, Motor, RSA)",
    size1:"230mm",
    size2:"200mm",
    bottomHeading:"Highest Water Wading",
    bottomHeading2:"Highest Ground Clearanceng",



  };
  const navigate = useNavigate();

  return (
    <MainDiv>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            backgroundColor: "#000",
            borderBottom: "1px solid #fff",
            height: "45px",
            outline: "none",
            textAlign: "start"
          }}
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: 500,
              color: "#fff",
            }}
          >
            {testRide?.firstHeading}
            <br />
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#000" }}>
          <Div1>
            <SubDiv1>
              <SubDivChild>
                <img src={Spz3} style={{background:"#2f3131",borderRadius:"8px",width:"inherit"}} />
                <Para1
                  style={{
                    opacity: "unset",
                    position: "absolute",
                    top: 10,
                    left: 8,
                    fontSize:"22px"
                  }}
                >
                  {/* {testRide?.seatHeight} */}
                  Comfortable<br/> to ride<br/> design
                </Para1>
                {/* <Para2
                  style={{
                    opacity: "0.6",
                    position: "absolute",
                    top: 40,
                    left: 8,
                    fontSize:"16px"
                  }}
                >
                  {testRide?.seatHeightText}
                </Para2> */}
                {/* <Img1 src={Spz1} /> */}
              </SubDivChild>
            <SubDivChildRight>
              <SubDivChildRight1>
              Seat Height
              </SubDivChildRight1>

              <SubDivChildRight2>
              Comfortable <br/>for two 
              </SubDivChildRight2>
              <SubDivChildRight3>
              Feature 3
              </SubDivChildRight3>
            </SubDivChildRight>
            </SubDiv1>
            <div>
            <SubDivChild1>
            <SubChild2>
                  <Para2>{testRide?.kw1}</Para2>
                  <Para1>{testRide?.kwRange}</Para1>
                </SubChild2>
                <SubChild1>
                  <Para2>
                    {testRide?.designText} 
                    {/* <span style={{ fontSize: "12px" }}>{testRide?.designText2}</span> */}
                  </Para2>
                  <Para1> Proproetary<br/> Fram<br/> Design
                    {/* {testRide?.designText4} */}
                  </Para1>
                </SubChild1>
              
              </SubDivChild1>
            </div>
            <SubDiv2 style={{ color: "#fff" }}>
              <SecondDiv>
                <SubDiv2P>
                    {testRide?.year}
                       <br /> {testRide?.warrenty}
                </SubDiv2P>
                <SubDiv2P2>{testRide?.warrentyOptions} </SubDiv2P2>
              </SecondDiv>
              <DivIcon>
                <img src={Icon1} />
                <img src={Icon2} />
                <img src={Icon3} />
              </DivIcon>
            </SubDiv2>
            <SubDiv3>
              <SubDivBottom style={{ color: "#fff", position: "relative",width:"100%" }}>
                <img
                  src={B1sticon}
                  style={{background:"#2f3131",borderRadius:"8px",position:"absolute",width:"inherit"}}                />
                

             <div style={{padding:"10px",position:"absolute"}}>
             <Para2 style={{display:"flex",alignSelf:"flex-start",}}>{testRide?.size1}</Para2>
                <Para1>{testRide?.bottomHeading}</Para1>
             </div>
              </SubDivBottom>
              <SubDivBottom style={{ color: "#fff",width:"100%" }}>
                <img
                  src={B2ndicon}
                  style={{background:"#2f3131",borderRadius:"8px",position:"absolute",width:"inherit"}}                />

              <div style={{padding:"10px",position:"absolute",}}>
              <Para2 style={{display:"flex",alignSelf:"flex-start"}}>{testRide?.size2}</Para2>
                <Para1>{testRide?.bottomHeading2}</Para1>
              </div>
              </SubDivBottom>
            </SubDiv3>
          </Div1>
        </AccordionDetails>
      </Accordion>
    </MainDiv>
  );
}
