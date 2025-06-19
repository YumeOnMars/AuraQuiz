
function getAuraScore() {
let storedScore = localStorage.getItem("aurascore");

  if (storedScore === null) {
    return 0;
  }

  const parsedScore = parseInt(storedScore, 10);

  if (isNaN(parsedScore)) {
    return 0;
  }

  return parsedScore;
} 

function addAuraScore(points) {
    var currentScore = getAuraScore();
    var updatedScore = Number(currentScore) + Number(points);
    localStorage.setItem("aurascore", updatedScore.toString()); 
}

function resetScore() {
    localStorage.setItem("aurascore", 0);
}


export {addAuraScore, getAuraScore, resetScore};