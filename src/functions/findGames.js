export const findGames = () => {
  let temporaryGamesArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes("levelGame")) {
      temporaryGamesArray.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  return temporaryGamesArray;
};
