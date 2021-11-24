import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ color }) => color === "blue" && "#2e80ec"};
  background-color: ${({ color }) => color === "green" && "#26ad60"};
  background-color: ${({ color }) => color === "red" && "#eb5756"};

  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  min-width: 150px;
  font-weight: 300;
`;

const Button = ({ color, text, onClick }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
