function rollDice() {
    document.form1.dice1.value = Math.floor((Math.random() * 6) + 1);
    document.form1.dice2.value = Math.floor((Math.random() * 6) + 1);
    document.form1.total.value = parseInt(document.form1.dice1.value) +
        parseInt(document.form1.dice2.value);
    let total = parseInt(document.form1.dice1.value) +
        parseInt(document.form1.dice2.value);
    switch (total) {
        case 2:
            document.form1.total.value = " 2 - Snake Eyes";
            break;
        case 7:
            document.form1.total.value = "7 - You Win";
            break;
        case 11:
            document.form1.total.value = "11 - You Win";
            break;
        case 12:
            document.form1.total.value = "12 - Box Cars";
            break;
        default:
            document.form1.total.value = total;
            break;
    }
}
