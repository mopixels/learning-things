import { combineReducers } from 'redux'
import { Neighbours } from './Neighbours'
import { SelectedCharId } from './SelectedCharId'

export default combineReducers({
  SelectedCharId,
  Neighbours
})
