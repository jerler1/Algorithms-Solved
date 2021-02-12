// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function (str) {
  // Split the string up into individual words.
  const splitStr = str.split(" ");
  // Use a map and substrings to return only the first letter.
  const Acronym = splitStr.map((word) => {
    return word.substring(0, 1).toUpperCase();
  });
  // Make the new array uppercase and rejoin it.
  const rejoinedAcronym = Acronym.join("");
  return rejoinedAcronym;
};

// My attempt at one lining.
return str.split(" ").map((word) => (word.substring(0,1).toUpperCase())).join("")
