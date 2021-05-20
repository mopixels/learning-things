import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatName } from "../utils/formatName";
import { CharacterProps } from "types/types";
import { useDispatch } from "react-redux";
import { getSelectedCharId } from "redux/actions/actions";
import { LoadingMessage } from "./LoadingMessage";

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

const InfoContainer = styled.div`
  padding: 0 4px;
`;

type CardProps = {
  character: CharacterProps;
};

const Card: React.FC<CardProps> = ({
  character: { image, name, origin, species, status, id, location },
}) => {
  const dispatch = useDispatch();

  if (!name) {
    return <LoadingMessage />;
  } else {
    const formattedName = formatName(name);
    return (
      <StyledLink
        onClick={() => dispatch(getSelectedCharId(id))}
        to={formattedName}
      >
        <CardContainer>
          <Image src={image} alt="Character" />
          <InfoContainer>
            <p>Name: {name}</p>
            <p>Origin: {origin.name}</p>
            <p>Race: {species}</p>
            <p>Status: {status}</p>
            <p>Current location: {location.name}</p>
          </InfoContainer>
        </CardContainer>
      </StyledLink>
    );
  }
};

export default Card;
