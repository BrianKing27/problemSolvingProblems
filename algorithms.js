"use strict"

// FIZZ BUZZ

// a. Write a program that prints every number from 0 to 100 to the console
//   1. write a function with a for loop that will print numbers to the console from smallest to largest.
//   2. Start the loop at 0.
//   3. increase by increments of 1
//   4. Cap the loop at the number place in the parameter variable.

function fizzbuzz(number){
    for(let i = 0; i <= number; i++){
        console.log(i);
    }
}

fizzbuzz(100);
// b. If a number is divisible by 3, print ‘fizz’ instead of the number

// c. If a number is divisible by 5, print ‘buzz’ instead of the number

// d. If a number is divisible by 3 and 5, print ‘fizzbuzz’ instead of the number