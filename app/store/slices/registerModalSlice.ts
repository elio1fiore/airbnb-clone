import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const registerModalSlice = createSlice({
  name: "registerModal",
  initialState: { isOpen: false },
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = registerModalSlice.actions;

export default registerModalSlice;
