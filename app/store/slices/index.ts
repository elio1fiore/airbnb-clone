import { combineReducers } from "@reduxjs/toolkit";
import registerModalSlice from "./registerModalSlice";
import loginModalSlice from "./loginModelSlice";
import rentModalSlice from "./rentModalSlice";
import searchModalSlice from "./searchModalSlice";

const rootReducer = combineReducers({
  registerModal: registerModalSlice.reducer,
  loginModal: loginModalSlice.reducer,
  rentModal: rentModalSlice.reducer,
  searchModal: searchModalSlice.reducer,
});

export default rootReducer;
