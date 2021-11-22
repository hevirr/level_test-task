import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({color}) => color === 'blue' && '#2e80ec'};
  border: none;
  color: white;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  min-width: 150px;
  font-weight: 300;
`;

const Button = ({color, text, onClick}) => {
  return (
    <StyledButton color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
