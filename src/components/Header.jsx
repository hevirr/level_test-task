import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUserRole } from "../redux/actions/setUserRole";

import { findGames } from "../functions/findGames";

const StyledHeader = styled.div`
  background-color: #2e80ec;
  width: 100%;
  height: 50px;
  color: white;
  margin-bottom: 20px;
  font-size: 20px;
  .header-container {
    margin: 0 50px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__back-button {
    cursor: pointer;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRole = useSelector(({ userRole }) => userRole.userRole);

  const findGameName = () => {
    // Немного костыльно выглядит, но т.к. объект с конфигами хедера инициализируется при маунте, то опция
    // для этого роута выдывала бы ошибку и крашила приложение без этого условия.
    // Наверное, можно сделать лучше, но это самое простое и быстрое решение, которое я нашел
    if (location.pathname === "/player/choose-team/game") {
      return findGames().find((game) => game.id === location.hash.slice(1))
        .name;
    }
  };

  const findGameHeaderTitle = () => {
    if (location.pathname === "/game") {
      switch (userRole) {
        case "player":
          return location.state;
        case "admin":
          return findGames().find((game) => game.id === location.hash.slice(1))
            .name;
        default:
          return;
      }
    }
  };

  const headerOptions = {
    "/admin": {
      leftText: "Админ-панель",
      rightText: "Выйти",
      onClick: function () {
        dispatch(setUserRole(""));
        localStorage.removeItem("levelUserRole");
        navigate("/", { replace: true });
      },
    },
    "/admin/create-game/": {
      leftText: "Создать игру",
      rightText: "Назад",
      onClick: function () {
        navigate(-1);
      },
    },
    "/player": {
      leftText: "Участник",
      rightText: "Выйти",
      onClick: function () {
        dispatch(setUserRole(""));
        localStorage.removeItem("levelUserRole");
        navigate("/", { replace: true });
      },
    },
    "/player/choose-team/game": {
      leftText: findGameName(),
      rightText: "Назад",
      onClick: function () {
        navigate(-1);
      },
    },
    "/game": {
      leftText: findGameHeaderTitle(),
      rightText: "Назад",
      onClick: function () {
        navigate(-1);
      },
    },
  };

  const [headerOption, setHeaderOption] = useState("");

  React.useEffect(() => {
    setHeaderOption(location.pathname);
  }, [location]);

  return (
    <StyledHeader>
      {headerOption && headerOptions[headerOption] && (
        <div className="header-container">
          <div className="header__page-title">
            {headerOptions[headerOption].leftText}
          </div>
          <div
            onClick={() => headerOptions[headerOption].onClick()}
            className="header__back-button"
          >
            {" "}
            {headerOptions[headerOption].rightText}
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
