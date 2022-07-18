let oneRepMax = prompt("What is your bench press 1RM?");
//let oneRepMax = 260;

let rowInserterMW = document.getElementById('containedTableMW');
let rowInserterF = document.getElementById('containedTableF');

let headingContext = document.getElementById('headingContextID');

let poundArrayMW = [];
let poundArrayF = [];

let totalPoundsF;
let totalPoundsMW;

//pyramid percentages MW
let percentArrayMW = [33, 56, 79, 86, 91, 96, 91, 91, 86, 79];
//pyramid percentages F
let percentArrayF = [33, 56, 79, 86, 91, 91, 91, 86, 79, 79];

// pyramid rep scheme with warm up sets in array MW
let repArrayMW = [10, 10, 5, 3, 1, 1, 1, 1, 3, 5];
// pyramid rep scheme with warm up sets in array F
let repArrayF = [10, 10, 5, 3, 1, 1, 1, 2, 4, 3];

let plateArrayMW = [];
let plateArrayF = [];

headingContext.innerHTML += `<h3>4 WEEK BENCH PROGRAM BASED ON 1RM ON ${oneRepMax}</h3>`;

// function that takes the percents and multiples it by 1RM
let getPoundageMW = () => {
    for (let i = 0; i < percentArrayMW.length; i++) {
        totalPoundsMW = percentArrayMW[i] / 100 * oneRepMax;
        poundArrayMW.push(Math.round(totalPoundsMW))
    }
}
// function that takes the percents and multiples it by 1RM
let getPoundageF = () => {
    for (let i = 0; i < percentArrayF.length; i++){
        totalPoundsF = percentArrayF[i] / 100 * oneRepMax;
        poundArrayF.push(Math.round(totalPoundsF))
    }
}

//call get poundage on percent array
getPoundageMW(percentArrayMW);
getPoundageF(percentArrayF);

//subtract the bar before doing quik mafs
let poundArrayMinusBarMW = poundArrayMW.map(element => element - 45);
let poundArrayMinusBarF = poundArrayF.map(element => element - 45);

//console.log(poundArrayMinusBarMW);

//account for both sides of bar
let splitPoundArrayMinusBarMW = poundArrayMinusBarMW.map(element => element / 2);
let splitPoundArrayMinusBarF = poundArrayMinusBarF.map(element => element / 2);

let getPlatesNeededMW = () => {

    for (let i = 0; i < splitPoundArrayMinusBarMW.length; i++) {
        let plateString = "";

        if (splitPoundArrayMinusBarMW[i] >= 45) {
            splitPoundArrayMinusBarMW[i] -= 45;
            plateString += "  45  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 45) {
            splitPoundArrayMinusBarMW[i] -= 45;
            plateString += "  45  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 25) {
            splitPoundArrayMinusBarMW[i] -= 25;
            plateString += "  25  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 25) {
            splitPoundArrayMinusBarMW[i] -= 25;
            plateString += "  25  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 10) {
            splitPoundArrayMinusBarMW[i] -= 10;
            plateString += "  10  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 5) {
            splitPoundArrayMinusBarMW[i] -= 5;
            plateString += "  5  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 2.5) {
            splitPoundArrayMinusBarMW[i] -= 2.5;
            plateString += "  2.5  +";
        }

        if (splitPoundArrayMinusBarMW[i] >= 2.5) {
            splitPoundArrayMinusBarMW[i] -= 2.5;
            plateString += "  2.5  +";
        }
        plateArrayMW.push(plateString.slice(0, -1));
    }
};
let getPlatesNeededF = () => {

    for (let i = 0; i < splitPoundArrayMinusBarMW.length; i++) {
        let plates = "";

        if (splitPoundArrayMinusBarF[i] >= 45) {
            splitPoundArrayMinusBarF[i] -= 45;
            plates += "  45  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 45) {
            splitPoundArrayMinusBarF[i] -= 45;
            plates += "  45  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 25) {
            splitPoundArrayMinusBarF[i] -= 25;
            plates += "  25  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 25) {
            splitPoundArrayMinusBarF[i] -= 25;
            plates += "  25  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 10) {
            splitPoundArrayMinusBarF[i] -= 10;
            plates += "  10  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 5) {
            splitPoundArrayMinusBarF[i] -= 5;
            plates += "  5  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 2.5) {
            splitPoundArrayMinusBarF[i] -= 2.5;
            plates += "  2.5  +";
        }

        if (splitPoundArrayMinusBarF[i] >= 2.5) {
            splitPoundArrayMinusBarF[i] -= 2.5;
            plates += "  2.5  +";
        }
        plateArrayF.push(plates.slice(0, -1));
    }
};

getPlatesNeededMW(splitPoundArrayMinusBarMW);
getPlatesNeededF(splitPoundArrayMinusBarF);


for (let i = 0; i < 10; i++) {
    rowInserterMW.innerHTML +=
        `
           <tr>
                <td>${percentArrayMW[i]} %</td>
                <td>x ${repArrayMW[i]}</td>
                <td>${poundArrayMW[i]} LBS</td>
                <td>${plateArrayMW[i]}</td>
           </tr>
        `
}

for (let i = 0; i < 10; i++) {
    rowInserterF.innerHTML +=
        `
           <tr>
                <td>${percentArrayF[i]} %</td>
                <td>x ${repArrayF[i]}</td>
                <td>${poundArrayF[i]} LBS</td>
                <td>${plateArrayF[i]}</td>
           </tr>
        `
}





