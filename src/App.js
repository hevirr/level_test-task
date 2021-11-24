import React, { useState } from "react";
import styled from "styled-components";
import "./styles/app.scss";
import { Routes, Route, Switch, useLocation } from "react-router-dom";
import { AuthScreen, AdminPanel, PlayerPage } from "./pages";
import { Header } from "./components";

const StyledApp = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
    display: flex;
    justify-content: center;
  }
`;

function App() {
  const [userRole, setUserRole] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

  return (
    <StyledApp>
      {location.pathname !== "/" && <Header />}
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={<AuthScreen setUserRole={setUserRole} />}
          />
          <Route
            path="admin/*"
            element={<AdminPanel setUserRole={setUserRole} />}
          />
          <Route
            exact
            path="/player"
            element={<PlayerPage setUserRole={setUserRole} />}
          />
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
