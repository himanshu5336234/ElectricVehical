import React, { useState } from "react";
// import Topbar from "../../components/Topbar/Topbar";
// import img from "../../asset/bg1.jpg";
// import BgImage from "../../components/BgImage/BgImage";
import styled from "styled-components";
import ShowroomAccordian from "./wAccordian";
import { useLocation  } from "react-router-dom";
import { useSelector } from 'react-redux'
import WNavbar from "../../Components/Navbar/WNavbar";
import Footer from "../../Components/Footer/WFooter";
import BookingLeftimg from "../../Components/BookingLefImg/BookingLeftimg";

const ShowRoom = () => {
  const title = "TEST THE  RORR";



const location = useLocation();
const userInfo = location?.state?.bookingDetails;

const users=useSelector(state=>state.user.users)

console.log(users)


  return (
    <>
      <div>
        <WNavbar/>
      </div>
      <div style={{width:"100%",display:"flex",paddingTop:"10vh"}}>
      <BookingLeftimg/>
<div style={{ backgroundColor: "#f5f5f5",height:"90vh",width:"50%",overflowY:"scroll"}}>

  <ShowroomAccordian userInfo={users} userId={users._id}/>

</div>
      </div>
      <Footer/>
    </>
  );
};

export default ShowRoom;
