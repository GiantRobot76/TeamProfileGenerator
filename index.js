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
      createManager(
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
        engineerPrompt();
      } else {
        console.log(response.menuChoice);
        mainMenu();
      }
    });
}

//functions below create new instances of defined classes, append applicable results to HTML

function createManager(name, ID, email, office) {
  const newManager = new classes.Manager(name, ID, email, office);
  console.log(newManager);
}

function createEngineer(name, ID, email, gitHub) {
  const newEngineer = new classes.Engineer(name, ID, email, gitHub);
  console.log(newEngineer);
}

function createIntern(name, ID, email, school) {
  const newIntern = new classes.Intern(name, ID, email, school);
  console.log(newIntern);
}

//prompt sequences for creation of individual classes
function engineerPrompt() {
  inquirer
    .prompt([
      { type: "input", message: "Enter Employee Name:", name: "employeeName" },
      {
        type: "input",
        message: "Enter Employee ID:",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter Employee Email:",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "Enter Employee Github URL:",
        name: "employeeGithub",
      },
    ])
    .then((response) => {
      createEngineer(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.employeeGithub
      );
      mainMenu();
    });
}

function internPrompt() {
  inquirer
    .prompt([
      { type: "input", message: "Enter Employee Name:", name: "employeeName" },
      {
        type: "input",
        message: "Enter Employee ID:",
        name: "employeeID",
      },
      {
        type: "input",
        message: "Enter Employee Email:",
        name: "employeeEmail",
      },
      {
        type: "input",
        message: "Enter Employee's School:",
        name: "employeeSchool",
      },
    ])
    .then((response) => {
      createIntern(
        response.employeeName,
        response.employeeID,
        response.employeeEmail,
        response.employeeSchool
      );
      mainMenu();
    });
}

managerPrompt();
