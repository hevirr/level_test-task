import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const InfoBox = ({ title, isGameActive, gameId, type }) => {
  const navigate = useNavigate();
  const userRole = useSelector(({ userRole }) => userRole.userRole);

  const onClick = () => {
    if (type === "game") {
      switch (userRole) {
        case "admin":
          navigate(`/game#${gameId}`, { replace: true });
          break;
        case "player":
          if (isGameActive) {
            navigate(`choose-team/game#${gameId}`);
          } else {
            alert("You cannot join this game since it's already been finished");
          }
          break;
        default:
          return;
      }
    }
    if (type === "team") {
      navigate(`/game#${gameId}`, { state: title });
    }
  };

  return (
    <StyledInfoBox onClick={() => onClick()} isGameActive={isGameActive}>
      <div className="infobox__box-title">{title}</div>
      {userRole === "admin" && (
        <div className="infobox__additional-info">
          {isGameActive ? "Активна" : "Завершена"}
        </div>
      )}
    </StyledInfoBox>
  );
};

export default InfoBox;
