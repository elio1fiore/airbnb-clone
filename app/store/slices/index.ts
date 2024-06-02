import { combineReducers } from "@reduxjs/toolkit";
import registerModalSlice from "./registerModalSlice";

const rootReducer = combineReducers({
  registerModal: registerModalSlice.reducer,
});

export default rootReducer;
