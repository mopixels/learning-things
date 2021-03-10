import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Section = styled.section`
  margin: 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
`;

const HomePage = ({ data }) => {
  return (
    <Section>
      {data.map((character) => (
        <Card key={character.name} data={character} />
      ))}
    </Section>
  );
};

export default HomePage;
