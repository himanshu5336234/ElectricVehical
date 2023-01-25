import React, { useState } from "react";
import "./Result.scss";
import img from "../../asset/updated_book_test_ride_v3.png";
import Topbar from "../../components/Topbar/Topbar";
import BgImage from "../../components/BgImage/BgImage";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import ani1 from "../../asset/ani1.gif";
import mod from "../../asset/modify-icon.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { fontWeight } from "@mui/system";
import { StepContent } from "@mui/material";
import { useEffect } from "react";
import FeedbackForm from "../../components/Feedback/FeedbackForm/FeedbackForm";
import FeedbackResult from "../../components/Feedback/FeedbackResult/FeedbackResult";

//dummy testride data-----------------
const testRide = {
  date: "July 07,2022",
  time: "10 am - 12 pm",
  showroom: "EV Motors, Prakashnagar, bangalare",
  address:
    "No. 1702, Dr Rajkumar Rd,Prakash Nagar, Bengalore, Karnataka 560021",
  googleMapLink:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824344.085620752!2d76.36350777362237!3d13.929677330601503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148142eb7d27%3A0x8c907f1fceb5f8eb!2sOBEN%20ELECTRIC%20VEHICLE%20PRIVATE%20LIMITED%20%7C%20Electric%20Bike!5e0!3m2!1sen!2sin!4v1659090648730!5m2!1sen!2sin",
};
const title = "My Bookings";
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

const dummyData = {
  booked_date: "15-9-2022",
  booked_time: "12pm - 02pm",
  booking_status: "pending",
  ride_timing: "12pm - 02pm",
  status: "active",
  id: "6319f5217ac3ef71107d7257",
  createdAt: "2022-09-08T13:58:57.170Z",
  updatedAt: "2022-09-08T13:58:57.170Z",
  __v: 0,
  payment: [{ id: 1 }, { id: 2 }],
};

