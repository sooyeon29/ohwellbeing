import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

/*reducer toolkit Slice.reducer
 */
import ohsik from "../modules/ohsikSlice";
import dadat from "../modules/dadatSlice";
import ohsiks from "../modules/ohsiksSlice";

// 내가 만든 리듀서를 넣어준다
const store = configureStore({
  reducer: {
    ohsik: ohsik,
    ohsiks: ohsiks,
    dadat: dadat,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
