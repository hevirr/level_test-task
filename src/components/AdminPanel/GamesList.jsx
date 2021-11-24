import React, { useState } from "react";
import styled from "styled-components";

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
    let temporaryGamesArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.includes("levelGame")) {
        temporaryGamesArray.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    setGames([...temporaryGamesArray]);
  }, []);

  return (
    <StyledGamesList>
      {games &&
        games.map((game, i) => {
          return <InfoBox title={game.name} isGameActive={game.isGameActive} />;
        })}
    </StyledGamesList>
  );
};

export default GamesList;
