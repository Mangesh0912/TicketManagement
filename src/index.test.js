const getTravelRecords = require("./index");

const passengar1tickets = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Paris", destination: "London" },
  { source: "London", destination: "Amsterdam" },
];

//invalid data with circular dependency so can't find starting point

const passengar2tickets = [
  { source: "Amsterdam", destination: "Berlin" },
  { source: "Paris", destination: "London" },
  { source: "London", destination: "Amsterdam" },
  { source: "Berlin", destination: "Paris" },
];

const passengar3tickets = [
  { source: "Chennai", destination: "Bangalore" },
  { source: "Bombay", destination: "Delhi" },
  { source: "Goa", destination: "Chennai" },
  { source: "Delhi", destination: "Goa" },
]

describe("Check Customer Records", () => {
  test("Passengar Record should be empty when tickets have no information", () => {
    expect(getTravelRecords([])).toBe("");
  });

  test("Correct passengar record is returned for proper ticket information", () => {
    expect(getTravelRecords(passengar1tickets)).toBe("Paris,London,Amsterdam,Berlin");
    expect(getTravelRecords(passengar3tickets)).toBe("Bombay,Delhi,Goa,Chennai,Bangalore");
  });

  test("InCorrect passengar record returns no information", () => {
    expect(getTravelRecords(passengar2tickets)).toBe("");
  });

});
