//require fs and inquirer which will be used in this project
const fs = require("fs");
const inquirer = require("inquirer");

const inquirerPrompts = [
  "Enter Team Manager Name",
  "Enter Employee ID",
  "Enter E-Mail Address",
  "Enter Office Number",
];

//collect manager inputs and writes to file
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        message: inquirerPrompts[0],
        name: "managerName",
      },
      {
        type: "input",
        message: inquirerPrompts[1],
        name: "managerID",
      },
      {
        type: "input",
        message: inquirerPrompts[2],
        name: "managerEmail",
      },
      {
        type: "input",
        message: inquirerPrompts[3],
        name: "managerOffice",
      },
    ])
    .then((response) => {
      console.log(
        response.managerName,
        response.managerID,
        response.managerEmail,
        response.managerOffice
      );
    });
}

promptAndWrite();
