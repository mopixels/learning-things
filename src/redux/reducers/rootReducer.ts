import { combineReducers } from "redux";
import { fetchNeighboursReducer } from "./fetchNeighbours";
import { getSelectedCharIdReducer } from "./getSelectedCharId";

export default combineReducers({
  selectedCharId: getSelectedCharIdReducer,
  neighbours: fetchNeighboursReducer,
});
