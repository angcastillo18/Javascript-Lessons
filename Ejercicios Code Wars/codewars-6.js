/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
example
digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
*/



function digital_root(n) {
    var digits=Array.from(String(n), Number); 
     if (digits.length==1) {
        return digits[0];
    } else {
        return digital_root(digits.reduce((a, b) => a + b, 0)) ;
    }
}
//other solution
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
//other solution
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}