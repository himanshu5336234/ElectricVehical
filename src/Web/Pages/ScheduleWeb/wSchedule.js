import React, { useEffect, useState } from "react";
// import Topbar from "../../components/Topbar/Topbar";
// import img from "../../../asset/bg1.jpg";
import backImg from "../../../asset/backArrow.png";
// import BgImage from "../../components/BgImage/BgImage";
import styled from "styled-components";
import Calender from "./wCalander";
import CalImg from "../../../asset/calendar.svg";
import ClockImg from "../../../asset/clock.svg";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { publicRequest } from "../../../ServiceRequest";
// import { setUser } from "../../redux/userReducer";
import { useDispatch } from "react-redux";
import { setBooking } from "../../../redux/userReducer";
import axios from "axios";
import { useSelector } from "react-redux";
import InprogressComp from "../../Components/InProgressWeb/winprogress";
import CompleteProgress from "../../Components/SuccessfullLoadingWeb/WsuccessfullLoading";
import {motion} from "framer-motion"
// import Moodal from "../../Components/Modal/Moodal"
const title = "TEST THE  RORR";

const MainDiv = styled.div``;
const BackgroundDiv = styled.div`
display: flex;
  // height: 100vh;
  background-color: #f5f5f5;
`;
const Heading = styled.div`
  color: #000;
  padding: 0 0 0 20px;
  font-family: Red Hat Display;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
const HeadingDiv = styled.div`
  padding: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CalenderDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonDiv = styled(motion.button)`
cursor: pointer;
  background: #d9dadd;
  color: #ffffff;
  /* width: 90%; */
  padding: 18px 0;
  border: none;
  outline: none;
  /* margin: 22px 20px; */
  position: absolute;
    width: 45%;
    bottom: 1rem;
    margin: 0 20px;
`;
const SlotDiv = styled.div`
  border: none;
  margin: 0 5px;
  padding: 11px;
  font-weight: 600;
  font-size: 14px;
  background-color: #fff;
`;
const SlotDiv1 = styled.div`
  border: 1px solid #000;
  padding: 10px;
  background-color: #fff;
`;
const HeadingText = styled.div`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding-left: 20px;
  margin-top: 32px;
`;
const SelectSlotDiv = styled.div`
cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  // width: 100%;
  margin-top: 16px;
  // margin-bottom: 50px;
`;
const SelectSlotDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: space-between;
  margin: 18px 20px 0;
`;
const ConfirmDate = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
`;
const Border = styled.div`
  border: 1px solid #111318;
  opacity: 0.1;
`;
const SelectSlotDate1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  width: 80%;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  justify-content: center;
`;
const ConfirmTime = styled(ConfirmDate)``;

const Img1 = styled.img`
  margin: 0 10px 0 0;
