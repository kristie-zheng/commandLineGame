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

