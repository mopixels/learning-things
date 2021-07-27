import { ActionTypes } from "types/types";
import { GET_SELECTED_CHAR_ID } from "../constants";

export const getSelectedCharIdReducer = (
  state = "",
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case GET_SELECTED_CHAR_ID:
      return payload;
    default:
      return state;
  }
};
