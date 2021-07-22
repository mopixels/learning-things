import { ActionTypes } from "types/types";
import {
  GET_SELECTED_CHAR_ID,
  FETCH_RESIDENT_CHARACTERS,
  // CLEAR_RESIDENT_CHARACTERS,
} from "../constants";

export const getSelectedCharIdReducer = (state = "", action: ActionTypes) => {
  switch (action.type) {
    case GET_SELECTED_CHAR_ID:
      return action.payload;
    default:
      return state;
  }
};

const residentCharacters: string[] = [];

export const fetchResidentCharactersReducer = (
  state = residentCharacters,
  action: ActionTypes
) => {
  switch (action.type) {
    case FETCH_RESIDENT_CHARACTERS:
      return action.payload;
    // case CLEAR_RESIDENT_CHARACTERS:
    //   return [];
    default:
      return state;
  }
};