function Result() {
  const navigate = useNavigate();
  const { booking, payment } = useSelector((state) => ({
    booking: state.user.booking,
    payment: state.user.payment,
  }));
  const [modify, setModify] = useState("");
  const location = useLocation();
  const [timer, setTimer] = useState(0);
  const [openFeedBack, setOpenFeedback] = useState(false);
  const [openFeedbackResult, setOpenFeedbackResult] = useState(false);

  useEffect(() => {
    setStepper();
  }, [booking]);

  const setStepper = () => {

    if (
      booking.booking_status == "Test ride taken" &&
      booking.ride_timing != null
    ) {
      setTimer(1);
    } else {
      if (payment?.down_payment_details?.length > 0) {

        if (payment.down_payment_details[0].timing) {
          setTimer(2);
        }
        if (payment.down_payment_details[1].timing) {
          setTimer(4);
        }
      } else {
        setTimer(0);
      }
    }

    // if(dummyData.ride_timing){
    //   if(dummyData.payment){
    //     if(dummyData.payment.length===1){
    //         setTimer(2)
    //     }
    //     if(dummyData.payment.length===2){
    //       setTimer(4)
    //     }
    //   }else{
    //     setTimer(1)
    //   }
    // }else{
    //   setTimer(0)
    // }
    // if(payment?.down_payment_details?.length >0){
    //   if(payment?.down_payment_details[0]?.timing)
    //   {
    //     setTimer(2)
    //   }
    //   if(payment?.down_payment_details[1]?.timing){
    //     setTimer(4)
    //   }
    //   else{
    //     setTimer(1)
    //   }
    // }else{
    //   setTimer(0)
    // }
  };

  const handleFeedback = () => {
    setOpenFeedback(!openFeedBack);
  };


  return (
    <>
      <div
        className={
          openFeedBack || openFeedbackResult
            ? "result-wrapper disable"
            : "result-wrapper"
        }
      >
        <Topbar />
        <BgImage img={img} title={title} />
        <div className="result-container ">
          <span
            style={{
              backgroundColor: "white",
              padding: "16px 0 16px 40px",
              fontWeight: "bold",
            }}
          >
            Ride Status
          </span>
          <div
            style={{ fontFamily: "Red Hat Display !important" }}
            className="stepper-outer"
          >
            <Stepper
              activeStep={timer}
              orientation="vertical"
              className="stepper"
            >
              {timer >= 0 && (
                <Step expanded={true} className="step-inner">
                  <StepLabel>
                    <div className="test-ridebook">
                      <span>Test Ride Booked</span>
                      <div className="result-modify">
                        {/* <BorderColorOutlinedIcon className="result-modify-icon" /> */}
                        <img
                          src={mod}
                          onClick={() =>
                            navigate(`/modifyrides`, {
                              state: {
                                slots: booking?.showroom_id?.slots,
                                selectedSlotTime: booking?.booked_time,
                                showroomId: booking?.showroom_id?._id,
                                date: booking?.booked_date,
                                userid: booking?.userid,
                              },
                            })
                          }
                          className="result-modify-icon"
                        />
                      </div>
                    </div>
                  </StepLabel>
                  <StepContent className="step-content">
                    <div className="result-center">
                      {/* top */}
                      <div className="result-center-top">
                        <div className="result-center-top-date">
                          <div className="result-date">
                            <CalendarTodayOutlinedIcon className="result-calendar-icon" />
                            <label className="result-date-info">
                              {/* {booking.booked_date} */}
                              {`${month.filter(
                                (month, index) =>
                                  index ==
                                  booking?.booked_date?.split("-")[1] - 1
                              )} ${booking?.booked_date?.split("-")[0]},${
                                booking?.booked_date?.split("-")[2]
                              }`}
                            </label>
                          </div>
                          {/* <hr className="hr-line"/> */}
                          <div className="result-time">
                            <AccessTimeOutlinedIcon className="result-time-icon" />
                            <label className="result-time-info">
                              {booking.booked_time}
                            </label>
                          </div>
                        </div>
                        {/* working----- */}
                        <div className="result-center-top-address">
                          <div className="result-wrapper">
                            <RoomOutlinedIcon className="result-icon" />
                            <div className="result-showroom-address-wrapper">
                              <label className="result-showroom">
                                {booking?.showroom_id?.name}
                              </label>
                              <label className="result-address">
                                {booking?.showroom_id?.address?.address_line}
                                {location?.state?.pincode}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* bottom */}
                      <div className="result-center-bottom">
                        <iframe
                          className="googlemap"
                          src={booking?.showroom_id?.map}
                          allowfullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              )}

              {timer >= 1 && (
                <Step expanded={true}>
                  <StepLabel>Test Ride Taken</StepLabel>
                  <StepContent>
                    <span style={{ color: "#787E8C", paddingLeft: "20px" }}>
                      {new Date(booking.ride_timing).toDateString()}
                    </span>
                  </StepContent>
                </Step>
              )}

              {timer >= 2 && (
                <Step expanded={true}>
                  <StepLabel>
                    Down Payment made {payment?.down_payment_details[0]?.amount}
                  </StepLabel>
                  <StepContent>
                    <div className="downpayment-content">
                      <span>{payment?.down_payment_details[0]?.timing}</span>
                      {!(timer >= 3) && (
                        <div className="apply-loan-button">
                          <button>Apply for Loan</button>
                        </div>
                      )}
                    </div>
                  </StepContent>
                </Step>
              )}

              {timer >= 4 && (
                <Step expanded={true}>
                  <StepLabel>
                    2nd Down Payment made{" "}
                    {payment?.down_payment_details[1]?.amount}
                  </StepLabel>
                  <StepContent className="step-content">
                    <div className="result-center">
                      {/* top */}
                      <div className="result-center-top">
                        <div className="result-center-top-date">
                          <div className="result-date-down-payment-bot">
                            <CalendarTodayOutlinedIcon className="result-calendar-icon" />
                            <label className="result-date-info-down-payment">
                              {/* {booking.booked_date} */}
                              Delivery Date -
                              {`${month.filter(
                                (month, index) =>
                                  index ==
                                  payment?.down_payment_details[1]?.deliveryDate.split(
                                    "-"
                                  )[1] -
                                    1
                              )} ${
                                payment?.down_payment_details[1]?.deliveryDate.split(
                                  "-"
                                )[0]
                              },${
                                payment?.down_payment_details[1]?.deliveryDate.split(
                                  "-"
                                )[2]
                              }`}
                            </label>
                          </div>
                        </div>
                        {/* working----- */}
                        <div className="result-center-top-address">
                          <div className="result-wrapper">
                            <RoomOutlinedIcon className="result-icon" />
                            <div className="result-showroom-address-wrapper">
                              <label className="result-showroom">
                                location of showroom - <br></br>
                                {/* {booking?.showroom_id?.name} */}
                              </label>
                              <label className="result-address">
                                {
                                  payment?.down_payment_details[1]
                                    ?.showroomAddress
                                }
                                {/* {location?.state?.pincode} */}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* bottom */}
                      <div className="result-center-bottom">
                        <iframe
                          className="googlemap"
                          src={
                            payment?.down_payment_details[1]
                              ?.showroomMapLocation
                          }
                          allowfullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="downpayment-content-bottom">
                          <div className="apply-loan-button">
                            <button>Applied For Loan</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              )}

              {timer >= 4 && (
                <Step expanded={true}>
                  <StepLabel>FeedBack</StepLabel>
                  <StepContent>
                    <div className="downpayment-content-bottom">
                      <div className="apply-loan-button">
                        <button
                          onClick={handleFeedback}
                          className="feedback-button"
                        >
                          Provide Feedback
                        </button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              )}
            </Stepper>
          </div>

          {/* result-bottom------------- */}
          <div className="result-bottom">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="result-bottom-button"
            >
              <Link to="/" className="link-done">
                Cool !
              </Link>
            </motion.button>
          </div>
        </div>
        <Footer />
      </div>
      <div className="popup">
        <FeedbackForm
          uid={booking?.userid?._id}
          bid={booking?._id}
          openFeedBack={openFeedBack}
          setOpenFeedback={setOpenFeedback}
          openFeedbackResult={openFeedbackResult}
          setOpenFeedbackResult={setOpenFeedbackResult}
        />
        <FeedbackResult
          openFeedbackResult={openFeedbackResult}
          setOpenFeedbackResult={setOpenFeedbackResult}
        />
      </div>
    </>
  );
}

export default Result;
