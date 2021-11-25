import React from "react";
import styled from "styled-components";
import { Route, useNavigate, Routes } from "react-router-dom";
import { GamesList, ChooseTeam } from "../components";
import { useSelector } from "react-redux";

const StyledPlayerPage = styled.div`
  width: 100%;
  .player-page__subheader {
    width: 100%;
    align-items: center;
  }
`;

const PlayerPage = () => {
  const navigate = useNavigate();
  const userRole = useSelector(({ userRole }) => userRole.userRole);

  React.useEffect(() => {
    if (userRole && userRole !== "player") {
      alert(
        "You are logged in as admin, please, relog as player to join the game"
      );
      navigate("/admin", { replace: true });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
