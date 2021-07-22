import { combineReducers } from "redux";
import {
  getSelectedCharIdReducer,
  fetchResidentCharactersReducer,
} from "./reducers";

export default combineReducers({
  getSelectedCharIdReducer,
  fetchResidentCharactersReducer,
});
