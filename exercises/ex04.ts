// Define a function named isEven or Odd that takes a number as a parameter and returns a string saying that the input is even or not.
// Also return the number after the 10th position in opposite in the string. If the param is 8, you should print 8 is event and the 11th after 8 is odd (19).

const isEvenOrOdd = (num: number): string => {
  const isEven = num % 2 === 0;
  const eleventhNumber = num + 11;
  const isEleventhEven = eleventhNumber % 2 === 0;

  return `${num} is ${isEven ? "even" : "odd"} and the 11th after ${num} is ${
    isEleventhEven ? "even" : "odd"
  } (${eleventhNumber}).`;
};

// Test cases:
console.log(isEvenOrOdd(8)); // Expected output: "8 is even and the 11th after 8 is odd (19)."
console.log(isEvenOrOdd(19)); // Expected output: "19 is odd and the 11th after 19 is even (30)."

export default isEvenOrOdd;
