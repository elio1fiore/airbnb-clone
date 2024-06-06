"use client";

import { closeModal, openModal } from "../store/slices/registerModalSlice";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export function useLoginModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.loginModal.isOpen);
  const onOpen = () => dispatch(openModal());
  const onClose = () => dispatch(closeModal());

  return { isOpen, onOpen, onClose };
}
