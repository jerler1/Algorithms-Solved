// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function (str) {
  let result = "";
  str.split("").map((character) => {
    if (character === character.toUpperCase()) {
      result += character.toLowerCase();
    } else {
      result += character.toUpperCase();
    }
  });
  return result;
};
