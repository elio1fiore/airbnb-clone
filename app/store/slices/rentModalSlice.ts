import { createSlice } from "@reduxjs/toolkit";

const rentModalSlice = createSlice({
  name: "rentModal",
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

export const { openModal, closeModal } = rentModalSlice.actions;

export default rentModalSlice;
