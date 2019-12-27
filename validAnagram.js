// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema and iceman.

// assume the string contains only lowercase letters and there are no spaces or special characters

// optimize for time (O(n))

const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  let letterFrequency = {};
  for (const letter of str1){
    letterFrequency[letter] = ++letterFrequency[letter] || 1;
  }
  for (const letter of str2){
    if(!letterFrequency[letter]) return false;

    letterFrequency[letter] -= 1;
    if(letterFrequency[letter] < 0) return false;
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true

