// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    // Split up the string into words.
    const splitString = str.split(" ");

    // Loop over the array, keeping track of which word is the biggest.
    let biggestWordLength = 0;
    let indexOfBiggest = 0;
    for (let i = 0; i < splitString.length; i++) {
        // If word length is greater than largest - change largest stored value.
        if (splitString[i].length > biggestWordLength) {
            // Setting the biggest word length to the new value and the index of this word.
            biggestWordLength = splitString[i].length;
            indexOfBiggest = i;
        }
    }
    return splitString[indexOfBiggest];
};

const str = "I am a firefighter"
longestWord(str);