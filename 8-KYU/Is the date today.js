//( Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.)

function isToday(date) {
    var today = new Date();
    return (date.getDate() === today.getDate() 
          && date.getMonth() == today.getMonth() 
          && date.getFullYear() == today.getFullYear());
  }
 // explanation - 
 // 1. declaring a var with new Date constructor
 //2. now using the mentioned three methods getDate(), .getMonth(), .getFullYear() we can compare with the input date with todays date & return will be either 
 // true or false.

 //Link below 

 // https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript