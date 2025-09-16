// script.js
// Name: Joseph Minton
// Lab1 - Dynamic Age Calculator

//Step 1: declare a function named calculateAge that takes the parameter of dataType year.
function calculateAge(year) {
    // Step 2: declare a constant that is equal to a new date object but specifically get just the full year
    // Wed Aug 27 2025 09:22:59 GMT-0500 (Central Daylight Time) -> 2025
    const currentYear = new Date().getFullYear();
    // Step 3: minus current year date from the year taken into the function as a parameter and return that answer and that is equal to your age
    return currentYear - year;
}

// // Step 4: declare a constant that is equal to the response from a prompt window with the text being the below
//specifying the year in the format of 4 digits
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: declare a constant that parses/cast the value of input into a Number instead of a String
const birthYear = Number(input)

// Step 6: if the variable birthYear is strictly equal to null)"0" OR method chain Number.isNot a number parameter birthYear
//console.log no valid year provided, elsewise continue to calculate age and display the age
if (birthYear === null || Number.isNaN(birthYear)) {
    console.log("No valid year provided.");
}
else{
    // Step 8: declare constant of age is = to (run the function calculate Age with the input from birthYear as the parameter
    const age = calculateAge(birthYear);

    // Step 9: print the result of the function (age) to the console
    console.log("Your age is:", age);
}


