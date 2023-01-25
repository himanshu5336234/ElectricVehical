import React, { useEffect, useState } from "react";
import "./savingcalcweb.scss";
import Footer from "../../Components/Footer/WFooter";
import { Autocomplete, MenuItem, Select, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../../ServiceRequest";
import leftSavingImg from "../../Assets/savingCalc/SavingImgWeb.png";
import WComponentNavbar from "../../Components/Navbar/WComponentNavbar";

function SavingCalculator() {
  const navigate = useNavigate();
  const [selectCity, setSelectCity] = useState("");
  const [dailyTravel, setDailyTravel] = useState();
  const [errorField, setErrorField] = useState({});
  const [allCity, setAllCity] = useState();
  let availableState = [];

  useEffect(() => {
    const validateInput = (city, km) => {
      const error = {};

      if (!city) {
        error.selectCity = "select city";
      }

      if (!km) {
        error.dailyTravel = "provide daily ride";
      } else if (km.length > 3) {
        error.dailyTravel = "invalid range";
      }

      return error;
    };

    setErrorField(validateInput(selectCity, dailyTravel));
  }, [selectCity, dailyTravel]);

  //this will call saving-cal api wth state and range given by user
  const handleChange = async () => {
    try {
      let res = await publicRequest.post("/user/calculate-savings", {
        distance: dailyTravel,
        state: selectCity,
      });
      navigate("/savingRes", {
        state: {
          dailyTravel: dailyTravel,
          city: selectCity,
          avgTravel: res.data.data,
        },
      });
    } catch (err) {
      alert(`${selectCity} Api on process...`);
    }
  };

  //this will fetch all the city from db
  useEffect(() => {
    const fetchAvailableCity = async () => {
      try {
        const res = await publicRequest.get("user/get-cities");
        setAllCity(res.data.data.cities);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAvailableCity();
  }, []);

  //this will filter state which are available for oben
  allCity?.filter((data) => {
    if (data.status === "available") {
      availableState.push({ value: data.state, label: data.state });
    }
  });
  let jsonObject = availableState.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueState = Array.from(uniqueSet).map(JSON.parse);
  return (
    <>
      <WComponentNavbar />
      <div className="w-saving-body">
        <div className="w-leftSaving-conatiner">
          <img src={leftSavingImg} />
        </div>
        <div className="w-saving-container">
          <div className="w-saving-top">
            <div className="w-saving-cal-title">
              <span>Saving Calculator</span>
            </div>

            <div className="w-select-state-wrapper">
              {/* <TextField
                className="w-select-city"
                id="Nationality"
                placeholder="Select City"
                select
                variant="outlined"
                onChange={(e) => setSelectCity(e.target.value)}
              >
                {uniqueState?.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.value}
                  </MenuItem>
                ))}
              </TextField> */}
              <Select
                className="w-select-city"
                id="Nationality"
                name="Nationality"
                displayEmpty
                value={selectCity}
                onChange={(e) => setSelectCity(e.target.value)}
                renderValue={
                  selectCity != "" ? undefined : () => <span>Select City</span>
                }
              >
                {uniqueState?.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.value}
                  </MenuItem>
                ))}
              </Select>
              {/* <Autocomplete
          className="select-city"
          disablePortal
          // onFocus={inputFocus}
          onChange={(e)=>setSelectCity(e.target.value)}
          name="city"
          id="combo-box-demo"
          options={uniqueState}
          
          // value={bookingDetails.city}
          getOptionLabel={(x)=>`${x?.value}`}
          sx={{ width: 300 }}
          renderOption={(props, option) => {
            const {  value,label } = option;
            return (
              <span {...props} style={{ backgroundColor: "#191C24" , color:"white"}}>
                {`${value}`}
              </span>
            );
          }}
          renderInput={(params) => <TextField className='tf'  {...params}  placeholder="Select City"  />}
        /> */}
            </div>

            <div className="w-saving-km-wraper">
              <label>
                <input
                  onChange={(e) => setDailyTravel(e.target.value)}
                  type="text"
                  placeholder="Daily Avg. Travel Distance"
                />
                <span>KM</span>
              </label>
            </div>
          </div>
          <div className="w-saving-bottom">
            <motion.button
              // whileHover={{
              //   scale:1.1
              // }}
              // whileTap={{
              //   scale:0.9
              // }}
              disabled={!(Object.keys(errorField) == 0)}
              onClick={handleChange}
              className={
                Object.keys(errorField) == 0
                  ? "w-saving-button"
                  : "w-saving-button disable"
              }
            >
              CALCULATE SAVINGS
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SavingCalculator;
