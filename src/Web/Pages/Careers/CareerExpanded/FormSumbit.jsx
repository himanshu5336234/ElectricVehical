import React, { useState } from "react";
import WFooter from "../../../Components/Footer/WFooter";
import WNavbar from "../../../Components/Navbar/WNavbar";
import "./FormSumbit.scss";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import tick from "../../../Assets/ContactUs/check_circle.svg";

export default function FormSumbit() {
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    src: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values, " values");
  };

  const  handleClear=() =>{
    setFile({
       
    });
    setValues({...values,myfile:""})
  }
console.log({file},{values})
  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    setFile({ ["file"]: event.target.files[0] });
    console.log(event.target.files[0], "filesssssssss");
  }
  console.log(file?.file?.name, "stateeeee");

  return (
    <>
      <WNavbar />
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackButton />
      </div>
      <div className="w-parent-div">
        <div className="w-form">
          <form onSubmit={handleSubmit}>
            <h2>Sumbit Job Application</h2>
            <div className="w-input-boxes">
              <input
                placeholder="First Name"
                name="firstName"
                type="text"
                required
                className="input-1"
                value={values.firstName}
                onChange={handleChange}
              />
              <input
                placeholder="Last Name"
                name="lastName"
                type="text"
                required
                className="input-1"
                value={values.lastName}
                onChange={handleChange}
              />
              <input
                placeholder="Email ID"
                name="email"
                type="email"
                required
                className="input-1"
                value={values.email}
                onChange={handleChange}
              />
              <div className="w-n-input">
                <label>+91</label>
                <hr className="w-line" />
                <input
                  name="phone"
                  type="tel"
                  autoComplete="off"
                  placeholder="Phone Number"
                  maxLength={10}
                  className="input-n"
                  onChange={handleChange}
                  value={values.phone}
                />
              </div>
            </div>
            <div className="w-upload-div">
              <h3>Upload Your Resume</h3>
              <p>(Max size 10mb, upload only PDF, Doc & txt files)</p>
            </div>
            <div className="w-file-upload-parent">
              {file?.file ? (
                <>
                  <div className="w-file-uploadafter" onClick={handleClear}>
                    <button className="w-btn-after">
                      <img src={tick} alt="tick" />
                      <label>{file?.file?.name}</label>
                      <ClearIcon
                        sx={{
                          display: "flex",
                          position: "absolute",
                          right: "10px",
                        }}
                      />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ position: "relative" }}>
                    <input
                      className="w-custom-input"
                      type="file"
                      name="src"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx,.xml,.txt"
                      value={values?.src}
                    />
                    <AddIcon
                      sx={{ position: "absolute", top: "13px", right: "10px" }}
                    />
                  </div>
                </>
              )}
            </div>

            <button className="btn-sumbit" type="submit">
              SUMBIT APPLICATION
            </button>
          </form>
        </div>
      </div>
      <WFooter />
    </>
  );
}
