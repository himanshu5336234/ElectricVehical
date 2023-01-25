import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import img from "../../asset/updated_book_test_ride_v3.png";
import BgImage from "../../components/BgImage/BgImage";
import styled from "styled-components";
import ShowroomAccordian from "./Accordion";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowRoom = () => {
  const title = "Test the RorrExperience";

 

  const location = useLocation();
  const userInfo = location?.state?.bookingDetails;

  const users = useSelector((state) => state.user.users);

  return (
    <>
      <div>
        <Topbar />
      </div>
      <BgImage img={img} title={title} />
      <div style={{ backgroundColor: "#f5f5f5", height: "75vh" }}>

        <ShowroomAccordian userInfo={users} userId={users._id} />
      </div>
    </>
  );
};

export default ShowRoom;
