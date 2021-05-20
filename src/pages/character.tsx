import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import NeighborResidents from "../components/NeighborResidents";
import { fetchSelectedCharacter } from "utils/api";
import { RootStateOrAny, useSelector } from "react-redux";
import { LoadingMessage } from "components/LoadingMessage";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 64px;
`;

const StyledLink = styled(Link)`
  margin-top: 32px;
`;

const CharacterPage: React.FC = () => {
  const selectedCharId = useSelector(
    (state: RootStateOrAny) => state.getSelectedCharIdReducer
  );
  const id: string = selectedCharId || localStorage.getItem("id")!;

  const { data, status } = useQuery(["characters", id], () =>
    fetchSelectedCharacter(id)
  );

  useEffect(() => {
    localStorage.setItem("id", id);
    return () => {
      localStorage.clear();
    };
  }, [id]);

  if (status === "error") {
    return <div>Error: sorry something went wrong please try again later</div>;
  } else if (status === "loading") {
    return <LoadingMessage />;
  } else {
    const { image, name, origin, gender, species, status, location } = data;
    const currentCharacterGender =
      gender === "Male" ? "He" : gender === "Female" ? "She" : "It";
    return (
      <Section>
        <StyledLink to="/">Homepage &rarr;</StyledLink>
        <h1>Well hello there, this is {name}'s profile !</h1>
        <img src={image} alt="Character" />
        <p>
          {name} is from {origin?.name}
        </p>
        <p>
          {currentCharacterGender} is {species} and currently {status}
        </p>
        <p>Other {location?.name} residents are:</p>
        <NeighborResidents locationUrl={location?.url} />
      </Section>
    );
  }
};

export default CharacterPage;
