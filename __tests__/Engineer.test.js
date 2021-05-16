const classes = require("../lib/classes");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, ID, and email property when new instance of class is declared", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );

      expect("name" in obj).toEqual(true);
      expect("ID" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
    it("should return the name of the new employee when getName() is called", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );
      const message = "Huey";
      const test = obj.getName();
      expect(test).toEqual(message);
    });
    it("should return the ID of the new employee when getID() is called", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );
      const message = "123";
      const test = obj.getID();
      expect(test).toEqual(message);
    });
    it("should return the email of the new employee when getemail() is called", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );
      const message = "huey@fake.com";
      const test = obj.getEmail();
      expect(test).toEqual(message);
    });
    it("should return the github URL of the new employee when getGithub() is called", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );
      const message = "https://www.github.com";
      const test = obj.getGithub();
      expect(test).toEqual(message);
    });
    it("should return 'Engineer'when getRole() is called", () => {
      const obj = new classes.Engineer(
        "Huey",
        "123",
        "huey@fake.com",
        "https://www.github.com"
      );
      const message = "Engineer";
      const test = obj.getRole();
      expect(test).toEqual(message);
    });
  });
});
