import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../components";
import { setUserRole } from "../redux/actions/setUserRole";

const StyledAuthScreen = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  button {
    background-color: #2e80ec;
    border: none;
    color: white;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    min-width: 150px;
    max-height: 40px;
    font-weight: 300;
  }
`;

const AuthScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const chooseRole = (role) => {
    const applyRole = () => {
      localStorage.setItem("levelUserRole", role);
      dispatch(setUserRole(role));
    };

    if (role === "admin") {
      applyRole();
      navigate("admin");
    } else {
      applyRole();
      navigate("player");
    }
  };

  return (
    <StyledAuthScreen>
      <Button
        onClick={() => chooseRole("admin")}
        color={"blue"}
        text={"Я администратор"}
      />
      <Button
        onClick={() => chooseRole("player")}
        color={"blue"}
        text={"Я участник"}
      />
    </StyledAuthScreen>
  );
};

export default AuthScreen;
