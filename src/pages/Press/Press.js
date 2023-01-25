import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Topbar from "../../components/Topbar/Topbar";
import BgImage from "../../components/BgImage/BgImage";
import img from "../../asset/bg1.jpg";
import PressData from './PressData';
import "./style.css";
import axios from 'axios';
import Pagination1 from "../../Web/Assets/Blogs/Pagination1.jpg";

const MainDiv = styled.div`
background-color:#f5f5f5;

`;
const NavDiv = styled.div`
`;
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

const Press = () =>
{
  const title = "Newsroom";
  const [ tabs, setTabs ] = useState( 0 );
  const [ pressData, setBlogsData ] = useState( [] );

  function handleChange ( index, category )
  {
    setTabs( index );
    apiServices( category );

  }
  useEffect( () =>
  {
    apiServices( "Trending");
  }, [] );
  function apiServices ( category )
  {

    axios.post( 'https://api.obenev.com/get-presses', { category} )

      .then( res => setBlogsData( res.data.data ) )
      ;

  };
  const showData = () =>
  {
    if ( pressData.length > 0 )
    {
      
      const data = [];
      pressData?.forEach( ( item ) =>
      {
        data.push( { ...item, "src": Pagination1 } );
      } );

      return data.map( item =>
      {
        return <PressData PressData={ item } />;
      } );
    } else
    {
      return <><p style={ { fontWeight: 700, fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" } }>No Data Find</p></>;
    }

  };
  return (
    <MainDiv>
      <NavDiv>
        <Topbar />
      </NavDiv>
      <BgImage img={ img } title={ title } />
      <div>
        <DivScroll class="container">
          <tr>
            <Td
              className={ tabs === 0 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => handleChange( 0,"Trending" ) }
            >ALL MENTIONS</Td>
            <Td
              className={ tabs === 1 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => handleChange( 1,"" ) }>CORPORATE</Td>
            <Td
              className={ tabs === 2 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => handleChange( 2,"" ) }>MILESTONES</Td>
            <Td
              className={ tabs === 3 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => handleChange( 3,"" ) }>CORPORATE</Td>
            <Td
              className={ tabs === 4 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => setTabs( 4 ,"") }>MILESTONES</Td>
            <Td
              className={ tabs === 5 ? "active-tab-mob" : "unactive-tab-mob" }
              onClick={ () => setTabs( 5 ,"") }
            >PRODUCT REVIEWS</Td>
          </tr>
        </DivScroll>
        <Border></Border>

   {showData()}
         
      </div>

    </MainDiv>
  );
};

export default Press;