import React,{useState} from "react";
import mod from "../../../asset/modify-icon.png";
import CalImg from "../../../asset/calendar.svg";
import ClockImg from "../../../asset/clock.svg";
import LocationIcon from "../../../asset/location.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import WNavbar from "../../Components/Navbar/WNavbar";
import LeftImg from "../../Assets/Booking/myBooking.png";
import "./styleBooked.css";
import Modal from "../../Components/Modal/Moodal";
import WebModifyBooked from "../WModifyRides/wModifyBookedRides";
import { motion } from "framer-motion";

export default function WRegesterdResult() {
  const navigate = useNavigate();
  const { booking, payment } = useSelector((state) => ({
    booking: state.user.booking,
    payment: state.user.payment,
  }));
  const [modalState, setModalState] = useState(false)

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
  const location = useLocation();

  return (
    <>
    <div className="main-conatiner">
      <WNavbar />

      <div style={{ display: "flex", paddingTop: "10vh", background: "#fff" }}>
        <div className="left-Container">
          <img src={LeftImg} />
        </div>
        <div className="right-Container">
          <h1 className="right-Container-heading">This was fun!</h1>
          <div className="right-Container-first-heading">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_kgffl5cr.json"
              background="transparent"
              speed="1.3"
              style={{ width: "50px", height: "50px" }}
              loop
              autoplay
            ></lottie-player>
            <div className="right-Container-secondHeading">
              <h3>A confirmation mail & SMS has been sent to you.<br/>
                Your test ridedetails are in there.</h3>
              {/* <p className="right-Container-secondHeading-p">
                A confirmation mail & SMS with ride details has been sent to
                you.
              </p> */}
            </div>
          </div>
          <div className="borderWResult"></div>
          <div className="right-third-Container-main">
            <div className="right-third-Container-first">
              <h1>Your RorrRide</h1>
              <img
                src={mod}
                style={{}}
                onClick={()=>setModalState(true)}
              />
            </div>
            <div className="right-third-Container-second">
              <p style={{ display: "flex", alignItems: "center" }}>
                <img src={CalImg} style={{paddingRight:"8px"}}/>
                {`${month.filter(
                  (month, index) =>
                    index == booking?.booked_date?.split("-")[1] - 1
                )} ${booking?.booked_date?.split("-")[0]},${
                  booking?.booked_date?.split("-")[2]
                }`}
              </p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <img src={ClockImg}  style={{paddingRight:"8px"}}/>
                {booking.booked_time}
              </p>
            </div>
            <div className="right-third-Container-third">
              <img src={LocationIcon} style={{ display: "flex",paddingRight:"8px" }} />
              <div>
                <h4 className="right-third-Container-third-heading">
                  {booking?.showroom_id?.name}
                </h4>
                <p className="right-third-Container-third-para">
                  {booking?.showroom_id?.address?.address_line}
                  {location?.state?.pincode}
                </p>
                <iframe
                  className="register-mapContainer"
                  src={booking?.showroom_id?.map}
                  allowfullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* result-bottom------------- */}
        <div className="w-bottomR">
          < motion.button
          whileHover={{
            scale: 0.9
          }}
          whileTap={{
            scale: 1
          }} 
          className="w-result-bottomR-button"><Link to="/" className="w-linkR-cool">Cool !</Link>
          </motion.button>
        </div>
        </div>
        

      </div>
        
    </div>
        {modalState && <Modal closeModal={setModalState}><WebModifyBooked props={booking} closeModal={setModalState}/></Modal>}
</>
  );
}
