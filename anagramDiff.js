// Define an anagram to be a word whose characters can be rearranged to create another word. Given two strings, we want to know the minimum number of characters in either string that we must modify to make the two strings anagrams. If it's not possible to make the two strings anagrams, we consider this number to be -1.

// For example, tea and ate are anagrams, so we would need to modify 0 characters.
// tea and toe are not anagrams, but we can modify 1 character in either string (o -> a or a -> o) to make them anagrams.
//act and acts are not anagrams and cannot be converted to anagrams because they contain different numbers of characters.

function getMinimumDifference (str1, str2) {
  if(str1.length !== str2.length) return -1;

  let changeCount = 0;
  let nonMatchingChars = [];

  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  for(let index = 0; index < str1.length; index++){
    if(str1[index] !== str2[index]){
      const matchCheck1 = nonMatchingChars.indexOf(str1[index]);
      const matchCheck2 = nonMatchingChars.indexOf(str2[index]);

      const matchingIndex = matchCheck1 > -1 || matchCheck2 > -1 || -1;

      if(matchingIndex > -1) {
          nonMatchingChars.splice(matchingIndex, 1);
        } else {
          nonMatchingChars.push(str1[index], str2[index]);
          changeCount++;
        }
    }
    else continue;
  }

  return changeCount;
}

console.log(getMinimumDifference('eat', 'ate')); //0
console.log(getMinimumDifference('tea', 'toe')); //1
console.log(getMinimumDifference('act', 'acts')); //-1
console.log(getMinimumDifference('kittycat', 'cityymat')); //2
console.log(getMinimumDifference('qwerty', 'asdfgh')); //6
console.log(getMinimumDifference('qwerty', 'asdfgw')); //5
