import { addAuraScore } from "./score.js";

let q1option1 = document.querySelector("#q1option1");
let q1option2 = document.querySelector("#q1option2");

//question 1
q1option1.addEventListener("click", function() {
    addAuraScore(5);
    window.location.href = "question2.html";

});

q1option2.addEventListener("click", function() {
    addAuraScore(20);
    window.location.href = "question2.html";

});








