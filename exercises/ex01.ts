// Create a function that makes mathematical operations dynamically.
// This function should receive as param a string or number, number and string
// First param: string or number (mandatory)
// Second param: number (optional)
// Third param: Enum (optional) - '+', '-', '/', '*'
// If the first param is string, just return it. Otherwise, use the two numbers and the string to make the math operation
// Eg: printInfoOrCalculate(3,5,"+") //Expected result: 8
// Eg: printInfoOrCalculate(5,3,"-") //Expected result: 2
// Eg: printInfoOrCalculate("TS",5,"+") //Expected result: TS
// Eg: printInfoOrCalculate("TS") //Expected result: TS

const printInfoOrCalculate = (param1: string | number, param2?: number, operation?: string): string | number => {
  if (typeof param1 === "string") {
    return param1;
  }
  if (typeof param1 === "number" && typeof param2 === "number" && typeof operation === "string") {
    switch (operation) {
      case "+":
        return param1 + param2;
      case "-":
        return param1 - param2;
      case "*":
        return param1 * param2;
      case "/":
        return param2 !== 0 ? param1 / param2 : "Division by zero error";
      default:
        throw new Error("Invalid operation");
    }
  }
  throw new Error("Invalid input");
};


// Tests
console.log(printInfoOrCalculate(3, 5, "+")); // Expected result: 8
console.log(printInfoOrCalculate(5, 3, "-")); // Expected result: 2
console.log(printInfoOrCalculate("TS", 5, "+")); // Expected result: "TS"
console.log(printInfoOrCalculate("TS")); // Expected result: "TS"

export default printInfoOrCalculate;
