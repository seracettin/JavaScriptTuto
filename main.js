//using evenNumbers and sum, we can easily fund sum of even numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];var evenNumberFilterFn = (number => number%2===0);
var squareMapFn = (number => number*number);
var sumFn = ((sum, number) => sum + number);var sumOfSquareOfEvenNumbers = numberArray
    .filter(evenNumberFilterFn)
    .map(squareMapFn)
    .reduce(sumFn,0);
console.log(sumOfSquareOfEvenNumbers)
//Now lets say we have to write another function to sumOfSquareofOddNumbers. We need to write only odd number filter function and rest can be used from above
var oddNumberFilterFn = (number => number%2 !==0);
var sumOfSquareOfOddNumbers = numberArray
    .filter(oddNumberFilterFn)
    .map(squareMapFn)
    .reduce(sumFn,0);console.log(sumOfSquareOfOddNumbers);
