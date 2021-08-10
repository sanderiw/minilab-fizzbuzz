// Fizzbuzz Minilab
const initNumber = 1; //First printed number
const finalNumber = 100; //Final printed number

//Analyze each number
for (let i=initNumber; i<=finalNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizz Buzz'); //Multiple of 3 and 5 at the same time
    } else if (i % 3 === 0) {
        console.log('Fizz');  //Multiple of 3
    } else if (i % 5 === 0) {
        console.log('Buzz');  //Multiple of 5
    } else {
        console.log(i);  //Else, print the number itself
    }
}