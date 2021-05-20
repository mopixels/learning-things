import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import { fetchResidentCharacters } from "redux/actions/actions";
import styled from "styled-components";
import { CharacterProps } from "types/types";
import { fetchCurrentLocationData } from "utils/api";
import Card from "./Card";
import { LoadingMessage } from "./LoadingMessage";

const Neighbors = styled.div`
  max-width: 75%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 250px));
  grid-gap: 16px;
`;

type NeighborResidentsProps = {
  locationUrl: string;
};

const NeighborResidents: React.FC<NeighborResidentsProps> = ({
  locationUrl,
}) => {
  const dispatch = useDispatch();

  const { data } = useQuery(["residents", locationUrl], () =>
    fetchCurrentLocationData(locationUrl)
  );

  const allResidents = data?.residents.map((resident: string) =>
    resident.substr(resident.lastIndexOf("/") + 1)
  );

  const characterList = useSelector(
    (state: RootStateOrAny) => state.fetchResidentCharactersReducer
  );

  useEffect(() => {
    !!allResidents &&
      characterList.length < 1 &&
      dispatch(fetchResidentCharacters(allResidents));
    return () => {};
  }, [allResidents, characterList, dispatch]);

  if (!locationUrl) {
    return <span>Sorry, characters location is unknown</span>;
  } else if (allResidents === undefined) {
    return <div>Error: sorry something went wrong please try again later</div>;
  } else if (characterList === undefined || characterList?.length < 1) {
    return <LoadingMessage />;
  } else if (characterList?.length === undefined) {
    return (
      <Neighbors>
        <Card key={characterList.name} character={characterList} />
      </Neighbors>
    );
  } else {
    return (
      <Neighbors>
        {characterList?.map((character: CharacterProps, i: number) => (
          <Card key={character.name + i} character={character} />
        ))}
      </Neighbors>
    );
  }
};

export default NeighborResidents;
