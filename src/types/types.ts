export type CharacterProps = {
  created: string;
  episode: string[];
  gender: string;
  id: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: "";
  url: string;
  results: object;
};

export type PageProps = {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | number;
  };
  results: CharacterProps[];
};

interface getSelectedCharId {
  type: "GET_SELECTED_CHAR_ID";
  payload: string;
}
interface fetchResidentCharacters {
  type: "FETCH_RESIDENT_CHARACTERS" | "CLEAR_RESIDENT_CHARACTERS";
  payload: string[] | undefined;
}

export type ActionTypes = getSelectedCharId | fetchResidentCharacters;
