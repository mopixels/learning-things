import { fetchNeighbourCharacters } from 'utils/api'
import {
  GET_SELECTED_CHAR_ID,
  FETCH_NEIGHBOURS,
  CLEAR_NEIGHBOURS
} from '../constants'

export const getSelectedCharId = (id: string) => ({
  type: GET_SELECTED_CHAR_ID,
  payload: id
})

export const fetchNeighbours = (urlWithCharacterList: string | string[]) => {
  return async (dispatch: any, _getState: any) => {
    const neighbourChars = await fetchNeighbourCharacters(urlWithCharacterList)
    dispatch({
      type: FETCH_NEIGHBOURS,
      payload: neighbourChars
    })
  }
}

export const clearNeighbours = () => {
  return (dispatch: any) =>
    dispatch({
      type: CLEAR_NEIGHBOURS,
      payload: []
    })
}
