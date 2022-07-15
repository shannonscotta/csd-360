let rowInserter = document.getElementById('containedTable');
let headingContext = document.getElementById('headingContextID');

// make this based on user input
let oneRepMax = 260;
let poundArray = [];
let totalPounds;

//pyramid percentages
let percentArray = [33, 56, 79, 86, 91, 96, 91, 91, 86, 79];

// pyramid rep scheme with warm up sets in array
let repArray = [10, 10, 5, 3, 1, 1, 1, 1, 3, 5];

let plateArray = [];

headingContext.innerHTML += `<h3>4 WEEK BENCH PROGRAM BASED ON 1RM ON ${oneRepMax}</h3>`;

// function that takes the percents and multiples it by 1RM
let getPoundage = () => {
    for (let i = 0; i < percentArray.length; i++) {
        totalPounds = percentArray[i] / 100 * oneRepMax;
        poundArray.push(Math.round(totalPounds))
    }
}

//call get poundage on percent array
getPoundage(percentArray);

//subtract the bar before doing quik mafs
let poundArrayMinusBar = poundArray.map(element => element - 45);
//console.log(poundArrayMinusBar);

//account for both sides of bar
let splitPoundArrayMinusBar = poundArrayMinusBar.map(element => element / 2);
//console.log(splitPoundArrayMinusBar);


let getPlatesNeeded = () => {

    for (let i = 0; i < splitPoundArrayMinusBar.length; i++) {
        let plateString = "";

        if (splitPoundArrayMinusBar[i] >= 45) {
            splitPoundArrayMinusBar[i] -= 45;
            plateString += "  45  +";
        }

        if (splitPoundArrayMinusBar[i] >= 45) {
            splitPoundArrayMinusBar[i] -= 45;
            plateString += "  45  +";
        }

        if (splitPoundArrayMinusBar[i] >= 25) {
            splitPoundArrayMinusBar[i] -= 25;
            plateString += "  25  +";
        }

        if (splitPoundArrayMinusBar[i] >= 25) {
            splitPoundArrayMinusBar[i] -= 25;
            plateString += "  25  +";
        }

        if (splitPoundArrayMinusBar[i] >= 10) {
            splitPoundArrayMinusBar[i] -= 10;
            plateString += "  10  +";
        }

        if (splitPoundArrayMinusBar[i] >= 5) {
            splitPoundArrayMinusBar[i] -= 5;
            plateString += "  5  +";
        }

        if (splitPoundArrayMinusBar[i] >= 2.5) {
            splitPoundArrayMinusBar[i] -= 2.5;
            plateString += "  2.5  +";
        }

        if (splitPoundArrayMinusBar[i] >= 2.5) {
            splitPoundArrayMinusBar[i] -= 2.5;
            plateString += "  2.5  +";
        }
        plateArray.push(plateString.slice(0, -1));
    }
};

getPlatesNeeded(splitPoundArrayMinusBar);


console.log("percent array", percentArray.length);
console.log("rep array", repArray.length);
console.log("pound array minus bar", poundArrayMinusBar.length);
console.log("pound array", poundArray.length);
console.log("plate array", plateArray.length);
console.log("split array", splitPoundArrayMinusBar.length);


for (let i = 0; i < 10; i++) {
    rowInserter.innerHTML +=
        `
           <tr>
                <td>${percentArray[i]} %</td>
                <td>x ${repArray[i]}</td>
                <td>${poundArray[i]} LBS</td>
                <td>${plateArray[i]}</td>
           </tr>
        `
}



