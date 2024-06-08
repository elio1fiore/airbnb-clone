"use client";

import { closeModal, openModal } from "../store/slices/registerModalSlice";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export function useRentModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.rentModal.isOpen);
  const onOpen = () => dispatch(openModal());
  const onClose = () => dispatch(closeModal());

  return { isOpen, onOpen, onClose };
}
