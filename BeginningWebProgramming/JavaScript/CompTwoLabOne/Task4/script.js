// script.js
// Name: Joseph Minton
// Task4 - Event Countdown with Date Object

// Step 1: declare a function named calculateDaysUntil that takes a parameter called eventDate
function calculateDaysUntil(eventDate) {
    // Step 2: declare a constant named today that is equal to a new Date() value which is below
    const today = new Date(); //Wed Aug 27 2025 10:43:04 GMT-0500 (Central Daylight Time)

    // Step 3: declare a constant named event that conversts,parses,coerces the parameter given to the function into a Date object
    const event = new Date(eventDate);

    // Step 4: declare a constant named diff that is equal to the difference of event minus today which when using dates gives you the
    //difference in milliseconds(most specific value unless specified)
    const diff = event - today;

    // Step 5: declare a constant named days that is equal to diff divided by the value of 1000*60*60*24 rounded to the next highest
    // whole integer
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: return the variable days
    return days;
}

// Step 7: declare a variable named eventDate that is equal to the String value given by the prompt
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: declare a constant named dateFormat that uses string formatting to ensure the given value of eventDate from the prompt matches
//the required format to convert eventDate to a date object in the function
//it uses regular expression formatting that works like so:
/*
/.../ wraps the formatting start and end
^ = start of string
$ = end of string
\d = digit of length 4 (year)
- = just a literal dash in the string
\d = digit of length 2 (month)
- = just a literal dash in the string
\d = digit of length 2 (day)
 */
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

//loop while using dateFormat test it against eventDate value from the prompt
//while this logic returns true continue to ask for proper date format.
// SO while testing eventDate agaisnt the specified format. if it does not equal the dateFormat keep asking, if it returns true then continue on
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: declare a constant named daysRemaining equal to the value of the function calculateDaysUntil given the value of the prompted
//eventDate
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: print that result to the console.
console.log("Days until the event:", daysRemaining);