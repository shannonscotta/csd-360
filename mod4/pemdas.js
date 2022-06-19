let i = 842;

let expressionOne = (i + i % 3 / 7 - 2 + 7 ** 3);
let stringOne = "(i + i % 3 / 7 - 2 + 7 ** 3)";
//console.log("Expression one: ", expressionOne); //1183.2857142857142
document.write(stringOne + " = " + expressionOne + "<br>" + "<br>");

let expressionTwo = (i + i) % 3 / 7 - 2 + 7 ** 3;
let stringTwo = "(i + i) % 3 / 7 - 2 + 7 ** 3";
//console.log("Expression two: ", expressionTwo); //341.14285714285717
document.write(stringTwo + " = " + expressionTwo + "<br>" + "<br>");

let expressionThree = i + i % 3 / (7 - 2) + 7 ** 3;
let stringThree = "i + i % 3 / (7 - 2) + 7 ** 3";
//console.log("Expression three: ", expressionThree); //1185.4
document.write(stringThree + " = " + expressionThree + "<br>" + "<br>");

let expressionFour = i + i % 3 / (7 - 2 + 7 ** 3);
let stringFour = "i + i % 3 / (7 - 2 + 7 ** 3)";
//console.log("Expression four: ", expressionFour); //842.0057471264367
document.write(stringFour + " = " + expressionFour + "<br>" + "<br>");

let expressionFive = i + i % 3 / 7 - (2 + 7) ** 3;
let stringFive = "i + i % 3 / 7 - (2 + 7) ** 3;";
//console.log("Expression five: ", expressionFive); //113.28571428571433
document.write(stringFive + " = " + expressionFive + "<br>" + "<br>");

let expressionSix = (i + i) % 3 / (7 - 2) + (7 ** 3);
let stringSix = "(i + i) % 3 / (7 - 2) + (7 ** 3)";
//console.log("Expression six: ", expressionSix); //343.2
document.write(stringSix + " = " + expressionSix + "<br>" + "<br>");

let expressionSeven = i + (i % 3) / (7 - (2 + 7)) ** 3;
let stringSeven = "i + (i % 3) / (7 - (2 + 7)) ** 3";
//console.log("Expression seven: ", expressionSeven); //841.75
document.write(stringSeven + " = " + expressionSeven + "<br>" + "<br>");
