import { createSlice } from "@reduxjs/toolkit";

const searchModalSlice = createSlice({
  name: "searchModal",
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

export const { openModal, closeModal } = searchModalSlice.actions;

export default searchModalSlice;
