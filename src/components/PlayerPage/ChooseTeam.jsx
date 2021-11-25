import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { InfoBox } from "../index";

import { findGames } from "../../functions/findGames";

const StyledChooseTeam = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const ChooseTeam = () => {
  const location = useLocation();
  const [currentGameTeams, setCurrentGameTeams] = useState([]);
  React.useEffect(() => {
    let temporaryGamesArray = findGames();
    console.log(location);
    setCurrentGameTeams(
      temporaryGamesArray.find((game) => game.id === location.hash.slice(1))
        .teams
    );
  }, []);

  return (
    <StyledChooseTeam>
      {currentGameTeams &&
        currentGameTeams.map((team, i) => {
          return (
            <InfoBox
              key={i}
              title={team.name}
              gameId={location.hash.slice(1)}
              type={"team"}
            />
          );
        })}
    </StyledChooseTeam>
  );
};

export default ChooseTeam;
