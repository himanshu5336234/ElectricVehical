import React, { useEffect, useState } from "react";
import "./Booking.scss";
import CustomSwitch from "../../../components/Switch/CustomSwitch";
import { useSelector } from "react-redux";
import { publicRequest } from "../../../ServiceRequest";
import { motion } from "framer-motion";

import Loading from "../../../components/Loading/Loading";
import whatsapp from "../../../asset/icon/whatsapp.png";
import VerifyOtp from "../../Components/Wverify-Otp/WverifyOtp";
import { Autocomplete, MenuItem, TextField } from "@mui/material";
import WFooter from "../../Components/Footer/WFooter";
import BookingLeftimg from "../../Components/BookingLefImg/BookingLeftimg";
import WComponentNavbar from "../../Components/Navbar/WComponentNavbar";
export default function WBooking() {
  //all states-----------------------------------
  const [bookingDetails, setBookingDetails] = useState({
    country_code: "91+",
  });
  const [haveWhatsApp, setHaveWhatApp] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [errorField, setErrorField] = useState({});
  const [allCity, setAllCity] = useState(["a", "b"]);
  const [isloading, setIsLoading] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [whatsappFocus, setWhatsappFocus] = useState(false);

  //checking for user information if user try to come back to this page

  const userInfo = useSelector((state) => state.user.users);

  useEffect(() => {
    if (userInfo.length == 0) {
      console.log("no user");
    } else {
      console.log(typeof userInfo?.phone?.toString());
      setBookingDetails((prev) => {
        return {
          country_code: userInfo?.country_code,
          name: userInfo?.name,
          email: userInfo?.email,
          // cityAvailability: "yes",
          city: userInfo?.city,
          phone: `"${userInfo.phone}"`,
          whatsapp: userInfo?.whatsapp?.toString(),
          ...userInfo,
        };
      });
      console.log(userInfo);
      console.log(bookingDetails);
    }
  }, []);

  //all function and useEffect----------------------------------

  //1)useEffect resposible for getting available city for ObenEV and all city all over india
  useEffect(() => {
    const fetchAvailableCity = async () => {
      try {
        //for available city api call
        // const resAC= await publicRequest.get("cities?type=available")
        // setAvailableCity(resAC.data.data[0].cities)

        //for all city api call
        const res = await publicRequest.get("user/get-cities");
        setAllCity(res.data.data.cities);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAvailableCity();
  }, []);

  // 2)function to store user input
  const handleInput = (e) => {
    setBookingDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // 3)validation checking--------------------
  useEffect(() => {
    const validate = (info) => {
      const error = {};
      const regex = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,3}$/;
      //name checking..........
      if (!info.name) {
        error.name = "Name Required";
      } else if (info.name.length <= 3) {
        error.name = "must be 4 char long";
      }

      //email checking.............
      if (!info.email) {
        error.email = "Email Required";
      } else if (!regex.test(info?.email)) {
        error.email = "Email not Valid";
      }
      //city checking..............
      //phone checking.............
      if (!info.phone) {
        error.phone = "Phone number is Required";
      } else if (info?.phone?.length !== 10) {
        console.log("problem hai ");
        console.log(info?.phone?.length);
        error.phone = "phone number should be 10 digit";
      }

      //whatsapp number
      if (haveWhatsApp) {
        if (!info.whatsapp) {
          error.whatsapp = "whatsapp number is required";
        } else if (info?.whatsapp?.length !== 10) {
          error.whatsapp = "phone number should be 10 digit";
        }
      }

      //city

      if (!info.city) {
        error.city = "select city";
      }

      return error;
    };

    setErrorField(validate(bookingDetails));
  }, [bookingDetails, haveWhatsApp]);

  //4)function run when user click on generate otp
  //task1-booking information will be send ----------api-/user/register ---compleated
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await publicRequest.post("user/register", bookingDetails);
      if (res.data.error) {
        alert(res.data.message);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setOpenOtp(!openOtp);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const inputFocus = (e) => {
    if (e.target.name == "name") {
      setNameFocus(true);
    }
    if (e.target.name == "email") {
      setEmailFocus(true);
    }
    if (e.target.name == "phone") {
      setPhoneFocus(true);
    }
    if (e.target.name == "whatsapp") {
      setWhatsappFocus(true);
    }
    if (e.target.placeholder == "Select City") {
      setCityFocus(true);
    }
  };
  // to prevent to take decimal values & special characters
  const handleDecimals = (event) => {
    let regex = new RegExp("[a-zA-Z,.,/,`,~,!,@,#,$,%,^,&,*,(,)-,+,=,<,>,?]");
    {
      if (event.key !== "Backspace") {
        if (regex.test(event.key) || isNaN(event.target.value)) {
          event.preventDefault();
        }
      }
    }
  };

  return (
    <>
      <WComponentNavbar />
      <div
        className={openOtp ? "w-booking-wrapper disable" : "w-booking-wrapper"}
      >
        {/* <div className="w-booking-leftContainer ">
          <img src={BikeImg} className="w-booking-img" />
        </div> */}
        <BookingLeftimg />
        <div className="w-booking-RightContainer">
          {/* booking-bottom-ui--------------------------------- */}
          <div className="w-book-bottom">
            {/* all user input field */}
            <div className="w-book-bottom-top">
              <div className="w-bottom-top-label">
                <label>Some basics to start.</label>
              </div>
              {/* Name input */}
              <div
                className={
                  nameFocus && errorField.name
                    ? "w-bottom-top-input error"
                    : "w-bottom-top-input"
                }
              >
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Name"
                  name="name"
                  onFocus={inputFocus}
                  value={bookingDetails.name}
                  onChange={handleInput}
                />
              </div>
              {/* Email input */}
              <div
                className={
                  emailFocus && errorField.email
                    ? "w-bottom-top-input error"
                    : "w-bottom-top-input"
                }
              >
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                  name="email"
                  value={bookingDetails.email}
                  onFocus={inputFocus}
                  onChange={handleInput}
                />
              </div>
              {/* City input */}
              <div
                className={
                  cityFocus && errorField.city
                    ? "w-bottom-top-select error"
                    : "w-bottom-top-select"
                }
              >
                <Autocomplete
                  className="w-select-city"
                  disablePortal
                  onFocus={inputFocus}
                  onChange={(event, newValue) => {
                    // setCountry(newValue)
                    setBookingDetails({
                      ...bookingDetails,
                      cityAvailability: newValue?.status ? "yes" : "no",
                      city: newValue?.name,
                    });
                  }}
                  name="city"
                  id="combo-box-demo"
                  options={allCity}
                  // value={bookingDetails.city}
                  getOptionLabel={(x) => `${x?.name},${x?.state}`}
                  sx={{ width: 300 }}
                  renderOption={(props, option) => {
                    const { name, state } = option;
                    return (
                      <span
                        {...props}
                        style={{ backgroundColor: "#191C24", color: "white" }}
                      >
                        {`${name},${state}`}
                      </span>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      className="tf"
                      {...params}
                      placeholder="Select City"
                    />
                  )}
                />
              </div>
              {/* Phone input */}
              <div
                className={
                  phoneFocus && errorField.phone
                    ? "w-bottom-top-input error"
                    : "w-bottom-top-input"
                }
              >
                <label>+91</label>
                <hr className="w-book-hr-line" />
                <input
                  type="tel"
                  value={bookingDetails.phone}
                  onKeyDown={(event) => {
                    handleDecimals(event);
                  }}
                  autoComplete="off"
                  onFocus={inputFocus}
                  placeholder="Phone Number"
                  maxLength={10}
                  name="phone"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="w-book-bottom-center">
              <div className="w-book-bottom-center-top">
                <div className="w-whatsapp-text-container">
                  <CustomSwitch
                    className="w-toggal"
                    setHaveWhatApp={setHaveWhatApp}
                    haveWhatsApp={haveWhatsApp}
                  />
                  <label className="w-whatsapp-text">
                    I have different WhatsApp no.
                  </label>
                </div>
              </div>
              <motion.div
                animate={{
                  x: haveWhatsApp ? "0vw" : "-100vw",
                  opacity: 1,
                }}
                initial={{
                  // x:"-100vw",
                  opacity: 0.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                }}
                className="w-book-bottom-center-bottom"
              >
                <label
                  className={
                    whatsappFocus && errorField.whatsapp
                      ? "w-whatsapp-input error"
                      : "w-whatsapp-input"
                  }
                >
                  <label className="w-country-code">+91</label>
                  <hr className="w-book-hr-line" />
                  <input
                    value={bookingDetails.whatsapp}
                    type="tel"
                    onKeyDown={(event) => {
                      handleDecimals(event);
                    }}
                    maxLength={10}
                    autoComplete="off"
                    placeholder="WhatsApp No."
                    onFocus={inputFocus}
                    name="whatsapp"
                    onChange={handleInput}
                  />
                  <label className="w-whatsapp-container">
                    <img src={whatsapp} />
                  </label>
                </label>
              </motion.div>
            </div>

            <div className="w-book-bottom-bottom">
              <motion.button
                // whileHover={{
                //   scale:1
                // }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={handleSubmit}
                disabled={!(Object.keys(errorField) == 0)}
                className={
                  Object.keys(errorField) == 0
                    ? "w-book-bottom-button"
                    : "w-book-bottom-button disable"
                }
              >
                {isloading ? <Loading /> : "GENERATE OTP"}
              </motion.button>
              <span className="w-book-bottom-text">We’ll be in touch via email, WhatsApp, SMS or phone call. But we’ll never spam you.
              Click “Continue” and allow us to give you the best test ride experience. Ever. 
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="popup">
        <VerifyOtp
          openOtp={openOtp}
          setOpenOtp={setOpenOtp}
          bookingDetails={bookingDetails}
        />
      </div>
      <WFooter />
    </>
  );
}