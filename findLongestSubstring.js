// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (string) => {
  if(string.length === 0) return 0;

  let starting = 0;
  let longest = 0;
  let frequency = {};

  for(let letterIdx in string){
    if(!frequency[string[letterIdx]]){
      frequency[string[letterIdx]] = 1;
    }
    letterIdx = Number(letterIdx);

    longest = Math.max(longest, letterIdx - starting);
  }
  return longest;
}

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawesome')); //6
console.log(findLongestSubstring('thecatinthehat')); //7
console.log(findLongestSubstring('bbbbbb')); //1
console.log(findLongestSubstring('longestsubstring')); //8
console.log(findLongestSubstring('thisishowwedoit')); //6
console.log(findLongestSubstring('auniquestralongruniquestr')) //14

