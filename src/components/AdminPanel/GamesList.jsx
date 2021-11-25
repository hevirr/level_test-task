import React, { useState } from "react";
import styled from "styled-components";

import { findGames } from "../../functions/findGames";

import { InfoBox } from "../index";

const StyledGamesList = styled.div`
  margin-top: 30px;
  //display: grid;
  //grid-template-columns: [first] 33% [line2] 33% [line3] 33%;
  //grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  display: flex;
  flex-wrap: wrap;
`;

const GamesList = () => {
  const [games, setGames] = useState([]);

  React.useEffect(() => {
    let temporaryGamesArray = findGames();
    setGames([...temporaryGamesArray]);
  }, []);

  return (
    <StyledGamesList>
      {games &&
        games.map((game, i) => {
          return (
            <InfoBox
              key={game.id}
              gameId={game.id}
              title={game.name}
              isGameActive={game.isGameActive}
              type={"game"}
            />
          );
        })}
    </StyledGamesList>
  );
};

export default GamesList;
