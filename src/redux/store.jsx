import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import activeIndexReducer from "./Reducer/activeIndexReducer";
import swiperInstanceReducer from "./Reducer/swiperInstanceReducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    activeIndex: activeIndexReducer,
    swiperInstance: swiperInstanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
