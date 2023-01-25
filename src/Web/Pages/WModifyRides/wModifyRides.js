import React, { useEffect, useState } from "react";
// import Topbar from "../../components/Topbar/Topbar";
// import img from "../../asset/book test ride v3.png";
// import backImg from "../../asset/backArrow.png";
// import BgImage from "../../components/BgImage/BgImage";
import styled from "styled-components";
import Calender from "./WmodifyCalender";
import CalImg from "../../../asset/calendar.svg";
import ClockImg from "../../../asset/clock.svg";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../../ServiceRequest";
import { setBooking } from "../../../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {motion} from "framer-motion"


const title = "TEST THE  RORR";

const MainDiv = styled.div``;
const BackgroundDiv = styled.div`
  // height: 100vh;
  display: flex;
  background-color: #f5f5f5;
`;
const Heading = styled.div`
  color: #000;
  padding: 0 0 0 0px;
  font-weight: 600;
  font-size: 20px;
  font-family: Red Hat Display;
`;
const HeadingDiv = styled.div`
  padding: 40px 0px 20px 20px;
  display: flex;
  align-items: center;
`;
const CalenderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ButtonDiv = styled(motion.button)`
cursor: pointer;
  background: #d9dadd;
  color: #ffffff;
  width: 90%;
  padding: 18px 0;
  border: none;
  outline: none;
  margin: 70px 20px;
`;
const SlotDiv = styled.div`
  border: none;
  padding: 7px;
  background-color: #fff;
`;
const HeadingText = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-left: 20px;
  margin-top: 32px;
`;
const SelectSlotDiv = styled.div`
cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  // width: 100%;
  margin: 20px 5px 0;
`;
const SelectSlotDate = styled.div`
cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 70px 20px 0;
`;
const ConfirmDate = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
`;
const ConfirmTime = styled(ConfirmDate)``;

const Div = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const ModifyRide = ({ booking,props,closeModal }) => {
  // console.log("booking",props);
  const location = useLocation();
  const [selectDate, setSelectDate] = useState(false);
  const [modifyDate, setmodifyDate] = useState();

  const [timeSlot, setTimeSlot] = useState();
  const [showdateslot, setshowdateSlot] = useState(props?.date);
  const [show, setShow] = React.useState();
  const [active, setActive] = useState();
  const [availableSlots,setAvailableSlots]=useState()
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.users.token);
  const userId = useSelector((state) => state.user.users._id);
  const dispatch = useDispatch();
  const [fetchDate,setFetchDate]=useState(true)

  const dummySlot = [
    "10am - 12pm","12pm - 02pm","02pm - 04pm","04pm - 06pm","06pm - 08pm"
  ]


// console.log(modifyDate)
// console.log(props?.showroomId)

  React.useEffect(() => {
    // fetchShowroomData();
    if (props?.selectedSlotTime) {
      setTimeSlot(props?.selectedSlotTime);
    }
  }, []);

//this will fetch the slot avilable for given showroom_id
  useEffect(()=>{
    const fetchSlots=async()=>{
      const res = await publicRequest.post("user/get-slots", {
        showroom_id: props?.showroom_id?._id,
      });
      // console.log(res.data?.data)
      res?.data?.data?.map((data)=>{
        if(fetchDate){
          if(data.date===props?.date){
            setAvailableSlots(data?.slots)
          }
          setFetchDate(false)
        }
        if(data.date===modifyDate){
          setAvailableSlots(data?.slots)
          // console.log(data?.slots)
        }
      })
      setShow(res.data.data);

    }

    fetchSlots()

  },[modifyDate])

  const fetchShowroomData = async () => {
    try {
      const modifyRes = await axios.post(
        "https://api.obenev.com/user/reschedule-ride",
        {
          time: timeSlot,
          userid: userId,
          showroom_id: props?.showroom_id?._id,
          date: modifyDate ? modifyDate : props?.date,
        },
        {
          "content-type": "text/json",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(modifyRes.data)
      if(!modifyRes.data.error){
        setShow(modifyRes.data.data);
        dispatch(setBooking(modifyRes.data.data));
        navigate(`/WResult`);
      }else{
        navigate("/page-not-found",{state:modifyRes.data})
      }
      
    } catch (err) {
      // console.log(err);
    }
  };

  const handleClick =()=> {
    closeModal()
    fetchShowroomData()
  } 
  return (
    <>
      <BackgroundDiv>
      <div>

      <HeadingDiv>
          <Heading>Modify Ride</Heading>
        </HeadingDiv>
        <CalenderDiv>
          <Calender
            previousDate={props?.booked_date}
            setSelectDate={setSelectDate}
            setmodifyDate={setmodifyDate}
            setshowdateSlot={setshowdateSlot}
            show={show}
          />
        </CalenderDiv>
      </div>
        <div>
          <HeadingText>Select a slot</HeadingText>

          <>
            <Div>
              {dummySlot?.map((item) => (
                <SelectSlotDiv onClick={!availableSlots?.includes(item) ? console.log("tetsting") : () => setTimeSlot(item)}>
                  <SlotDiv
                    style={{
                      border: timeSlot === item && availableSlots?.includes(item) ? "1px solid #000" : "none",
                      color: availableSlots?.includes(item) ? "#000" :"rgba(17, 19, 24, 0.2)"
                    }}
                  >
                    
                    {item}
                  </SlotDiv>
                </SelectSlotDiv>
              ))}
            </Div>
          </>

          <SelectSlotDate>
            <ConfirmDate>
              <img src={CalImg} />
              {modifyDate ? modifyDate : props?.date}
            </ConfirmDate>
            <ConfirmTime>
              <img src={ClockImg} />
              {timeSlot ? timeSlot : props?.selectedSlotTime}
            </ConfirmTime>
          </SelectSlotDate>
        <ButtonDiv
        whileHover={{
          scale:1
        }}
        
        whileTap={{
          scale:0.9
        }}
          onClick={handleClick}
          style={{ backgroundColor: "#000000" }}
        >
          MODIFY MY RIDE
        </ButtonDiv>
        </div>

        {/* <ButtonDiv disabled={timeSlot}>MODIFY MY RIDE</ButtonDiv> */}
      </BackgroundDiv>
    </>
  );
};

export default ModifyRide;
