import React from "react";
import styled from "styled-components";

const StyledInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px 10px 0;
  font-size: 20px;
  width: 15.5%;
  min-height: 60px;
  padding: 0 15px 0;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  .infobox__additional-info {
    font-weight: 400;
    font-size: 16px;
    color: ${({ isGameActive }) => (isGameActive ? "#89d1a4" : "#e0e0e0")};
  }
`;

const InfoBox = ({ title, isGameActive }) => {
  return (
    <StyledInfoBox isGameActive={isGameActive}>
      <div className="infobox__box-title">{title}</div>
      {isGameActive && (
        <div className="infobox__additional-info">
          {isGameActive ? "Активна" : "Завершена"}
        </div>
      )}
    </StyledInfoBox>
  );
};

export default InfoBox;
