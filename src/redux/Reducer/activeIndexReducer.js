const initialState = { activeIndex: 0 };
const activeIndexReducer = (state = initialState, { type, payload }) => {
  if (type == "SET_HEADER") {
    console.log("Inside Active Index reducer");
    const newheader = payload;
    return {
      ...state,
      activeIndex: newheader ,
    };
  } else {
    return state;
  }
};

export default activeIndexReducer;