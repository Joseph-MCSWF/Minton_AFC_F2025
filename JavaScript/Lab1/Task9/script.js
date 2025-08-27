// script.js
// Name: Joseph Minton
// Task9 - Weekday Detector

// Step 1: declare a fat arrow function named getWeekday that takes no parameters
const getWeekday = () => {
    // Step 2: declare a constant named today that is equal to the current Date
    // Wed Aug 27 2025 10:43:04 GMT-0500 (Central Daylight Time)
    const today = new Date();

    // Step 3: declare a constant named dayNumber that is equal to the today variables getDay value(method of date objects)
    //gives an integer 0-6 starting at sunday
    const dayNumber = today.getDay();

    // Step 4: declare an array called days with 7 values of strings for the days of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Step 5: return the value of days(string) that is equal to the value of dayNumber(number 3)
    return days[dayNumber];
};

// Step 6: call the function and print to the console the result returned
console.log("Today is:", getWeekday());