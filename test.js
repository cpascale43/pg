const {
  calculateTotalPrice,
  calculateCoverageAmountIncrease,
  calculateTermIncrease,
} = require("./index");

let person = {};
test("calculateTotalPrice function exists", () => {
  expect(typeof calculateTotalPrice).toEqual("function");
});

test("calculateTotalPrice handles if a person is under 18", () => {
  person = {
    name: "Daniel",
    age: 17,
    gender: "male",
    healthCondition: "heart disease",
  };
  expect(calculateTotalPrice({ person })).toEqual("not eligible");
});

test("calculateTotalPrice handles if an eligible person has no health conditions", () => {
  person = { name: "Zeke", age: 18, gender: "male", healthCondition: "none" };
  expect(calculateTotalPrice({ person })).toEqual(100);
});

test("calculateTotalPrice handles Brad", () => {
  person = {
    name: "Brad",
    age: 20,
    gender: "male",
    healthCondition: "heart disease",
    coverageAmount: 3000000,
    term: 30,
  };
  // expect(calculateTotalPrice({ person })).toEqual(117);
  // expect(calculateTotalPrice({ person })).toEqual(292.5);
  expect(calculateTotalPrice({ person })).toEqual(549.9);
});

test("calculateTotalPrice handles Josh", () => {
  person = {
    name: "Josh",
    age: 40,
    gender: "male",
    healthCondition: "sleep apnea",
    coverageAmount: 500000,
    term: 15,
  };
  // expect(calculateTotalPrice({ person })).toEqual(190.8);
  expect(calculateTotalPrice({ person })).toEqual(232.78);
});

test("calculateTotalPrice handles Kelly", () => {
  person = {
    name: "Kelly",
    age: 50,
    gender: "female",
    healthCondition: "allergies",
    coverageAmount: 1250000,
    term: 10,
  };
  // expect(calculateTotalPrice({ person })).toEqual(210.2);
  expect(calculateTotalPrice({ person })).toEqual(310.19);
});

test("calculateTotalPrice handles if an eligible person has no health conditions and is female", () => {
  person = {
    name: "Carrie",
    age: 25,
    gender: "female",
    healthCondition: "none",
  };
  expect(calculateTotalPrice({ person })).toEqual(108);
});

test("calculateCoverageAmountIncrease returns 15% increase for $750k", () => {
  let cost = 100;
  expect(calculateCoverageAmountIncrease(750000, cost)).toEqual(115);
});

test("calculateTotalPrice works for Kelly", () => {
  let person = {
    name: "Kelly",
    age: 50,
    gender: "female",
    healthCondition: "allergies",
    coverageAmount: 1250000,
  };

  expect(calculateTotalPrice({ person })).toEqual(310.19);
});

test("calculateTermIncrease returns 22% increase for 15 years", () => {
  let term = 15;
  let cost = 150;

  cost = calculateTermIncrease(term, cost);
  expect(cost).toEqual(183);
});
