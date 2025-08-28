// script.js
// Name: Joseph Minton
// Task10 - How Long Until Graduation

// Step 1: declare a fat arrow function named getToday that takes no parameters and returns the value of new Date();
// Wed Aug 27 2025 10:43:04 GMT-0500 (Central Daylight Time)
const getToday = () => {
    return new Date();
};

// Step 2: declare a constant named today that is equal to the value returned by the function getToday
// Wed Aug 27 2025 10:43:04 GMT-0500 (Central Daylight Time)
const today = getToday();

// Step 3: declare a constant days that is an array  of strings(days of the week)
//declare a constant named weekday that is equal to the value of the days at index of today.getDay(); (returns a number 0-6)
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Step 4: declare a constant named months that is an array of strings(months of the year)
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//declare a constant named year that is equal to the value of todays date getFullYear (2025)
//declare a constant named month that is equal to the value of todays date getMonth (7)
//declare a constant named day that is equal to the value of todays date getDate (27)
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Step 5: declare a fat arrow function named getSuffix that takes a parameter of N and returns a string
//if the array 11,12,13 includes the value of n modulus(remainder) 100 return "th" else continue on(they always end in th) despite the math
//we are using
//if n modulus(remainder) 10 is equal to 1 return st
//if n modulus(remainder) 10 is equal to 2 return nd
//if n modulus(remainder) 10 is equal to 3 return rd
//if n modulus(remainder) 10 is equal none of those return th
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};
//declare a constant named formattedDate that is equal to using string concatenation
//year + comma + month + space + day + getSuffix of day
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Step 6: print to the console the day of the week, and the formatted date
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Step 7: declare a constant named graduation date equal to the value new Date with the given value
const graduationDate = new Date("2025-11-13");
//declare a constant named diff that is equal to graduation date minus today
const diff = graduationDate - today;
//declare a constant named days remaining equal to diff divided by the value of 1000*60*60*24 (milliseconds to days) rounded to the next
//highest whole number
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Step 8: print to the console the days remaining in the course
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");