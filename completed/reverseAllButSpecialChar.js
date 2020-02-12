// given "abc#de", "#" return "edc#ba"
// assume all  given letters will be lowercase

const reverseException = (str, exceptions) => {
  //split the string into an arr becauese strings are immutable in JS

  //create a hashmap (specialChar: true) for exceptions
  //// constant lookup time

  //pointers on each end of the str
  // before swapping chars, check to see if either char is an exception
  // if so, increment or decrement

  //join string and return

  str = str.split("");

  let exceptionMap = {};

  for(let i = 0; i < exceptions.length; i++){
    if(!exceptionMap[exceptions[i]]){
      exceptionMap[exceptions[i]] =  true;
    }
  }

  let left = 0;
  let right = str.length-1;

  while(left < right){
    //check to see if map contains char, if it does, increment/decrement until you reach letters that aren't exceptions
    while(exceptionMap[str[left]] === true) left++;
    while(exceptionMap[str[right]] === true) right--;

    //swap non-exceptional letters until string is reversed
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    left++;
    right--;
  }

  return str.join("");
}

// O(n+m) time where n is the str and m is the exceptions
// O(n) space? simplified from O(2n+1) 2n being the array and resulting string and the max number of items in the hashmap being constant (26 letters in alphabet + 10 digits + special characters)

console.log(reverseException("abc#de", "#")) // edc#ba
