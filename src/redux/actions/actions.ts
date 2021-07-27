import {
  GET_SELECTED_CHAR_ID,
  FETCH_NEIGHBOURS,
  CLEAR_NEIGHBOURS,
} from "../constants";

export const getSelectedCharId = (id: string) => ({
  type: GET_SELECTED_CHAR_ID,
  payload: id,
});

export const fetchNeighbours = (
  urlWithCharacterList: string | string[] | undefined
) => {
  if (urlWithCharacterList === "") {
    return (dispatch: any) =>
      dispatch({
        type: CLEAR_NEIGHBOURS,
        payload: [],
      });
  } else {
    return async (dispatch: any, getState: any) => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${urlWithCharacterList?.toString()}`
      );
      const charList = await res.json();
      dispatch({
        type: FETCH_NEIGHBOURS,
        payload: charList,
      });
    };
  }
};
