"use client";

import { closeModal, openModal } from "../store/slices/authModalSlice";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

export function useAuthModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.authModal.isOpen);
  const onOpen = () => dispatch(openModal());
  const onClose = () => dispatch(closeModal());

  return { isOpen, onOpen, onClose };
}
