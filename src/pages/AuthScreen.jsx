import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

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

const AuthScreen = ({setUserRole}) => {
  const navigate = useNavigate();

  const chooseRole = (role) => {
    if (role === 'admin') {
      setUserRole('admin')
      navigate('admin');
    } else {
      setUserRole('player')
      navigate('player');
    }
  }

  return (
    <StyledAuthScreen>
      <Button onClick={() => chooseRole('admin')} color={'blue'} text={'Я администратор'} />
      <Button onClick={() => chooseRole('player')} color={'blue'} text={'Я участник'} />
    </StyledAuthScreen>
  );
};

export default AuthScreen;
