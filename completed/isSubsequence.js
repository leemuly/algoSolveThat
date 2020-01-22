// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string in the same order.

//at least: O(n+m) time, O(1) space

const isSubsequence = (substr, str) => {
  let holder = 0;
  let checker = 0;

  while(checker <= str.length){
    if(holder === substr.length) return true;

    if(substr[holder] === str[checker]){
      holder++;
      checker++;
    } else {
      checker++;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false (wrong order)
console.log(isSubsequence('hello', 'hel world o')); //true
