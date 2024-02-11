const compareOdds = () => {
  const rivalry = JSON.parse(document.getElementById("rivalry").value);
  const betway = JSON.parse(document.getElementById("betway").value);
  const winWins = [];

  const checkOddWinWin = (oddA, oddB) => {
    if (oddA - (1 + oddA / oddB) > 0) {
      console.log(oddA, oddB);
      console.log(oddA - (1 + oddA / oddB));
      return true;
    }
    return false;
  };

  rivalry.forEach((rivalryLine) => {
    betway.forEach((betwayLine) => {
      if (rivalryLine.playerA.name.includes(betwayLine.playerA.name) || betwayLine.playerA.name.includes(rivalryLine.playerA.name)) {
        if (rivalryLine.playerB.name.includes(betwayLine.playerB.name) || betwayLine.playerB.name.includes(rivalryLine.playerB.name)) {
          if (
            checkOddWinWin(
              Math.max(rivalryLine.playerA.odd, betwayLine.playerA.odd),
              Math.max(rivalryLine.playerB.odd, betwayLine.playerB.odd)
            )
          ) {
            winWins.push(rivalryLine);
          }
        }
      }
      if (rivalryLine.playerA.name.includes(betwayLine.playerB.name) || betwayLine.playerB.name.includes(rivalryLine.playerA.name)) {
        if (rivalryLine.playerB.name.includes(betwayLine.playerA.name) || betwayLine.playerA.name.includes(rivalryLine.playerB.name)) {
          if (
            checkOddWinWin(
              Math.max(rivalryLine.playerA.odd, betwayLine.playerB.odd),
              Math.max(rivalryLine.playerB.odd, betwayLine.playerA.odd)
            )
          ) {
            winWins.push(rivalryLine);
          }
        }
      }
    });
  });

  winWins.forEach((winWin) => {
    const result = document.createElement("div");
    result.className = "resultItem";
    const playerA = document.createElement("p");
    playerA.innerHTML = winWin.playerA.name + " - " + winWin.playerA.odd;
    const playerB = document.createElement("p");
    playerB.innerHTML = winWin.playerB.name + " - " + winWin.playerB.odd;
    result.append(playerA, playerB);
    document.getElementById("result").append(result);
  });
};
