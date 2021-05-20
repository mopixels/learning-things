import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "../../components/Card";

const character = {
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1",
};

let documentBody: RenderResult;
describe("<Card />", () => {
  beforeEach(() => {
    documentBody = render(
      <Router>
        <Card character={character} />
      </Router>
    );
  });

  test("<Card /> should contain text Race: Human", () => {
    expect(documentBody.getByText("Race: Human")).toBeInTheDocument();
  });
});
