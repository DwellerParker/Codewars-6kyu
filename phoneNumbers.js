// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){

    let front = numbers.splice(0,3)
    let middle = numbers.splice(0,3)
    let end =   numbers.splice(0,4)
      return `(${front.join("")}) ${middle.join("")}-${end.join("")}`
    };