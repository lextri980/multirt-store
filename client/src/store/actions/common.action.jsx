import { CLOSE_MODAL, OPEN_MODAL } from "constants/common";

export const openModal = (data) => ({
  type: OPEN_MODAL,
  payload: data,
});

export const closeModal = (data) => ({
  type: CLOSE_MODAL,
  payload: data,
});
