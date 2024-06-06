import { combineReducers } from "@reduxjs/toolkit";
import registerModalSlice from "./registerModalSlice";
import loginModalSlice from "./loginModelSlice";

const rootReducer = combineReducers({
  registerModal: registerModalSlice.reducer,
  loginModal: loginModalSlice.reducer,
});

export default rootReducer;
