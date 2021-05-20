import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import NeighbourResidents from "../components/NeighbourResidents";
import { Context } from "../Context";

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
  const context = React.useContext(Context);
  const id = context.selectedCharId || localStorage.getItem("id");

  const fetchCurrentCharacter = async (id: string | number | null) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return res.json();
  };

  const { data, status } = useQuery(["characters", id], () =>
    fetchCurrentCharacter(id)
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
    return <div>Loading...</div>;
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
          {name} is from {origin.name}
        </p>
        <p>
          {currentCharacterGender} is {species} and currently {status}
        </p>
        <p>Other {location.name} residents are:</p>
        <NeighbourResidents locationUrl={location.url} />
      </Section>
    );
  }
};

export default CharacterPage;
