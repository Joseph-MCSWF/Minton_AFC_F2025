// script.js
// Name: Joseph Minton
// Task5 - Temperature Classifier

// Step 1: declare a function named calssifyTemperature that takes a parameter named Celsius
function classifyTemperature(celsius) {
    // Step 2: declare a constant named Fahrenheit that is equal to the given parameter * the value of 9/5 + 32
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: use simple if else statement with conditional parameters to return a string to classify the range of temperature
    //if Fahrenheit greater than 100
    if (fahrenheit > 100) {
        return "Hot";
    }
    //if Fahrenheit > 80
    else if (fahrenheit > 80) {
        return "Warm";
    }
    //if Fahrenheit < 40
    else if (fahrenheit < 40) {
        return "Cold";
    }
    //everything else
    else {
        return "Chilly";
    }
}

// Step 4: declare a constant named input that is equal to the value given in prompt
const input = prompt("Enter temperature in Celsius:");

// Step 5: declare a constant named celsius that is = value given in input casted, coerced, parsed to a number data type
const celsius = Number(input);

// Step 6: check if celsius is actually a number, if celsius is Not a number print to console not a number, all else continue on
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: declare a constant named classification = the value returned by the function classifyTemperature given the value of celsius
    //from the prompt earlier
    const classification = classifyTemperature(celsius);

    // Step 8: print to the console the value of classification
    console.log("The temperature is:", classification);
}