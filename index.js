// TICKLE Price Checker

// constants
const HEALTH_CONDITIONS = {
  "sleep apnea": 0.06,
  allergies: 0.01,
  "heart disease": 0.17,
};
const FEMALE_DISCOUNT = 12;
const BASE_COST = 100;

function calculateTermIncrease(term, cost) {
  let minTerm = 10;
  let termIncrease = 0;
  let increment = 5;

  while (minTerm + increment <= term) {
    // do something
    termIncrease += 0.22;
    minTerm += increment;
  }

  termIncrease *= cost;
  cost += termIncrease;

  return cost;
}

function calculateCoverageAmountIncrease(coverageAmount, cost) {
  let minCoverage = 500000;
  let increaseAmount = 250000;
  let increment = 0;

  while (minCoverage + increaseAmount <= coverageAmount) {
    increment += 0.15;
    minCoverage += increaseAmount;
  }

  cost = cost + cost * increment;
  return cost;
}

function calculateAgeBracketCost(age, cost) {
  let ageBracket = 0;
  let minAge = 18;
  let increment = 5;

  while (minAge + increment < age) {
    minAge += increment;
    ageBracket++;
  }

  ageBracket *= 20;
  return (cost += ageBracket);
}

function calculateHealthConditionCost(condition, cost) {
  if (!HEALTH_CONDITIONS[condition]) return cost;
  let increment = HEALTH_CONDITIONS[condition] * cost;
  return (cost += increment);
}

const calculateTotalPrice = ({ person }) => {
  let cost = BASE_COST;

  // under 18 not eligible
  if (person.age < 18) return "not eligible";

  // finds the adjusted base cost for their age bracket
  cost = calculateAgeBracketCost(person.age, cost);

  // finds the adjusted base cost for coverage amount
  cost = calculateCoverageAmountIncrease(person.coverageAmount, cost);

  // finds the adjusted base cost for term
  cost = calculateTermIncrease(person.term, cost);

  // evaluates cost of health conditions
  if (person.healthCondition) {
    cost = calculateHealthConditionCost(person.healthCondition, cost);
  }

  // women receive $12 discount on final price
  if (person.gender === "female") {
    cost -= FEMALE_DISCOUNT;
  }

  // rounds cost to nearest decimal
  cost = Math.round((cost + Number.EPSILON) * 100) / 100;

  return cost;
};

module.exports = {
  calculateTotalPrice,
  calculateCoverageAmountIncrease,
  calculateTermIncrease,
};
