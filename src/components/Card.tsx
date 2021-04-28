import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatName } from "../utils/formatName";
import { Context } from "../Context";

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

type CardProps = {
  data: {
    image: string;
    name: string;
    origin: {
      name: string;
    };
    species: string;
    status: string;
    id: string;
    location: {
      name: string;
    };
  };
};

const Card: React.FC<CardProps> = ({
  data: { image, name, origin, species, status, id, location },
}) => {
  const formatedName = formatName(name);

  return (
    <Context.Consumer>
      {({ selectedChar }) => (
        <StyledLink onClick={() => selectedChar({ id })} to={formatedName}>
          <CardContainer>
            <Image src={image} alt="Character" />
            <p>Name: {name}</p>
            <p>Origin: {origin.name}</p>
            <p>Race: {species}</p>
            <p>Status: {status}</p>
            <p>Current location: {location.name}</p>
          </CardContainer>
        </StyledLink>
      )}
    </Context.Consumer>
  );
};

export default Card;
