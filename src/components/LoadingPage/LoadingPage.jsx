import React from 'react'
import styled from "styled-components"
import './LoadingPage';
import { useNavigate } from "react-router";
import LoaderGif from "../../asset/LoaderGif.gif";


const MainDiv = styled.div`
background-color: #fff !important;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction:column;
`;
const P = styled.p`
font-family: 'Red Hat Display';
font-weight: 500;
font-size: 16px;
margin-top:-80px;
`;
const Img = styled.img`
width: 200px;
`;
const P1 = styled.p`

`;
function LoadingPage() {
  const navigate = useNavigate();

  return (
    <>
    <MainDiv onClick={() => navigate(`/loadingcomplete`)}>
    <Img src={LoaderGif}/>

      <P>We’re booking your revolutionary ride.</P>
      <P1>Hold on...</P1>
    </MainDiv>
    </>
  )
}

export default LoadingPage