/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

//First solution
function createPhoneNumber(numbers){
  var res1 = numbers.join('').slice(0, 3);
  var res2 = numbers.join('').slice(3, 6);
  var res3 = numbers.join('').slice(6,10 );
  
  return "(" + res1 + ") " + res2 + "-"+ res3 
}
//Second solution
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
//Third solution
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}