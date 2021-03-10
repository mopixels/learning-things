import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatName } from "../utils/formatName";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 64px;
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 128px;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const CharacterPage = ({ data }) => {
  const { character } = useParams();

  const currentCharacter = data.find(
    ({ name }) => formatName(name) === character
  );

  const {
    image,
    name,
    origin,
    gender,
    species,
    status,
    episode,
  } = currentCharacter;

  const currentCharacterGender =
    gender === "Male" ? "He" : gender === "Female" ? "She" : "It";

  return (
    <Section>
      <h1>Well hello there, this is {name}'s profile !</h1>
      <img src={image} alt="Character" />
      <p>
        {name} is from {origin.name}
      </p>
      <p>
        {currentCharacterGender} is {species} and currently {status}
      </p>
      <p>{currentCharacterGender} appeared in these episodes:</p>
      <Flex>
        {episode.map((item) => {
          const episodeNumber = item.slice(-3).replace(/\D/g, "");
          return <a href={item}>{episodeNumber}</a>;
        })}
      </Flex>
      <Link to="/">Go back &rarr;</Link>
    </Section>
  );
};

export default CharacterPage;
