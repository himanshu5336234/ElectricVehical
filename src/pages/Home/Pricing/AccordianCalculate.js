import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from 'prop-types';
import "./AccordianCalculate.scss"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
// import Image from "../../asset/bg2.jpg";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
// import "./style.css";
import ProgressBar from "./ProgressBar"

import { useNavigate } from "react-router";
import styled from "styled-components";

const DivScroll = styled.div`
  width: 90%;
  margin: 20px 20px 24px;
  overflow-x: auto;
  white-space: nowrap;
`;
const Td = styled.td`
  padding: 0 8px;
  font-weight: 500;
  font-size: 13px;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
`;
const SubPayDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SubPayP = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
const SubPayP2 = styled.p`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
const SubPayP3 = styled.p`
font-weight: 400;
font-size: 12px;
`;
const AccordionSummary1 = styled(AccordionSummary)`
height: 20px;
`;
export default function ControlledAccordions({BikePricingInfo}) {

  const [expanded, setExpanded] = React.useState(false);

  const [downPayment, setDownpayment] = React.useState(30000)
  const [emiTenure, setEmiTenure] = React.useState(24)
  const [Price,setPrice]=React.useState(0)
  const [loanAmount,setLoanAmount]=React.useState(Price-downPayment)
  const [intrestRate,setIntrestRate]=React.useState(0)
  const [monthlyPayble,setMonthlyPayble]=React.useState(0)

  const compoundInterest = (amount, months, rate, n) => {
    const interest = (amount * (rate * 0.01)) / months
    const total = ((amount / months) + interest).toFixed(2);
    return total;
 };
 

  React.useEffect(()=>{
   setLoanAmount(Price-downPayment)
   setMonthlyPayble(compoundInterest(loanAmount, emiTenure, intrestRate, 12));
  },[downPayment,emiTenure])

  //this wil set all the state value when this coponent will run
   React.useEffect(()=>{
    setPrice(Number(BikePricingInfo?.showroomPrice))
    setIntrestRate(Number(BikePricingInfo?.interestRate))
    setLoanAmount(Price-downPayment)
    setMonthlyPayble(compoundInterest(loanAmount, emiTenure, intrestRate, 12));
   })

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
    <div style={{ padding: "15px 0px", margin: "0 20px" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary1
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0, fontWeight: 500, fontSize: "18px" }}>
            Calculate EMI
          </Typography>

        </AccordionSummary1>

        <AccordionDetails>

          <Typography>

            <PayDiv>

              <>
                <Box sx={{ width: '100%' }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>  <Typography style={{ marginBottom: "20px" }}>Down payment</Typography>
                    <Typography>₹{parseInt(downPayment).toLocaleString('en-IN')}</Typography></div>
                  {/* <LinearProgressWithLabel value={progress} style={{height:"10px"}}/> */}
                  <input className="range" type="range" min={BikePricingInfo?.downPaymentMin} value={downPayment} max={(BikePricingInfo?.downPaymentMax)} onChange={(e) => { setDownpayment(e.target.value) }} />
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0 24px 0" }}>  <Typography>EMI Tenure</Typography>
                    <Typography>{emiTenure} Months</Typography></div>
                  <input className="range" type="range" onChange={(e) => { setEmiTenure(e.target.value) }} min={BikePricingInfo?.emiTenureMin} max={BikePricingInfo?.emiTenureMax} value={emiTenure} />

                  {/* <LinearProgressWithLabel value={progress} style={{height:"10px"}}/> */}
                </Box>


              </>
              <SubPayDiv style={{ marginTop: "30px" }}>
                <SubPayP>Ex-Shorwoom Price</SubPayP>
                <SubPayP2>₹{parseInt(Price).toLocaleString('en-IN')}</SubPayP2>
              </SubPayDiv>
              <SubPayDiv>
                <SubPayP>Down Payment</SubPayP>
                <SubPayP2 style={{ color: "#02B17B" }}>-₹{parseInt(downPayment).toLocaleString('en-IN')}</SubPayP2>
              </SubPayDiv>
              <SubPayDiv>
                <SubPayP>Loan amount</SubPayP>
                <SubPayP2 >₹{parseInt(loanAmount).toLocaleString('en-IN')}</SubPayP2>
              </SubPayDiv>
              <SubPayDiv style={{ marginBottom: "10px" }}>
                <SubPayP>Interest Rate</SubPayP>
                <SubPayP2>{intrestRate}%</SubPayP2>
              </SubPayDiv>
              <SubPayDiv>
                <SubPayP>Monthly Payable<br />
                  (for 12 months)</SubPayP>
                <SubPayP2>₹{parseInt(monthlyPayble).toLocaleString('en-IN')}/month*</SubPayP2>
              </SubPayDiv>
              <SubPayP3>*Exclusing Insurance, documentation etc. charges</SubPayP3>
            </PayDiv>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
