const MINIMUM_VALUE = 1;
const MAXIMUM_VALUE = 6;

const diceRollOutcomeImages = {
    1: '../image/die1.jpeg',
    2: '../image/die2.jpeg',
    3: '../image/die3.jpeg',
    4: '../image/die4.jpeg',
    5: '../image/die5.jpeg',
    6: '../image/die6.jpeg',
};

/**
 * Returns the number of dice to be rolled
 * @returns {number}
 */
let getNumberOfDice = () => {
    return document.getElementById('number-of-dice').value;
};

/**
 * Generates a random integer number between 1 and 6 inclusive, which is the value of currently rolled dice
 * @returns {number}
 */
let getValueOfCurrentlyRolledDice = () => {
    return Math.floor(Math.random() * (MAXIMUM_VALUE - MINIMUM_VALUE + 1)) + MINIMUM_VALUE;
};

/**
 * Returns the values of all rolled dice in an array
 * @returns {number}
 */
let getValuesOfAllRolledDice = () => {
    let valuesOfAllRolledDice = [];
    let numberOfDice = getNumberOfDice();

    while (numberOfDice > 0) {
        valuesOfAllRolledDice.push(getValueOfCurrentlyRolledDice());
        numberOfDice--;
    }

    return valuesOfAllRolledDice;
};

/**
 * Removes dice roll images
 */
let removeDiceRollImages = () => {
    let diceRollImages = document.querySelectorAll('img');

    for(let image of diceRollImages) {
        image.remove();
    }
};

/**
 * Handles click event of Roll button
 */
let handleRollClick = () => {
    removeDiceRollImages();
    let valuesOfAllRolledDice = getValuesOfAllRolledDice();

    for (let value of valuesOfAllRolledDice) {
        let img = document.createElement('img');
        img.src = diceRollOutcomeImages[value];
        img.style.height = '100px';
        img.style.width = '100px';

        let body = document.body;
        body.appendChild(img);
    }
};

/**
 * Handles click event of Reset button
 */
let handleResetClick = () => {
    removeDiceRollImages();
};