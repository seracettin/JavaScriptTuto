//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

//Example 1 :- sum of array
var numberArray = [1,2,3,4,5,6,7,8,9,10];//for version
var sum = 0;
for (var counter=0; counter < numberArray.length; counter++){
    sum += numberArray[counter]
}
console.log(sum);//forEach Version
var sum1 = false;
numberArray.forEach(number => {
    sum1 += number;
})
console.log(sum1);
//Reduce version
var sum2 = numberArray.reduce(((acc, num) => acc + num), 0);
//es5 version
var sum2 = numberArray.reduce(function(acc, num){
    acc += num;
    return acc;
}, 0);
console.log(sum2);
//Example 2:- Check for someone with java.
var persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];
var uniqueTags = persons.reduce((acc, personObj) => {
    acc[personObj.tags] = 1;
    return acc;
},{});
//es5 version
var uniqueTags = persons.reduce(function(acc, personObj){
    acc[personObj.tags] = 1;
    return acc;
},{});
console.log(Object.keys(uniqueTags)); // Returns array of unique tagsExample 3:- getting single list of the cols
var categories = [{
    type : "category1",
    cols : ["col A", "col B"]
}, {
    type : "category2",
    cols : ["col C", "col D", "col E"]
}, {
    type : "category3",
    cols : ["col F"]
}]
var colList = categories.reduce((acc, category) => {
    acc = acc.concat(category.cols);
    return acc;
}, []);
var colList = categories.reduce(function(acc, category){
    acc = acc.concat(category.cols);
    return acc;
}, []);
console.log(colList); //logs ["Col A", "Col B", "Col C", "Col D", "Col E", "Col F"];


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
let maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce without initialValue
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
[                                ].reduce( maxCallback ); // TypeError

// map & reduce with initialValue; better solution, also works for empty or larger arrays
[ { x: 22 }, { x: 42 } ].map( el => el.x )
    .reduce( maxCallback2, -Infinity );


[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
})

let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0)
// sum is 6

