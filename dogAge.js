//variable that stores the age of the person using the program
var myAge = 67;
//first years of dos life that calculate as 10
var earlyYears = 2 * 10.5;
// next years of dog life
var laterYears = (myAge - 2) * 4;
console.log(earlyYears);
console.log(laterYears);
//total years in dog years
var myAgeInDogYears = earlyYears + laterYears;
// name in lower case
var myName = "Mariia".toLowerCase();
console.log(
  "My name is " +
    myName +
    ". I am " +
    myAge +
    " years old in human years which is " +
    myAgeInDogYears +
    " years old in dog years."
);
