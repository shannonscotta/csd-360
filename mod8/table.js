// Scott Shannon                CSD 420 Mod 8 Assignment                1 July 2022
/* The purpose of this code is to dynamically add rows to my HTMl table, show the initial value, two decimals of the sqrt, and the 2nd and 3rd power */

let num;
const rowInserter = document.getElementById('tableRowContainer');

for (num = 4; num < 15; num++) {
    rowInserter.innerHTML +=
        `<tr>
              <td>${num}</td>
              <td>${Math.sqrt(num).toFixed(2)}</td>
              <td>${Math.pow(num, 2)}</td>
              <td>${Math.pow(num, 3)}</td>
        </tr>`
}