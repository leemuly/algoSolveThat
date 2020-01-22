// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack). If the needle is not found in the haystack, the function should return -1.

function indexOf(needle,haystack) {
  for(let h = 0; h < haystack.length; h++){
    for(let n = 0; n < needle.length; n++){
      if(haystack[h+n] !== needle[n]) break
      if(n === needle.length -1) return h
    }
  }
  return -1
 }
 console.log(indexOf('or', 'hello world')); // should return 7
 console.log(indexOf('hello world', 'or')); // should return -1
 console.log(indexOf('howdy', 'hello world')); // should return -1
 console.log(indexOf('oox', 'ooboxoooxo')); // should return 6
