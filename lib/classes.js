//This file holds and exports the class defintions used for this project

class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
  }

  getName() {
    console.log(this.name);
  }

  getID() {
    console.log(this.ID);
  }

  getEmail() {
    console.log(this.email);
  }

  getRole() {
    console.log("Employee");
  }
}

// const testEmployee = new Employee("Hubert", "4646", "Hubert@fakemail.com");
// testEmployee.getName();
// testEmployee.getID();
// testEmployee.getEmail();
// testEmployee.getRole();

class Manager extends Employee {
  constructor(name, ID, email, officeNumber) {
    super(name, ID, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    console.log("Manager");
  }
}

// const testManager = new Manager("El Jefe", "2343", "theboss@fake.com", "1");
// testManager.getName();
// testManager.getID();
// testManager.getEmail();
// testManager.getRole();

class Engineer extends Employee {
  constructor(name, ID, email, github) {
    super(name, ID, email);
    this.github = github;
  }
  getRole() {
    console.log("Engineer");
  }

  getGithub() {
    console.log(this.github);
  }
}

const testEngineer = new Engineer(
  "Scotty",
  "2343",
  "thebrains@fake.com",
  "ChunkyGlaswegian"
);
testEngineer.getName();
testEngineer.getID();
testEngineer.getEmail();
testEngineer.getRole();
testEngineer.getGithub();

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }
  getRole() {
    console.log("Intern");
  }

  getSchool() {
    console.log(this.school);
  }
}

// const testIntern = new Intern(
//   "Suzy",
//   "15447",
//   "noob@fake.com",
//   "Springfield Community College"
// );
// testIntern.getName();
// testIntern.getID();
// testIntern.getEmail();
// testIntern.getRole();
// testIntern.getSchool();

// export classes
module.exports = {
  Employee,
  Manager,
  Engineer,
  Intern,
};
