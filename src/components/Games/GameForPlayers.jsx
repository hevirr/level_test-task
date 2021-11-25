import React from "react";
import styled from "styled-components";

import { InfoTable, ChartForPlayers } from "../index";

const StyledGameForPlayers = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  canvas {
    max-height: 500px;
    max-width: 700px;
  }
`;

const GameForPlayers = ({ currentGame, currentTeam, setCurrentGame }) => {
  React.useEffect(() => {}, []);

  const labels = [currentTeam, "Эталон"];
  return (
    <StyledGameForPlayers>
      {currentGame && (
        <div className={"info-tables"}>
          <InfoTable
            title={"Закупка"}
            type={"inGame"}
            readOnly={!currentGame.isGameActive}
            currentTeam={currentTeam}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}
          />
          <InfoTable
            title={"Эталон"}
            type={"model"}
            currentGame={currentGame}
          />
          <InfoTable
            title={"Рыночная цена"}
            type={"marketPrice"}
            currentGame={currentGame}
          />
        </div>
      )}
      {currentGame && (
        <ChartForPlayers
          labels={labels}
          currentGame={currentGame}
          currentTeam={currentTeam}
        />
      )}
    </StyledGameForPlayers>
  );
};

export default GameForPlayers;