`;
const Img2 = styled(Img1)``;

const Schedule = ({ props, i }) => {
  console.log("props", i);
  
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dummySlot = [
    "10am - 12pm",
    "12pm - 02pm",
    "02pm - 04pm",
    "04pm - 06pm",
    "06pm - 08pm",
  ];
  const [shoetimeslot, setshowtimeSlot] = useState();

  //date and time
  const [showdateslot, setshowdateSlot] = useState();
  const [timeSlot, setTimeSlot] = useState(false);

  const [selectDate, setSelectDate] = useState(false);
  const [active, setActive] = useState();
  const [bookingSlots, setBookingSlots] = useState([]);
  const [show, setShow] = React.useState([]);
  const [loader, setLoader] = useState(0);
  const [availableSlots, setAvailableSlots] = useState();
  const [modifyDate, setModifyDate] = useState();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.users.token);

  const navigate = useNavigate();
  const location = useLocation();

  const bookingDateUpdate = (mydate) => {
    setModifyDate(mydate);
  };
  //loader

  //this useEffect will fetch all slots available
  React.useEffect(() => {
    const fetchShowroomData = async () => {
      try {
        const resSr = await publicRequest.post("user/get-slots", {
          showroom_id: i?._id,
        });
        console.log(resSr.data.data);
        resSr.data.data.map((data) => {
          if (data.date === modifyDate) {
            setAvailableSlots(data.slots);
          }
        });

        setShow(resSr.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShowroomData();
  }, [modifyDate]);
  //this function will run when user click on sc ride button // and all input are filled by the user

  const handleSave = async () => {
    try {
      const bookingRes = await axios.post(
        "https://api.obenev.com/user/book-ride",
        {
          date: showdateslot,
          time: timeSlot,
          userid: props?.userId,
          showroom_id: i?._id,
        },
        {
          "content-type": "text/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(bookingRes);
      dispatch(
        setBooking({
          ...bookingRes.data.data,
          payment: bookingRes.data.payment,
        })
      );

      setTimeout(() => {
        setLoader(1);
      }, 0);
      setTimeout(() => {
        setLoader(2);
      }, 3000);
      setTimeout(() => {
        navigate("/bookedDataWeb");
      }, 6000);
    } catch (err) {
      console.log(err);
    }
  };
const [modalState, setModalState] = useState(true)
console.log("window",window);
  return (
    <>
    {/* {modalState && <Moodal closeModal={setModalState}> */}
      {loader === 0 ? (
        <div>
          <MainDiv>
            {/* <Topbar /> */}
          </MainDiv>
          {/* <BgImage img={img} title={title} /> */}
          <BackgroundDiv>
            <div style={{width:"50%"}}>
            <HeadingDiv>
              {/* <img
                src={backImg}
                onClick={() => navigate(`/WShowroom`)}
              /> */}
              <Heading>Choose the day</Heading>
            </HeadingDiv>
            <CalenderDiv>
              <Calender
                setShow={show}
                setshowdateSlot={setshowdateSlot}
                bookingDateUpdate={bookingDateUpdate}
                setSelectDate={setSelectDate}
              />
            </CalenderDiv>
            </div>
            <div style={{width:"50%"}}>
            {selectDate ? (
              <>
                <HeadingText>Choose the time</HeadingText>
                <Div>
                  {selectDate ? (
                    <>
                      {dummySlot?.map((i, index) => (
                        <SelectSlotDiv
                          onClick={
                            !availableSlots?.includes(i)
                              ? console.log("testing slots")
                              : () => setTimeSlot(i)
                          }
                        >
                          <SlotDiv
                            style={{
                              border:
                                active === index && availableSlots?.includes(i)
                                  ? "1px solid #000"
                                  : "none",
                              color: availableSlots?.includes(i)
                                ? "#000"
                                : "rgba(17, 19, 24, 0.2)",
                            }}
                            onClick={() => setActive(index)}
                          >
                            {i}
                          </SlotDiv>
                        </SelectSlotDiv>
                      ))}
                    </>
                  ) : null}
                </Div>
                {timeSlot ? (
                  <SelectSlotDate>
                    <Border></Border>
                    <SelectSlotDate1>
                      <ConfirmDate>
                        <Img1 src={CalImg} />
                        {`${month.filter(
                          (month, index) =>
                            index == showdateslot.split("-")[1] - 1
                        )} ${showdateslot.split("-")[0]},${
                          showdateslot.split("-")[2]
                        }`}
                      </ConfirmDate>
                      <hr style={{ opacity: "0.2" }} />
                      <ConfirmTime>
                        <Img2 src={ClockImg} />
                        {timeSlot}
                      </ConfirmTime>
                    </SelectSlotDate1>
                  </SelectSlotDate>
                ) : null}
              </>
            ) : null}
            {timeSlot ? (
              <ButtonDiv
              whileHover={{
                scale:1
              }}
              
              whileTap={{
                scale:0.9
              }}
                onClick={handleSave}
                style={{ backgroundColor: "#000000" }}
              >
            Schedule It. Can’t Wait.
              </ButtonDiv>
            ) : null}
            {!timeSlot ? (
              <ButtonDiv
              whileHover={{
                scale:1
              }}
              
              whileTap={{
                scale:0.9
              }}
              disabled={timeSlot}>Schedule It. Can’t Wait.
              </ButtonDiv>
            ) : null}
            </div>
          </BackgroundDiv>
        </div>
      ) : loader === 1 ? (
        <InprogressComp />
      ) : (
        <CompleteProgress />
      )}
    {/* </Moodal>} */}
    
    </>
  );
};

export default Schedule;
