import React from "react";
import styled from "styled-components";

const StyledInfoTable = styled.div`
  margin-bottom: 15px;
  .info-table__title {
    font-size: 19px;
    text-align: center;
    margin-bottom: 8px;
  }
  .info-table__content {
    display: flex;
  }
  .info-table__static-column {
    width: 100px;
    text-align: left;
  }
  .static__header,
  .dynamic__header {
    background: #accdfb;
    border: 1px solid white;
  }
  .static__coal,
  .dynamic__coal {
    background: #f8f8f8;
    border: 1px solid white;
    input[type="number"] {
      max-width: 40px;
      max-height: 20px;
      border: none;
      background: transparent;
      border-bottom: 1px solid black;
    }
    &.admin-view.measure-table {
      &.green {
        color: green;
      }
      &.red {
        color: red;
      }
    }
  }
  .static__iron,
  .dynamic__iron {
    background: #eaeaea;
    border: 1px solid white;
    input[type="number"] {
      max-width: 40px;
      max-height: 20px;
      border: none;
      background: transparent;
      border-bottom: 1px solid black;
    }
    &.admin-view.measure-table {
      &.green {
        color: green;
      }
      &.red {
        color: red;
      }
    }
  }
  .info-table__column {
    text-align: center;
  }
  .info-table-row {
    min-width: 50px;
    max-height: 15px;
    padding: 6px 10px;
    &.inGame {
      padding: ${({ readOnly }) => (readOnly ? "6px 10px" : "3px 10px")};
      max-height: 100%;
    }
  }
`;

const InfoTable = ({
  title,
  type,
  currentTeam,
  currentGame,
  setCurrentGame,
  readOnly,
}) => {
  const checkIfEnoughQuantity = (goodType, goodQuantity) => {
    return currentGame.model[goodType].requiredQuantity <= goodQuantity;
  };
  const changeCoalQuantity = (value) => {
    setCurrentGame((prev) => {
      return {
        ...prev,
        teams: [
          ...prev.teams.map((team) =>
            team.name === currentTeam ? { ...team, coal: value } : team
          ),
        ],
      };
    });
  };
  const changeIronQuantity = (value) => {
    setCurrentGame((prev) => {
      return {
        ...prev,
        teams: [
          ...prev.teams.map((team) =>
            team.name === currentTeam ? { ...team, iron: value } : team
          ),
        ],
      };
    });
  };

  React.useEffect(() => {
    if (currentGame) {
      localStorage.setItem(
        `levelGame(${currentGame.name})`,
        JSON.stringify(currentGame)
      );
    }
  }, [currentGame]);

  return (
    <StyledInfoTable readOnly={readOnly}>
      <div className="info-table__title">{title}</div>
      <div className="info-table__content">
        <div className="info-table__static-column">
          <div className="info-table-row static__header">Показатель</div>
          <div className="info-table-row static__coal">Уголь</div>
          <div className="info-table-row static__iron">Железо</div>
        </div>

        {/*===PlAYABLE===*/}
        {type === "inGame" && (
          <div className="info-table__column">
            {" "}
            <div className="info-table-row  dynamic__header">Кол-во</div>
            <div className="info-table-row inGame dynamic__coal">
              {readOnly ? (
                currentGame.teams.find((team) => team.name === currentTeam).coal
              ) : (
                <input
                  onChange={(e) => changeCoalQuantity(e.target.value)}
                  value={
                    currentGame.teams.find((team) => team.name === currentTeam)
                      .coal
                  }
                  type="number"
                />
              )}
            </div>
            <div className="info-table-row inGame dynamic__iron">
              {readOnly ? (
                currentGame.teams.find((team) => team.name === currentTeam).iron
              ) : (
                <input
                  onChange={(e) => changeIronQuantity(e.target.value)}
                  value={
                    currentGame.teams.find((team) => team.name === currentTeam)
                      .iron
                  }
                  type="number"
                />
              )}
            </div>
          </div>
        )}

        {/*===MODEL===*/}
        {type === "model" && (
          <div className="info-table__column">
            {" "}
            <div className="info-table-row  dynamic__header">Кол-во</div>
            <div className="info-table-row  dynamic__coal">
              {currentGame.model.coal.requiredQuantity}
            </div>
            <div className="info-table-row  dynamic__iron">
              {currentGame.model.iron.requiredQuantity}
            </div>
          </div>
        )}

        {/*===ADMIN===*/}
        {type === "admin" &&
          currentGame.teams.map((team) => (
            <div
              onClick={() => checkIfEnoughQuantity("coal", 6)}
              className="info-table__column"
            >
              {" "}
              <div className="info-table-row  dynamic__header">{team.name}</div>
              <div
                className={`info-table-row admin-view dynamic__coal ${
                  title === "Сводная" && "measure-table"
                } ${
                  checkIfEnoughQuantity("coal", team.coal) ? "green" : "red"
                }`}
              >
                {team.coal}
              </div>
              <div
                className={`info-table-row admin-view dynamic__iron ${
                  title === "Сводная" && "measure-table"
                } ${
                  checkIfEnoughQuantity("iron", team.iron) ? "green" : "red"
                }`}
              >
                {team.iron}
              </div>
            </div>
          ))}

        {/*===MODEL===*/}
        {type === "marketPrice" && (
          <div className="info-table__column">
            {" "}
            <div className="info-table-row  dynamic__header">Цена</div>
            <div className="info-table-row  dynamic__coal">
              {currentGame.model.coal.marketPrice}
            </div>
            <div className="info-table-row  dynamic__iron">
              {currentGame.model.iron.marketPrice}
            </div>
          </div>
        )}
      </div>
    </StyledInfoTable>
  );
};

export default InfoTable;
