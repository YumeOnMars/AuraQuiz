import { addAuraScore } from "./score.js";

let q3option1 = document.querySelector("#q3option1");
let q3option2 = document.querySelector("#q3option2");
let q3option3 = document.querySelector("#q3option3");
let q3option4 = document.querySelector("#q3option4");

//question 3
q3option1.addEventListener("click", function() { //help
    addAuraScore(30);
    window.location.href = "result.html";

});

q3option2.addEventListener("click", function() { //run
    addAuraScore(5);
    window.location.href = "result.html";

});

q3option3.addEventListener("click", function() { //wait lastsec
    addAuraScore(40);
    window.location.href = "result.html";

});

q3option4.addEventListener("click", function() { //watch
    addAuraScore(1);
    window.location.href = "result.html";

});
