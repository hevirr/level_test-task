import "./styles/app.scss";

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { setUserRole } from "./redux/actions/setUserRole";
import {
  Routes,
  Route,
  Switch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthScreen, AdminPanel, PlayerPage, GamePage } from "./pages";
import { Header } from "./components";

const StyledApp = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    height: calc(100vh - 70px);
    width: calc(100vw - 100px);
    display: flex;
    justify-content: center;
  }
`;

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const userRole = localStorage.getItem("levelUserRole");
    if (userRole) {
      dispatch(setUserRole(userRole));
      // if (location.pathname === "/") {
      //   navigate(`${userRole}`, { replace: true });
      // }
    }
  }, []);

  return (
    <StyledApp>
      {location.pathname !== "/" && <Header />}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<AuthScreen />} />
          <Route path="admin/*" element={<AdminPanel />} />
          <Route path="/player/*" element={<PlayerPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
