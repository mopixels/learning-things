import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { CharacterProps } from "types/types";
import Card from "./Card";

const Neighbours = styled.div`
  max-width: 75%;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 200px));
  grid-gap: 16px;
`;

type NeighbourResidentsProps = {
  locationUrl: string;
};

const NeighbourResidents: React.FC<NeighbourResidentsProps> = ({
  locationUrl,
}) => {
  const fetchLocationResidents = async (location: string) => {
    const res = await fetch(`${location}`);
    return res.json();
  };

  const { data } = useQuery(["residents", locationUrl], () =>
    fetchLocationResidents(locationUrl)
  );

  const fetchResidentCharacters = async (urlWithCharacterList: string) => {
    const res = await fetch(`${urlWithCharacterList}`);
    return res.json();
  };

  const allResidents = data?.residents.map((resident: string) =>
    resident.substr(resident.lastIndexOf("/") + 1)
  );

  const characterList = useQuery(["characters", allResidents], () =>
    fetchResidentCharacters(
      `https://rickandmortyapi.com/api/character/${allResidents.toString()}`
    )
  );

  if (!locationUrl) {
    return <span>Sorry, characters location is unknown</span>;
  } else if (characterList.status === "error") {
    return <div>Error: sorry something went wrong please try again later</div>;
  } else if (characterList.status === "loading") {
    return <div>Loading...</div>;
  } else if (characterList?.data?.length === undefined) {
    return (
      <Neighbours>
        <Card key={characterList.data.name} character={characterList.data} />;
      </Neighbours>
    );
  } else {
    return (
      <Neighbours>
        {characterList?.data.map((character: CharacterProps, i: number) => (
          <Card key={character.name + i} character={character} />
        ))}
      </Neighbours>
    );
  }
};

export default NeighbourResidents;
