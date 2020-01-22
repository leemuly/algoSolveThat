// Given two positive integers, return true if they have the same frequency of digits and false if they do not. O(n) time.

const sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  let frequency = {};

  for (let digit of num1){
    frequency[digit] = ++frequency[digit] || 1;
  }

  for (let digit of num2){
    if (!frequency[digit]) return false;
    frequency[digit]--;
  }

  return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
