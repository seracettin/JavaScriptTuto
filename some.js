//check-if at least one element in the array
//Example 1 :- contains 5
var numberArray = [1,2,3,4,5,6,7,8,9,10];//for Version
var hasFive = false;
for (var counter=0; counter < numberArray.length; counter++){
    if (numberArray[counter] === 5){
        hasFive = true;
        break;
    }
}
console.log(hasFive);
//forEach Version
var hasFive1 = false;
numberArray.forEach(number => {
    if (number === 5){
        hasFive1 = true;
    }
})
console.log(hasFive1);
//Some version
var hasFive2 = numberArray.some(number => number === 5);
//es5 version
var hasFive2 = numberArray.some(function(number){
    return number === 5
});
console.log(hasFive2); // logs truevar hasEleven = numberArray.some(number => number === 11);
console.log(hasEleven); // logs falseExample 2:- Check for someone with java.
var persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];
var hasJava = persons.some(personObj => personObj.tags.indexOf("java") > -1);
//es5 version
var hasJava = persons.some(function(personObj){
    return personObj.tags.indexOf("java") > -1
});
console.log(hasJava);

function isBiggerThan10(element, index, array) {
    return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
    'use strict';

    if (typeof value === 'string') {
        value = value.toLowerCase().trim();
    }

    return TRUTHY_VALUES.some(function(t) {
        return t === value;
    });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
