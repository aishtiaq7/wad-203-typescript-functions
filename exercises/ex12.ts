// Write a function called areAllCharactersUnique that takes in a string and
// returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

const areAllCharactersUnique = (str: string): boolean => {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }

  return true;
};

export default areAllCharactersUnique;

areAllCharactersUnique("abcdefg"); // Expected result: true
areAllCharactersUnique("abcdefgA"); // Expected result: true
areAllCharactersUnique("programming"); // Expected result: false
areAllCharactersUnique(""); // Expected result: true
areAllCharactersUnique("a"); // Expected result: true
