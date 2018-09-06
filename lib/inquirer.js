const inquirer = require('inquirer.js');
const files = require('./files');

inquirer.prompt(
  [
  {
    type: 'choices',
    message: "Where do you want to place your piece?",
  }
  ])

//[1,2,3,4,5,6,7,8,9]