const initialState = { swiperInstance: {} };
const swiperInstanceReducer = (state = initialState, { type, payload }) => {
    if (type == "SET_SWIPER_INSTANCE") {
      const newheader = payload;
      console.log(typeof payload);
      return {
        ...state,
        swiperInstance: {} ,
      };
    } else {
      return state;
    }
  };
export default swiperInstanceReducer;
