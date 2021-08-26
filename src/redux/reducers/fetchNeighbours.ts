import { ActionTypes } from "types/types";
import { FETCH_NEIGHBOURS, CLEAR_NEIGHBOURS } from "../constants";

const residentCharacters: string[] = [];

export const fetchNeighboursReducer = (
  state = residentCharacters,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case FETCH_NEIGHBOURS:
      return payload;
    case CLEAR_NEIGHBOURS:
      return payload;
    default:
      return state;
  }
};
