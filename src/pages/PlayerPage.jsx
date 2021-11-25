import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import {
  Button,
  CreateGameInterface,
  GamesList,
  ChooseTeam,
} from "../components";

const StyledPlayerPage = styled.div`
  width: 100%;
  .player-page__subheader {
    width: 100%;
    align-items: center;
  }
`;

const PlayerPage = () => {
  return (
    <StyledPlayerPage>
      <div className="player-page__subheader">
        <div className="subheader__title">Выбор игры</div>
      </div>

      <Routes>
        <Route exact path="/" element={<GamesList />} />
        <Route exact path="choose-team/*" element={<ChooseTeam />} />
      </Routes>
    </StyledPlayerPage>
  );
};

export default PlayerPage;
