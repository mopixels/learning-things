import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatName } from "../utils/formatName";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const CardContainer = styled.div`
  cursor: pointer;
  border: 4px solid #477385;
  border-radius: 10px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Card = ({ data: { image, name, origin, species, status } }) => {
  const formatedName = formatName(name);
  return (
    <StyledLink to={`${formatedName}`}>
      <CardContainer>
        <Image src={image} alt="Character" />
        <p>Name: {name}</p>
        <p>Origin: {origin.name}</p>
        <p>Race: {species}</p>
        <p>Status: {status}</p>
      </CardContainer>
    </StyledLink>
  );
};

export default Card;
