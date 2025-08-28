// script.js
// Name: Joseph Minton
// Task8 - Shopping List Operations

// Step 1: declare an array of strings named shoppingList with eggs butter and flour at indexes 0 1 and 2
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: declare a fat arrow function that takes the parameters list(array) and newItem(value)
const modifyItem = (list, newItem) => {
    // Step 3: add the newItem parameter to the END (push) of the array given (list)
    list.push(newItem);

    // Step 4: print to the console the update list (array)
    console.log("Updated shopping list:", list);
};

// Step 5: declare a constant named userItem equal to the value of the prompt
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: if userItem is falsy (null,empty undefined zero and so on) then print must enter a valid item else continue on
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: call the fat arrow function and give it our array shoppingList and the newItem to add(push) being useritem value from the prompt
    modifyItem(shoppingList, userItem);
}