import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Card from "./Card";

const Neighbours = styled.div`
  max-width: 75%;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 200px));
  grid-gap: 16px;
`;

const NeighbourResidents = ({ location }) => {
  const fetchLocationResidents = async () => {
    const res = await fetch(`${location}`);
    return res.json();
  };

  const { data } = useQuery(["residents", location], () =>
    fetchLocationResidents(location)
  );

  const fetchResidentCharacters = async (urlWithCharacterList) => {
    const res = await fetch(`${urlWithCharacterList}`);
    return res.json();
  };

  const allResidents = data?.residents.map((resident) =>
    resident.substr(resident.lastIndexOf("/") + 1)
  );

  const characterList = useQuery(["characters", allResidents], () =>
    fetchResidentCharacters(
      `https://rickandmortyapi.com/api/character/${allResidents.toString()}`
    )
  );

  if (!location) {
    return <span>Sorry, characters location is unknown</span>;
  } else if (characterList.status === "error") {
    return <div>Error: sorry something went wrong please try again later</div>;
  } else if (characterList.status === "loading") {
    return <div>Loading...</div>;
  } else if (characterList?.data?.length === undefined) {
    return (
      <Neighbours>
        <Card key={characterList.data.name} data={characterList.data} />;
      </Neighbours>
    );
  } else {
    return (
      <Neighbours>
        {characterList?.data.map((character) => (
          <Card key={character.name} data={character} />
        ))}
      </Neighbours>
    );
  }
};

export default NeighbourResidents;
