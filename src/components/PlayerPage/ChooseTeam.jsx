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
    setCurrentGameTeams(
      temporaryGamesArray.find((game) => game.id === location.hash.slice(1))
        .teams
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledChooseTeam>
      {currentGameTeams &&
        currentGameTeams.map((team, i) => {
          return (
            <InfoBox
              // Использовать индекс в качестве ключа не очень хорошая практика, но т.к. количество команд
              // после создания игры измениться не может, то он все равно будет уникален. Тем более, приложение
              // маленькое, так что лишний раз юзать uuid не захотел
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
