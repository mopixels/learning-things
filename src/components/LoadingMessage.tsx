import React from "react";
import styled from "styled-components";

const LoadingMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingMessage = () => {
  return <LoadingMsg>Loading ...</LoadingMsg>;
};
