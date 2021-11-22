import React from 'react';
import styled from 'styled-components';

import {Button} from '../components';

const StyledAuthScreen = styled.div`
  height: 100%;
  display: flex;
  
  button {
    background-color: #2e80ec;
    border: none;
    color: white;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    min-width: 150px;
    font-weight: 300;
  }
`;

const AuthScreen = () => {
  return (
    <StyledAuthScreen>
      <Button color={'blue'} text={'Я администратор'} />
      <Button color={'blue'} text={'Я участник'} />
    </StyledAuthScreen>
  );
};

export default AuthScreen;
