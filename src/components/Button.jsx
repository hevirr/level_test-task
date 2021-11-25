import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ color }) => color === "blue" && "#2e80ec"};
  background-color: ${({ color }) => color === "green" && "#26ad60"};
  background-color: ${({ color }) => color === "red" && "#eb5756"};
  background-color: ${({ color }) => color === "gray" && "#eaeaea"};

  border: none;
  color: ${({ color }) => (color === "gray" ? "black" : "white")};
  padding: 10px;
  cursor: ${({ color }) => (color === "gray" ? "default" : "pointer")};
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
