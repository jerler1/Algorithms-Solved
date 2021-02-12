// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function (str) {
  // Split up the string.
  const splitString = str.split(" ");
  // Setup a variable to hold the new string.
  let reversedString = [];
  // Loop through the array backwards.
  for (let i = splitString.length - 1; i >= 0; i--) {
    reversedString.push(splitString[i]);
  }
  // Join the array back.
  const joinedString = reversedString.join(" ");
  return joinedString;
};

const str = "I love to run";
reverseWords(str);
