// Created by: Julien Lamoureux
// Created on: May 2023
// This file contains the JS functions for index.html, Unit5-03-HTML-Factorial

"use strict";

function calculateFactorial() {

  // initialize numbers to an empty string
  let numbers = ""

  // initialize counter to 0
  let counter = 0

  // initialize factorial to 1
  let factorial = 1

  // get userInteger from user input
  let userInteger = document.getElementById("first-int").value

  // if userInteger is equal to an empty string or is less than 0, ask them to enter a positive integer
  if ((userInteger =="") || (userInteger < 0)) {
     numbers = "Please enter a positive integer."
  }

  // otherwise, use a do...while loop to calculate the factorial of userInteger
  else {
     do {

       // calculate the factorial by multiplying the factorial variable by the counter plus one
       factorial = factorial*(counter+1)

       // increment the counter
       counter = counter+1
     } while (counter < userInteger)

    // define the numbers statement
    numbers = userInteger+"! = "+factorial
  }
  
  // display the factorial
  document.getElementById('program-feedback').innerHTML = numbers
}