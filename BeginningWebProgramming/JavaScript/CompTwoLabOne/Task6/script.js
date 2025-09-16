// script.js
// Name: Joseph Minton
// Task6 - Student Array Operations

// Step 1: declare an array named students that contains student objects with the values below at index 0 1 and 2
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: declare a fat arrow function named updateStudentAge that is given an array parameter
const updateStudentAge = (array) => {
    // Step 3: declare a variable named studentNamed that is the value given in the prompt to the right of declaration
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: declare a variable named student that is equal to the value of the given array.find(find the value at these parameters()
    //search the array for a student that is strictly equals to lower case the value of studentName from above
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: if student returns false(no student found) print to the console no student found, if student found this will be skipped
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: declare a new variable named newAge = to the value of prompt coerced,parsed, to a Number data type
    let newAge = prompt("Enter the new age:");
    Number(newAge)

    // Step 7: if newAge is not a number method of Number data type then print to console input must be a number,
    // if does not apply continue in code
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: for the student found in the array, change that students age variable to the newAge
    student.age = newAge;

    // Step 9: print to the console the new value(s) in the array
    console.log("Updated students:", array);
};

// Step 10: call the function and give it our hardcoded array of students
updateStudentAge(students);