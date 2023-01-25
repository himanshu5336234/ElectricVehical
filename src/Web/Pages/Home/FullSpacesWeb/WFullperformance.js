import React from "react";
import "./style.css";
import WNavbar from "../../../Components/Navbar/WNavbar";
import WFooter from "../../../Components/Footer/WFooter";
// import Bg2nd from "../../../Assets/FullSpaces/FullSpacesBack2.png";
// import Bg1st from "../../../Assets/FullSpaces/FullSpacesBack1.png";
import Img1 from "../../../../Web/Assets/FullSpaces/wfullper2ndImg.png";
import Img3 from "../../../../Web/Assets/FullSpaces/WfullPer1stImg.png";
import Img2 from "../../../../Web/Assets/FullSpaces/wfull3rdimg.png";
import icon1 from "../../../../Web/Assets/FullSpaces/wfullperIcon1.svg";
import icon2 from "../../../../Web/Assets/FullSpaces/wfullperIcon2.svg";
import icon3 from "../../../../Web/Assets/FullSpaces/wfullperIcon3.svg";
import BackButton from "../../../Components/BackButton/BackButton";
import { useNavigate } from "react-router-dom";
export default function WFullperformance() {
  return (
    <div>
      <div className="w-full-spaces-background2" style={{ display: "flex" }}>
        <div className="w-full-spacesContainerLeft">Performance</div>
        <div
          style={{ width: "50%", padding: "30px" }}
          className="w-full-spacesContainerRight"
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#2F3131",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "10px",
              }}
            >
              {/* <div className="w-fullspesc-right">3-Years Warranty</div> */}
              <div className="w-fullspecIconParent">
                <div className="w-fullspecIcon">
                  <span>Top Speed</span>
                  <img src={icon1} />
                </div>
                <div className="w-fullspecIcon">
                  <span>Range</span>
                  <img src={icon2} />
                </div>
                <div className="w-fullspecIcon">
                  <span>Acceleration</span>
                  <img src={icon3} />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div style={{ backgroundColor: "#2F3131",width:"50%" }} className="br-8 p-16">
                <h2 className="fs-22 white-cl fw-400">
                  FAZZ
                  <br />
                  Charging
                </h2>
                <h4 className="white-cl fs-14 fw-400 op-06">
                  Quick charge
                  <br />
                  in 2hrs
                  <br />
                  (1min./km)
                </h4>
              </div>

              <div style={{ backgroundColor: "#2F3131",width:"50%" }} className="br-8 p-16">
                <h2 className="fs-22 white-cl fw-400">MHX Tech</h2>
                <h4 className="white-cl fs-14 fw-400 op-06">
                  Best-in-
                  <br />
                  class Heat <br />
                  management
                </h4>
              </div>
            </div>

            <div
              style={{
                background: "#2F3131",
                borderRadius: "8px",
                marginTop: "10px",
                height: "100%",
                position: "relative",
              }}
            >
              <img src={Img3} style={{ width: "100%", height: "inherit" }} />
              <div>
                <span
                  style={{
                    color: "#fff",
                    position: "absolute",
                    top: "6%",
                    paddingLeft: "15px",
                    fontSize: "22px",
                  }}
                >
                  <span className="fs-16 op-06 l-h-110">
                    Flood Fighter <br />
                    IP65
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", padding: "10px" }}>
            <div className="w-fullSpaces-conatanerChild1">
              <div
                style={{
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <img
                  src={Img1}
                  style={{ background: "#2F3131", borderRadius: "8px" }}
                />
                <div className="w-fullSpaces-subContainerChild1">
                  <span className="fs-22">
                    Drive <br />
                    Modes
                  </span>
                </div>
              </div>
              <div className="w-fullSpaces-containerChild2">
                <div style={{ color: "#fff", background: "#2F3131" }}>
                  <span className="fs-16 op-06 l-h-110"> ECO</span>
                </div>
                <div style={{ color: "#fff", background: "#2F3131" }}>
                  <span className="fs-16 op-06 l-h-110">City</span>
                </div>
                <div style={{ color: "#fff", background: "#2F3131" }}>
                  <span className="fs-16 op-06 l-h-110">Havoc</span>
                </div>
              </div>
            </div>
            <div
              className="w-fullSpaces-containerChild3"
              style={{  }}
            >
              <img src={Img2} style={{ width: "100%",background: "#2F3131",borderRadius:"8px" }} />
              <div
                style={{ color: "#fff", bottom: "-14%" }}
                className="w-fullSpaces-subContainerChild3"
              >
                <span className="fs-22">330Nm Torque</span>
                <br />
                <span className="fs-16 op-06 l-h-110">on wheel </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
