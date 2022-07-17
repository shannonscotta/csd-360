//scott shannon    csd-360 mod 10 assignment    17 July 2022
// the purpose of this code is to generate a random hex value to change background color per each click

let colorsArray = [];

function randomHexGenerator() {
    let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    if (randomColor !== '#ffffff') {
        colorsArray.push(randomColor);
    }
}

while (colorsArray.length < 100) {
    randomHexGenerator();
}

console.log(colorsArray);

let index = 0;

document.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = colorsArray[index];
    document.body.style.color = '#ffffff';
    index = index >= colorsArray.length - 1 ? 0 : index + 1;
});
