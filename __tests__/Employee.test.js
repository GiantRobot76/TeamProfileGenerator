const classes = require("../lib/classes");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a name, ID, and email property when new instance of class is declared", () => {
      const obj = new classes.Employee("Huey", "123", "huey@fake.com");

      expect("name" in obj).toEqual(true);
      expect("ID" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
    it("should return the name of the new employee when getName() is called", () => {
      const obj = new classes.Employee("Huey", "123", "huey@fake.com");
      const message = "Huey";
      const test = obj.getName();
      expect(test).toEqual(message);
    });
    it("should return the ID of the new employee when getID() is called", () => {
      const obj = new classes.Employee("Huey", "123", "huey@fake.com");
      const message = "123";
      const test = obj.getID();
      expect(test).toEqual(message);
    });
    it("should return the email of the new employee when getemail() is called", () => {
      const obj = new classes.Employee("Huey", "123", "huey@fake.com");
      const message = "huey@fake.com";
      const test = obj.getEmail();
      expect(test).toEqual(message);
    });
    it("should return 'Employee 'when getRole() is called", () => {
      const obj = new classes.Employee("Huey", "123", "huey@fake.com");
      const message = "Employee";
      const test = obj.getRole();
      expect(test).toEqual(message);
    });
  });
});
