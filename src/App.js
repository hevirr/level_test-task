import styled from 'styled-components';
import './styles/app.scss'
import {
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import {AuthScreen} from "./pages";

const StyledApp = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          exact
          path="/"
          element={<AuthScreen />}
        />
      </Routes>
    </StyledApp>
  );
}

export default App;
