import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import SerachImg from "../../asset/search.png";
import styled from "styled-components";
import axios from "axios";
import BlogData from "./BlogData";
import Pagination1 from "../../Web/Assets/Blogs/Pagination1.jpg";


const MainDiv = styled.div`
  background: #f5f5f5;
  height: 100vh;
`;
const NavDiv = styled.div``;
const SearchDiv = styled.div`
  margin: 20px;
  background: #fff;
  display: flex;
  padding: 16px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: #fff;
`;
const Img = styled.img`
  padding: 0 16px 0 0;
`;
const DivScroll = styled.div`
  width: 90%;
  margin: 20px 20px 0px;
  overflow-x: auto;
  white-space: nowrap;
`;
const Td = styled.td`
  padding-right: 10px;
  font-weight: 500;
  font-size: 13px;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
`;
const Blogs = () =>
{

  const [ tabs, setTabs ] = useState( 0 );
  const [ blogData, setBlogsData ] = useState( [] );

  function handleChange ( index, category )
  {
    setTabs( index );
    apiServices( category );

  }
  useEffect( () =>
  {
    apiServices();
  }, [] );
  function apiServices ( category )
  {

    axios.post( 'https://api.obenev.com/get-blogs', { category } )

      .then( res => setBlogsData( res.data.data ) )
      ;

  };
  const showData = () =>
{
    if ( blogData.length > 0 )
    {
      const data = [];
      blogData?.forEach( ( item ) =>
      {
        data.push( { ...item, "src": Pagination1 } );
      } );

      return data.map( item =>
      {
        return <BlogData blogData={ item } />;
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
      <SearchDiv>
        <Img src={ SerachImg } />
        <Input type="text" placeholder="Search Blogs" />
      </SearchDiv>
      <DivScroll class="container">
        <Td
          className={ tabs === 0 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 0, "Tranding" ) }>TRENDING</Td>
        <Td
          className={ tabs === 1 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 1, "Performance" ) }>PERFORMANCE</Td>
        <Td
          className={ tabs === 2 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 2, "Charging" ) }>CHARGING</Td>
        <Td
          className={ tabs === 3 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 3, "Battery" ) }>BATTERY</Td>
        <Td
          className={ tabs === 4 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 4, "Design" ) }>DESIGN</Td>
        <Td
          className={ tabs === 5 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 5, "Tech" ) }>TECH</Td>
        <Td
          className={ tabs === 6 ? "active-tab-mob" : "unactive-tab-mob" }
          onClick={ () => handleChange( 6, "News" ) }>NEWS</Td>
      </DivScroll>
      <Border></Border>
      <>{ showData() }

      </>
    </MainDiv>
  );
};

export default Blogs;
