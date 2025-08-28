// script.js
// Name: Joseph Minton
// Task3 - Favorite Color Selector

// Step 1: declare an array of colors with starting values at index 0 1 and 2 of Strings red blue and green
let colors = ["red", "blue", "green"];

// Step 2: declare a function named addColor that takes the parameter colorArray
function addColor(colorArray) {
    // Step 3: declare a constant equal to the value of a prompt of enter a color to add(default prompt value is string)
    const newColor = prompt("Enter a color to add:");

    // Step 4: add that color to the given array using unshift which add its to the beginning of the array
    colorArray.unshift(newColor);

    // Step 5: print to the console the update list of colors from the array given to the function
    console.log("Updated colors:", colorArray);
}

// Step 6: run the function addColor with the array to manage being colors from the start of the script
addColor(colors);