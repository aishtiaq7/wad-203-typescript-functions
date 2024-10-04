// Create an anonymous function that takes a string parameter and print the characters of the string in reverse order.
// Return the string.

const reverseAndPrint = (str: string): string => {
  const reversedStr = str.split('').reverse().join('');
  console.log(reversedStr);
  return reversedStr;
};

// Tests:
reverseAndPrint("hello"); // Expected output: "olleh"
reverseAndPrint("world"); // Expected output: "dlrow"
reverseAndPrint("12345"); // Expected output: "54321"

export default reverseAndPrint;
