import React from "react";
import BgImage from "../../components/BgImage/BgImage";
import Topbar from "../../components/Topbar/Topbar";
import img from "../../asset/book test ride v3.png";
import mod from "../../asset/modify-icon.png";
import CalImg from "../../asset/calendar.svg";
import ClockImg from "../../asset/clock.svg";
import LocationIcon from "../../asset/location.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styleResult.css";
import { useNavigate } from "react-router";

export default function ResultBooked() {
  const navigate = useNavigate();
  const { booking, payment } = useSelector((state) => ({
    booking: state.user.booking,
    payment: state.user.payment,
  }));

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
  const location = useLocation();
  return (
    <div style={{ background: "#fff" }}>
      <Topbar />
      <BgImage img={img} title={title} />
      <div className="register-container-first">
      <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_kgffl5cr.json"
          background="transparent"
          speed="1.3"
          style={{width:"50px",height:"50px"}}
          loop
          autoplay
        ></lottie-player>
        <h1 className="register-container-heading">
        This was fun! 
        </h1>
        <p className="register-container-para">
        A confirmation mail & SMS has been sent to you.<br/>
        Your test ride details are in there.
        </p>
      </div>
      <div className="border-div"></div>
      <div className="register-container-second">
        <div className="register-conatainer-secondChild">
          <h1 className="register-container-second-heading">Your Rorr Ride</h1>
          <h1 className="register-container-second-heading">
            <img
              src={mod}
              onClick={() =>
                navigate(`/modifyRegistered`, {
                  state: {
                    slots: booking?.showroom_id?.slots,
                    selectedSlotTime: booking?.booked_time,
                    showroomId: booking?.showroom_id?._id,
                    date: booking?.booked_date,
                    userid: booking?.userid,
                    // userRegisterd: booked
                  },
                })
              }
              style={{ width: "20px", height: "20px" }}
            />
            Modify Ride
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "76%",
            alignItems: "center",
            paddingBottom: "32px",
          }}
        >
          <p className="register-container-second-para">
            <img src={CalImg} />
            {`${month.filter(
              (month, index) => index == booking?.booked_date?.split("-")[1] - 1
            )} ${booking?.booked_date?.split("-")[0]},${
              booking?.booked_date?.split("-")[2]
            }`}
          </p>
          <p className="register-container-second-para">
            <img src={ClockImg} />
            {booking.booked_time}
          </p>
        </div>
        <div className="register-container-third">
          <h1 className="register-container-third-heading">
            <span style={{ display: "flex" }}>
              <img src={LocationIcon} style={{paddingRight:"8px"}} />
              {booking?.showroom_id?.name}
            </span>
            <h2 className="register-container-address">
              {booking?.showroom_id?.address?.address_line}
              {location?.state?.pincode}
            </h2>
          </h1>
          <iframe
            className="register-mapContainer"
            src={booking?.showroom_id?.map}
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* result-bottom------------- */}
      <div className="register-bottom">
        <button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="register-bottom-button"
        >
          <Link to="/" className="link-done">
            Cool !
          </Link>
        </button>
      </div>
    </div>
  );
}
