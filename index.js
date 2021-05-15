//require fs and inquirer which will be used in this project
const fs = require("fs");
const inquirer = require("inquirer");

//require class definitions
const classes = require("./lib/classes");

const inquirerPrompts = [
  "Enter Team Manager Name:",
  "Enter Employee ID:",
  "Enter E-Mail Address:",
  "Enter Office Number:",
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
      mainMenu();
    });
}

//main menu function for handling input of non-manager positions
function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What Type of Employee Would You Like to Add?",
        choices: [
          "Engineer",
          "Intern",
          "I have added all the employees that I need to.",
        ],
        name: "menuChoice",
      },
    ])
    .then((response) => {
      if (
        response.menuChoice === "I have added all the employees that I need to."
      ) {
        return;
      } else if (response.menuChoice === "Engineer") {
        console.log(response.menuChoice);
        mainMenu();
      } else {
        console.log(response.menuChoice);
        mainMenu();
      }
    });
}

managerPrompt();
