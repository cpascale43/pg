## Policygenius SWE Code Challenge

This is a sample MVP as part of Policygenius' SWE hiring process.
Constants are capitalized to increase readability, following JavaScript naming conventions.
Functions are modular, with each of their concerns kept separate, in order to reduce bugs and enhance scalability.
e.g. `FEMALE_DISCOUNT` was extracted from `calculateHealthConditionCost` in order to preserve the possibility that additional demographic-based discounts be added in the future—for example, a veteran discount, an over-65 discount. 
Jest is used as a testing framework for its sensible defaults.

To run this project locally:

```
npm install
npm test
```
