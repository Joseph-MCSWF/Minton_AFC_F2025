// script.js
// Name: Joseph Minton
// Task7 - Grade Classification

// Step 1: declare a fat arrow function named classifyGrade that takes the parameter of grade
const classifyGrade = (grade) =>
    // Step 2: if grade is greater than or equal to 90 than(?) return "A" or(:)
        // if grade is greater than or equal to 80 than(?) return "B" or(:)
            // if grade is greater than or equal to 70 than(?) return "C" or(:)
                // if grade is greater than or equal to 60 than(?) return "D" or(:)
                    //if none apply return "F"
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// Step 3: declare a constant named input equal to the value of prompt enter a grade 0-100
const input = prompt("Enter a grade (0-100):");

// Step 4: declare a constant named grade that is equal tot he value of input coerced,parsed,converted into a Number data type
const grade = Number(input);

// Step 5: if grade is not a number print to console not a valid number all else call the arrow function and print the result returned by the function
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 6: Call the fat arrow function and log the result
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}