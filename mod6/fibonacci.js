//Declare all variables needed
let firstVariable = 1;
let secondVariable = 1;
let counter;
let sum;

//Display the first variable with a value of 1, example: “1 – 1”
document.write("1 - 1" + "<br>");

//Display the second variable with a value of 1, Example: “2 – 1”
document.write("2 - 1" + "<br>");

//Start a for loop giving the counter a value of 3.
for (counter = 3; counter <= 30; counter++) {

    //Assign a total variable with the added values of the first and second variables
    sum = firstVariable + secondVariable;

    //Output the values of counter and total each iteration
    document.write(counter + " - " + sum + "<br>");

    //Assign the first variable the value of the second.
    firstVariable = secondVariable;

    //Assign the second variable the value of the total.
    secondVariable = sum;
}
