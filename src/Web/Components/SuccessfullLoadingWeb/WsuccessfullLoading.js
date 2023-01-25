import React from "react";
import styled from "styled-components";
import SuccssImg from "../../../asset/checkBox.png";
import { useNavigate } from "react-router";

const MainDiv = styled.div`
  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
const Div = styled.div`
background-color: #fff !important;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 40px;
`;

const SuccessfullLoading = () => {
  const navigate = useNavigate();

  return (
    <>
      <Div>
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_kgffl5cr.json"
          background="transparent"
          speed="1.3"
          style={{width:"50px",height:"50px"}}
          loop
          autoplay
        ></lottie-player>{" "}
        <MainDiv onClick={() => navigate(`/result`)}>
        Alright, alright, alright!
        <br/>   Booking successful.     </MainDiv>
      </Div>
    </>
  );
};

export default SuccessfullLoading;
