// Scott Shannon                CSD 360 - Module 7 Assignment               30 June 2022
// The purpose of this assignment is to create an array of 10 elements and use a for loop header to print in filo and fifo

let teams = [];

teams.push('Buffalo Bills', 'Chiefs', 'Buccaneers', 'Packers', 'Rams', 'Chargers', 'Broncos', 'Cowboys', 'Ravens', '49ers');

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write("<br>" + arr[i]);
    }
}

document.write("<br>" + "<br>" + "My most to least favorite teams are: " + "<br>");
printArray(teams);


console.log("");

function reversedPrintArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write("<br>" + arr[arr.length - i - 1]);
    }
}

document.write("<br>" + "<br>" + "My least to most favorite teams are: " + "<br>");
reversedPrintArray(teams);