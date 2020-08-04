//Example 1 :- Filter even numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];//for Version
var evenNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
    if (numberArray[counter] %2 === 0){
        evenNumbers.push(numberArray[counter])
    }
}
console.log(evenNumbers);//forEach Version
var evenNumbers1 = [];
numberArray.forEach(number => {
    if (number%2 === 0){
        evenNumbers1.push(number)
    }
})
console.log(evenNumbers1);//filter version
var evenNumbers2 = numberArray.filter(number => number%2===0);
console.log(evenNumbers2);// es5 style
var evenNumbers2 = numberArray.filter(function(number){
    return number%2===0;
});
//Example 2:- Filter objects with tags javascript
var persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];var javscriptPersons = persons.filter(personObj => personObj.tags.indexOf("javascript") > -1);
//es5 style
var javscriptPersons = persons.filter(function(personObj){
    return personObj.tags.indexOf("javascript") > -1
});
console.log(javscriptPersons);
