const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

console.log("YOOOOO!");

const gameboard = new Array(9);


// function will return if a given index has a piece
const isSlotOccupied = (index) => {
  var isOccupied = false;
  if (gameboard[index] !== undefined) {
    isOccupied = true;
  }
  return isOccupied;
};

// function will return if slot is X or O 
const slotOccupant = (index) => {
  let occupant = "none";
  if (gameboard[index] !== undefined) {
    occupant = gameboard[index];
  }
  return occupant;
};

const winningCombinations = [
  [1, 5, 9],
  [3, 5, 7],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const isWinner = () => {
  let winner = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (slotOccupant(combination[0]) === slotOccupant(combination[1]) === slotOccupant(combination[2]) && (slotOccupant(combination[0] !== 'none'))) {
      winner = true;
    }
  }
  return winner;
};