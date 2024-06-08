import { combineReducers } from "@reduxjs/toolkit";
import registerModalSlice from "./registerModalSlice";
import loginModalSlice from "./loginModelSlice";
import rentModalSlice from "./rentModalSlice";

const rootReducer = combineReducers({
  registerModal: registerModalSlice.reducer,
  loginModal: loginModalSlice.reducer,
  rentModal: rentModalSlice.reducer,
});

export default rootReducer;
