// Implement a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// O(n) time and space
const areThereDuplicates = (...args) => {
  let frequency = {};

  for(let value of args){
    if(frequency[value]) return true;

    frequency[value] = 1;
  }
  return false;
}

// O(n^2) or O(n log n) time, 0(1) space
// const areThereDuplicates = (...args) => {
  // let holder = 0;
  // let checker = 1;

  // typeof args[0] === 'number' ? args = args.sort((a,b) => a-b) : args = args.sort();

  // while (checker < args.length){
  //   if (args[holder] === args[checker]) return true;
  //   holder++;
  //   checker++;
  // }
  // return false;
// }

console.log(areThereDuplicates(1,2,3)); //false
console.log(areThereDuplicates(1,2,2)); //true
console.log(areThereDuplicates("a", "b", "c", "a")); //true
console.log(areThereDuplicates(14, 515, 242, 23, 17, 26, 242)); //true
console.log(areThereDuplicates("hi", "cool", "oh", "beep")) //false

