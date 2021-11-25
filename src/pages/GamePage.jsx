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

  React.useEffect(() => {
    console.log("exec");
    const temporaryGamesArray = findGames();
    temporaryGamesArray.forEach((game, i) => {
      if (game.id === location.hash.slice(1)) {
        setCurrentGame(game);
      }
    });
  }, []);

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
