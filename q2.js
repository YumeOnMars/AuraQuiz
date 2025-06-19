import { addAuraScore } from "./score.js";

let q2option1 = document.querySelector("#q2option1");
let q2option2 = document.querySelector("#q2option2");
let q2option3 = document.querySelector("#q2option3");
let q2option4 = document.querySelector("#q2option4");


//question 2

q2option1.addEventListener("click", function() { //front seat
    addAuraScore(5);
    window.location.href = "question3.html";

});

q2option2.addEventListener("click", function() { // back of class
    addAuraScore(20);
    window.location.href = "question3.html";

});

q2option3.addEventListener("click", function() { //window
    addAuraScore(50);
    window.location.href = "question3.html";

});

q2option4.addEventListener("click", function() { //on desk
    addAuraScore(40);
    window.location.href = "question3.html";

});

