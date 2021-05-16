//This file holds and exports the class defintions used for this project

class Employee {
  constructor(name, ID, email) {
    this.name = name;
    this.ID = ID;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.ID;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
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
    return "Manager";
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
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

// const testEngineer = new Engineer(
//   "Scotty",
//   "2343",
//   "thebrains@fake.com",
//   "ChunkyGlaswegian"
// );
// testEngineer.getName();
// testEngineer.getID();
// testEngineer.getEmail();
// testEngineer.getRole();
// testEngineer.getGithub();

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }

  getSchool() {
    return this.school;
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
