import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #2e80ec;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__page-title"></div>
      <div className="header__back-button"></div>
    </StyledHeader>
  );
};

export default Header;
