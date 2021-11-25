import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();

  const userRole = useSelector(({ userRole }) => userRole.userRole);

  React.useEffect(() => {
    if (userRole && userRole !== "admin") {
      alert("You are not allowed to be here");
      navigate("/player", { replace: true });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
