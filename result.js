import { getAuraScore, resetScore} from "./score.js";

let auraSpan = document.querySelector("#auracount");

let rank = document.querySelector("#Rank");

let homeBtn = document.querySelector("#Home");
var aurascore = getAuraScore();
auraSpan.textContent = aurascore;  
homeBtn.addEventListener("click", function() {
    resetScore();
});

if (aurascore < 80) {
    rank.textContent = "Rank: Sigma (Mohammed)";
}

if (aurascore < 80) {
    rank.textContent = "Rank: Alpha (Tandee)";
}

if (aurascore < 40) {
    rank.textContent = "Rank: Bum (Bystander)";
}



