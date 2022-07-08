//scott shannon    csd-360 mod 9 assignment    8 July 2022
// create a function that takes an array and then returns an array of the total number of negative numbers, zeros, and positive numbers

const startingArr = [0, 0, 0, -1, -2, -3, -4, -5, -6, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let finishedArr = [];
let zero_count = 0;
let negative_count = 0;
let positive_count = 0;

const counter = (arr) => {

 for (let i = 0; i < arr.length; i++) {

  if (arr[i] < 0) {
   negative_count++;

  } else if (arr[i] === 0) {
   zero_count++;

  } else if (arr[i] > 0) {
   positive_count++;
  }
 }
 finishedArr.push(zero_count, negative_count, positive_count);

 return finishedArr;
}

counter(startingArr);
console.log(finishedArr);

document.getElementById('arrayDetails').innerHTML += `starting array: [${startingArr}] <br />`;
document.getElementById('arrayDetails').innerHTML += `finished array:  [${finishedArr}] <br />`;
document.getElementById('arrayDetails').innerHTML += `zero counter: ${zero_count} <br />`;
document.getElementById('arrayDetails').innerHTML += `negative counter: ${negative_count} <br />`;
document.getElementById('arrayDetails').innerHTML += `positive counter: ${positive_count} <br />`;

