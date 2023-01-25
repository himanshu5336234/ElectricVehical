import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";

const DivFourth = styled.div`
`;
const Button1 = styled.button`
  font-size: 12px;
  font-weight: 700;
  background: rgb(245, 245, 245);
  border: none;
  outline: none;
  padding: 12px 32px;
  margin-right: 5%;
`;

export default function BottomButton() {
  const navigate = useNavigate();

  function openBookingPage() {
    navigate("/book");
  }
  function openPricingPage() {
    navigate("/pricingHome")
  }
  return (
    <div>
        <DivFourth
            style={{
              // display: "none",
              display: "flex",
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
              background: "#fff",
              position: "fixed",
              width: "100%",
              bottom: 0,
              padding: "10px 0",
            }}
          >
            <div style={{paddingLeft:"5%"}}>
              <p style={{ fontSize: "14px", fontWeight: 400 }} onClick={openPricingPage}>
                Ex-showroom Price
              </p>
              <p style={{ fontSize: "16px", fontWeight: 700 }}>₹ 1,24,999/-</p>
            </div>
            {/* <Button1 onClick={openBookingPage}>BOOK TEST RIDE</Button1> */}
            <Button1 onClick={openBookingPage}>TEST THE RORR</Button1>
          </DivFourth>

    </div>
  )
}
