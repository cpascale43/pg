const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

const { calculateTotalPrice } = require("./index");

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sends index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// respond with the price when GET request is made to /quote
app.get("/quote", async (req, res, next) => {
  try {
    let result = 0;

    const { gender, age, health, coverage, term } = req.query;

    const person = {
      gender,
      age,
      healthCondition: health,
      coverageAmount: coverage,
      term,
    };

    result = calculateTotalPrice({ person });

    res.status(200).json({ quote: result });
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
