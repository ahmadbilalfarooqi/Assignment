
const prompt = require('prompt-sync')();
// more conditional operators test

let name1 = 'Mubeen';
let name2 = 'Ameen';
let name3 = 'Mubeen';
let strLen1 = name1.length;
let strLen2 = name2.length;
let strLower1 = name1.toLowerCase();
let strLower2 = name2.toLowerCase();
let num1 = 20; //prompt("Please First Number to compare:");
let num2 = 10; //prompt("Please 2nd Number to compare:");
let fruits = ['Mango', 'Grapes', 'Banana', 'Strawberry'];
let fruitGues:any = prompt('Please enter a fruit name to check it is array or not');

// test two strings are equal or not
if (name1 == name2) {
    console.log('String', name1, 'is equal to String', name2)
} else {
    console.log('String', name1, 'is not equal to String', name2)
}

// test two strings lengths are equal or not
if (strLen1 == strLen2) {
    console.log('Length of String', name1, 'is equal to String', name2)
} else {
    console.log('Length of String', name1, 'is not equal to String', name2)
}

// test in lower case
if (strLower1 == strLower2) {
    console.log('String', strLower1, 'is equal to String', strLower2)
} else {
    console.log('String', strLower1, 'is not equal to String', strLower2)
}

// test numerical 
if (num1 == num2) {
    console.log('Number', num1, 'is equal to number', num2)
} else if (num1 >= num2) {
    console.log('number', num1, 'is greater than', num2)
} else if (num1 <= num2) {
    console.log('number', num1, 'is smaller than', num2)
}
// test 'and' operator and 'or' operator
if (name1 == name2 && name1 == name3) {
    console.log('statement is true');
} else {
    console.log('statement is false');
}

if (name1 == name2 || name1 == name3) {
    console.log('statement is true');
} else {
    console.log('statement is false');
}
//test array have items in it
if (fruits.includes(fruitGues)) {
    console.log(fruitGues, 'is in the array ')
} else {
    console.log(fruitGues, 'is not in array')
}


export{}