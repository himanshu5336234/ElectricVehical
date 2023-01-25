import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import useOnClickOutside from "../ClickOutsider/clickOutsider";
import DroIcon from "../../../asset/Dropdown.svg";

const SortBy = styled.div`
  width: ${(props) => (props.width ? props.width : "228px")};
  height: 34px;
  background: ${(props) => (props.color ? props.color : "#111318")};
  /* border-radius: 10px; */
  opacity: 1;
  text-align: left;
  font: normal normal 600 14px/70px Barlow;
  display: flex;
  justify-content: start;
  color: #fff !important;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : "0px 20px 0px 20px")};
  @media (max-width: 767px) {
    width: ${(props) => (props.width ? props.width : "343px")};
    margin: 0px 0px 0px 0px;
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0px 20px 0px 0px;
  }
`;

const DropDownContainer = styled.div`
  width: 30px;
  align-self: flex-start;
  z-index: 2;
  @media (max-width: 767px) {
    ${"" /* width: 343px; */}
  }
`;
const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 9px;
  color: #9990aa;
`;
const DropDownList = styled.div`
  ${"" /* padding-left: 1em; */}
  background: #111318;
  ${"" /* border: 2px solid #e5e5e5; */}
  box-sizing: border-box;
  font: normal normal medium 14px/17px Barlow;
  // float: right;
  overflow: overlay;
  margin-top: 32px;
  line-height: 36px;
  /* border-radius: 10px; */
  /* padding-left: 32px; */
  height: 100vh;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  // font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  ${"" /* height:45px; */}
  padding: 10px 0px;
  margin: 0 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &:hover {
    ${"" /* color: gray; */}
    /* background-color: #26224D; */
    width: 158px;
    border-radius: 12px;
  }
`;
const SearchIcon = styled.img`
  margin-right: 0.625rem;
  width: 14px;
  height: 14px;
`;
const SelectOption = styled.option`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
const A = styled.a`
  color: #fff;
  text-decoration: none;
`;

const DropDown = ({
  options,
  color,
  name,
  icon,
  width,
  handleInput,
  margin,
  stateScroll,
  setStateScroll,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(stateScroll);
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setStateScroll(value);
    setIsOpen(false);
    handleInput && handleInput(value);
  };
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <>
      <SortBy width={width} ref={ref} margin={margin} onClick={toggling}>
        {/* <SearchIcon src="/images/sorting.svg" /> */}
        {/* {icon} */}
        <SelectOption>{stateScroll}</SelectOption>
        <DropDownContainer>
          <ArrowIcon src={DroIcon} style={{ width: "14px" }}></ArrowIcon>
          {isOpen && (
            <DropDownList>
              {options.map((option, idx) => (
                <ListItem key={Math.random()}>
                  {/* {option} */}
                  {idx === 8 ? (
                    <A href={"#" + option.replace(/ /g, "")}>{option}</A>
                  ) : (
                    <A href={"#" + option}>{option}</A>
                  )}
                </ListItem>
              ))}
            </DropDownList>
          )}
        </DropDownContainer>
      </SortBy>
    </>
  );
};

export default DropDown;
