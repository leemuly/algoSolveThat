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
