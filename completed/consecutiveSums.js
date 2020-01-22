// Given a long integer, find the number of ways to represnt it as a sum of two or more consecutive positive integers.

// For example, consider the number 21. It can be expressed as the sums of [1,2,3,4,5,6],[6,7,8] and [10,11]. There are 3 ways to sum 21 using consecutive positive integers.

function consecutive (num) {
  let integerArr = [0];
  let totalCombos = 0;

  for(let i = 1; i <= Math.ceil(num/2); i++){
    integerArr.push(i);
    if(calculateArrSum(integerArr) > num){
      while(calculateArrSum(integerArr) > num){
        integerArr.shift();
      }
    }
    if (calculateArrSum(integerArr) === num) {
      totalCombos += 1;
    }
  }
  return totalCombos;
}

const calculateArrSum = (arr) => {
    return arr.reduce((accum, current) => accum + current
  , 0)};

console.log(consecutive(21)); //3
console.log(consecutive(15)); //3
console.log(consecutive(10)); //1
