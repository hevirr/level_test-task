import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { GameForAdmins, GameForPlayers } from "../components";

import { findGames } from "../functions/findGames";

const StyledGamePage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GamePage = () => {
  const location = useLocation();
  const [currentGame, setCurrentGame] = useState(null);
  const userRole = useSelector(({ userRole }) => userRole.userRole);

  const setGame = () => {
    const temporaryGamesArray = findGames();
    temporaryGamesArray.forEach((game, i) => {
      if (game.id === location.hash.slice(1)) {
        setCurrentGame(game);
      }
    });
  };

  React.useEffect(() => {
    // Игра обновляет состояние каждые 5 секунд. В моей реализации, по сути, не имеет смысла, т.к. копия состояния игры в
    // localStorage обновляется после каждого действия игрока (и как следствие - на странице админа состояние обновляется real-time),
    // но в реальном продакшене тут был бы запрос к серверу, а не к localStorage
    setGame();
    setInterval(() => {
      setGame();
    }, 5000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledGamePage>
      {currentGame && userRole === "admin" ? (
        <GameForAdmins
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
        />
      ) : (
        <GameForPlayers
          currentGame={currentGame}
          currentTeam={location.state}
          setCurrentGame={setCurrentGame}
        />
      )}
    </StyledGamePage>
  );
};

export default GamePage;
