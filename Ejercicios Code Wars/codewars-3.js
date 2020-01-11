/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
    var res=num.toString();
    var res2="";
  for (let index = 0; index < res.length; index++) {
    var value=Math.pow(res[index],2);
    res2=res2+value;
  }
  res=parseInt(res2);
  return res;
  
}

//other solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}