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

//following variables hold beginning and ending of final HTML file as template literals - will append specific info in functions

let htmlBuild = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <title>Team Roster Info</title>
  </head>
  <body>
    <div class="jumbotron bg-warning">
      <h1 class="display-4 text-center fw-bold">Our Team</h1>
      <hr class="my-4" />
    </div>
    <div class="container">
      <div class="row row-cols-4">`;

const htmlEnd = `   </div>
</body>
</html>`;

function writetoHTML(input) {
  fs.writeFile("test.html", input, (err) =>
    err ? console.error(err) : console.log("File Created")
  );
}

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
        let finalHTML = htmlBuild + htmlEnd;
        writetoHTML(finalHTML);
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

  //add manager inputs to html template and append

  let startHTML = `<div class="col text-center mb-2">
  <h2 class="bg-info border border-dark mb-0">${name}</h2>
  <p class="border border-dark mb-0 mt-0 fw-bold fs-5">Manager</p>
  <div class="inner-wrapper border border-dark">
    <a href="mailto:${email}">${email}</a>
    <p class="mt-1 mb-0 border-top border-dark mb-0">ID Number: ${ID}</p>
    <p class="border-bottom border-top border-dark mt-0 mb-0">
      Office Number: ${office}
    </p>
  </div>
</div>`;

  htmlBuild = htmlBuild + startHTML;
}

function createEngineer(name, ID, email, gitHub) {
  const newEngineer = new classes.Engineer(name, ID, email, gitHub);

  let startHTML = `<div class="col text-center mb-2">
  <h2 class="bg-info border border-dark mb-0">${name}</h2>
  <p class="border border-dark mb-0 mt-0 fw-bold fs-5">Engineer</p>
  <div class="inner-wrapper border border-dark">
    <a href="mailto:${email}">${email}</a>
    <p class="mt-1 mb-0 border-top border-dark mb-0">ID Number: ${ID}</p>
  </div>
  <div class="inner-wrapper border border-dark">
    <a href="${gitHub}" target="_blank">${gitHub}</a>
  </div>
</div>`;

  htmlBuild = htmlBuild + startHTML;
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
