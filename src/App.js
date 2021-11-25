import "./styles/app.scss";

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { setUserRole } from "./redux/actions/setUserRole";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
      if (location.pathname === "/") {
        navigate(`${userRole}`, { replace: true });
      }
    } else {
      // Это вроде аналога для Private/Authed Route. Раньше, я бы его и написал в виде HOC, но в react-router-dom v6
      // внутри компонента Routes нельзя ничего вставлять, кроме как Route, поэтому сделал такой простой вариант.
      // Там есть какой-то вариант использовать HOC для приватного роутинга в v6, но т.к. я и так задержался по срокам
      // не стал еще и на это время тратить.
      if (location.pathname !== "/") {
        alert("Please, choose your role to proceed");
        navigate("/", { replace: true });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
