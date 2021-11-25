import React from "react";
import styled from "styled-components";
import { InfoTable, Button, ChartForAdmins } from "../index";

const StyledGameForAdmins = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .admin-game__subheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 45px;
  }
  .subheader__game-status {
    color: ${({ isGameActive }) => (isGameActive ? "green" : "red")};
  }
  .admin-game__info-tables {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
  }
  .admin--game__model-data {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 20px;

    canvas {
      max-height: 500px;
      max-width: 700px;
    }
  }
`;

const GameForAdmins = ({ currentGame, setCurrentGame }) => {
  const setGameInactive = () => {
    setCurrentGame((prev) => {
      return {
        ...prev,
        isGameActive: false,
      };
    });
    localStorage.setItem(
      `levelGame(${currentGame.name})`,
      JSON.stringify(currentGame)
    );
  };

  const labels = [...currentGame.teams.map((team) => team.name), "Эталон"];
  return (
    <StyledGameForAdmins isGameActive={currentGame.isGameActive}>
      <div className="admin-game__subheader">
        <div className="subheader__game-title">{currentGame.name}</div>
        <div className="subheader__game-status">
          {currentGame.isGameActive ? "Активна" : "Завершена"}
        </div>
        <div className="subheader__close-game-button">
          {currentGame.isGameActive ? (
            <Button
              onClick={setGameInactive}
              text={"Завершить игру"}
              color={"red"}
            />
          ) : (
            <Button text={"Игра завершена"} color={"gray"} />
          )}
        </div>
      </div>
      <div className="admin-game__info-tables">
        <InfoTable title={"Закупки"} type={"admin"} currentGame={currentGame} />
        <InfoTable title={"Сводная"} type={"admin"} currentGame={currentGame} />
        <InfoTable
          title={"Рыночная цена"}
          type={"marketPrice"}
          currentGame={currentGame}
        />
      </div>
      <div className="admin--game__model-data">
        <InfoTable title={"Эталон"} type={"model"} currentGame={currentGame} />
        <ChartForAdmins labels={labels} currentGame={currentGame} />
      </div>
    </StyledGameForAdmins>
  );
};

export default GameForAdmins;
