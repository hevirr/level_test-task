import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { Button, GamesList, CreateGameInterface } from "../components";
import { Route, Routes } from "react-router-dom";

const StyledAdminPanel = styled.div`
  width: 100%;
  .admin-panel__subheader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const AdminPanel = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

  return (
    <StyledAdminPanel>
      <div className="admin-panel__subheader">
        <div className="subheader__title">Игры</div>
        <div className="subheader__button">
          <Link to="create-game/">
            {" "}
            <Button text={"Создать игру"} color={"blue"} />
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<GamesList />} />
        <Route exact path="create-game/" element={<CreateGameInterface />} />
      </Routes>
    </StyledAdminPanel>
  );
};

export default AdminPanel;
