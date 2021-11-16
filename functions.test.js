const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract
} = require("./functions.js");

test("test to see if returnTwo returs two", () => {
  expect(returnTwo()).toBe(2);
});

describe("greeting test", () => {
  test("greetung should return Hello James", () => {
    expect(greeting("James")).toBe("Hello, James.");
  });

  test("greetung should return Hello James", () => {
    expect(greeting("Jill")).toBe("Hello, Jill.");
  });
});

describe("add multiplication tests", () => {
  test("test expects to add 1 and 2 equal to 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("test expects to add 5 and 9 equal to 14", () => {
    expect(add(5, 9)).toBe(14);
  });

  test("test expects multiply three and three equal nine", () => {
    expect(multiply(3, 3)).toBe(9);
  });

  test("test expects divide nine by three equals 3", () => {
    expect(divide(9, 3)).toBe(3);
  });
  test("test expects subtract nine by three equals 6", () => {
    expect(subtract(9, 3)).toBe(6);
  });
});
