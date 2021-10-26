"use strict"

// FIZZ BUZZ

// a. Write a program that prints every number from 0 to 100 to the console
//   1. write a function with a for loop that will print numbers to the console from smallest to largest.
//   2. Start the loop at 0.
//   3. increase by increments of 1
//   4. Cap the loop at the number place in the parameter variable.


// b. If a number is divisible by 3, print ‘fizz’ instead of the number
//   1. Write a function that checks each number logged.
//   2. Go through each number and check until you reach the final number.
//   3. If number checked is divisible by 3 print a string to the console in it's place.


// c. If a number is divisible by 5, print ‘buzz’ instead of the number
//   1. Write a function that checks each number logged.
//   2. Go through each number and check until you reach the final number.
//   3. If number checked is divisible by 5 print a string to the console in it's place.

// d. If a number is divisible by 3 and 5, print ‘fizzbuzz’ instead of the number

function fizzbuzz(number){
    for(let i = 0; i <= number; i++){
        console.log(i);
        if(i % 3 === 0){
            console.log('Fizz');
        }
        else if(i % 5 === 0){
            console.log('Buzz')
        }
        else if(i % 3 === 0 && i % 5 ===0){
            console.log("FizzBuzz");
        }
    }

}

fizzbuzz(100);



function reverseString(strOne){
    for(let i = strOne.length - 1; i >= 0; i--){
        console.log(strOne[i])
    }
}

reverseString("Antidisestablishmentarianism");



// 3. Capitalize letter

// a. Write code that takes a string as input
// capitalize the first letter of each word. 
// Words will be separated by only one space. 
// i.e. “hello world” should be outputted as “Hello World



function capitalizeLetter(strTwo){
    let arrayOfWords = strTwo.split(" ");
    return arrayOfWords
}

console.log(capitalizeLetter("How are you doing?"));