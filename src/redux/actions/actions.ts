import {
  GET_SELECTED_CHAR_ID,
  FETCH_RESIDENT_CHARACTERS,
  CLEAR_RESIDENT_CHARACTERS,
} from "../constants";

export const getSelectedCharId = (id: string) => ({
  type: GET_SELECTED_CHAR_ID,
  payload: id,
});

export const fetchResidentCharacters = (
  urlWithCharacterList: string | string[] | undefined
) => {
  if (urlWithCharacterList === undefined) {
    return (dispatch: any) =>
      dispatch({
        type: CLEAR_RESIDENT_CHARACTERS,
      });
  } else {
    return async (dispatch: any, getState: any) => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${urlWithCharacterList?.toString()}`
      );
      const charList = await res.json();
      console.log(charList);
      dispatch({
        type: FETCH_RESIDENT_CHARACTERS,
        payload: charList,
      });
    };
  }
};
