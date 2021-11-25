import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { Button } from "../index";

const StyledCreateGameInterface = styled.div`
  .create-game__name,
  .create-game__teams-quantity {
    margin-bottom: 15px;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    width: fit-content;
    min-width: 40px;
  }
`;

const CreateGameInterface = () => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState("");
  const [gameTeamsQuantity, setGameTeamsQuantity] = useState();

  const createGame = () => {
    if (localStorage.getItem(gameName)) {
      alert("Такая игра уже существует, выберите другое название");
      return;
    }
    const teams = [];
    for (let i = 1; i <= gameTeamsQuantity; i++) {
      teams.push({
        name: `Команда ${i}`,
        coal: 0,
        iron: 0,
      });
    }
    const game = {
      name: gameName,
      id: uuidv4(),
      teamsQuantity: gameTeamsQuantity,
      isGameActive: true,
      model: {
        coal: {
          marketPrice: 10,
          requiredQuantity: 6,
        },
        iron: {
          marketPrice: 20,
          requiredQuantity: 4,
        },
      },
      teams,
    };
    localStorage.setItem(`levelGame(${game.name})`, JSON.stringify(game));

    navigate("../../admin");
  };

  return (
    <StyledCreateGameInterface>
      <div className="create-game__name">
        Название{" "}
        <input
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          placeholder="Новая игра 1"
          type="text"
        />
      </div>
      <div className="create-game__teams-quantity">
        Команды{" "}
        <input
          value={gameTeamsQuantity}
          onChange={(e) => {
            setGameTeamsQuantity(parseInt(e.target.value));
          }}
          type="number"
          placeholder="2"
          min="1"
          max="4"
        />
      </div>
      <Button
        color={"green"}
        text={"Создать игру"}
        onClick={() => {
          if (gameName && gameTeamsQuantity) {
            createGame();
            return;
          }
          alert("Заполните данные для создания игры");
        }}
      />
    </StyledCreateGameInterface>
  );
};

export default CreateGameInterface;
