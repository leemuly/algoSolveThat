// Define an anagram to be a word whose characters can be rearranged to create another word. Given two strings, we want to know the minimum number of characters in either string that we must modify to make the two strings anagrams. If it's not possible to make the two strings anagrams, we consider this number to be -1.

// For example, tea and ate are anagrams, so we would need to modify 0 characters.
// tea and toe are not anagrams, but we can modify 1 character in either string (o -> a or a -> o) to make them anagrams.
//act and acts are not anagrams and cannot be converted to anagrams because they contain different numbers of characters.

function getMinimumDifference (str1, str2) {
  if(str1.length !== str2.length) return -1;

  let str1Freq = {};
  let changeCount = 0;

  for(let i = 0; i < str1.length; i++){
    str1Freq[str1[i]] = str1Freq[str1[i]] + 1 || 1;
  }

  for(let i = 0; i < str2.length; i++){
    if(str1Freq[str2[i]]) str1Freq[str2[i]] -= 1;
    else changeCount++;
  }

  return changeCount;
}

console.log(getMinimumDifference('eat', 'ate')); //0
console.log(getMinimumDifference('tea', 'toe')); //1
console.log(getMinimumDifference('act', 'acts')); //-1
console.log(getMinimumDifference('kittycat', 'cityymat')); //2
console.log(getMinimumDifference('qwerty', 'asdfgh')); //6
console.log(getMinimumDifference('qwerty', 'asdfgw')); //5
