// script.js
// Name: Joseph Minton
// Lab2 - Simple Interest Calculator

// Step 1: declare a function called calculateSimpleInterest that takes the parameters principal, rate, and time.
function calculateSimpleInterest(principal, rate, time) {
    // return the value of principal * rate * time / by 100
    return (principal * rate * time) / 100;
}

// Step 2: declare a constant named principal that is = to the value entered from the prompt and cast that entry to a Number data type
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: declare a constant named rate that is = to the value entered from the prompt and cast that entry to a Number data type
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: declare a constant named time that is = to the value entered from the prompt and cast that entry to a Number data type
const time = Number(prompt("Enter the time in years:"));

// Step 5: call the function and give it the values of the consants from above as the parameters, store that value in a constant named interest
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: print the value of interest to the console.
console.log("Your simple interest is:", interest);