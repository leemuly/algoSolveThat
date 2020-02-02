// Rotate the String -> Given a string, an array of direction (0 for left, 1 for right), and an array of amount to rotate. Return the string after the rotation

function stringRotation (str, dir, rotationAmt){
  //edge cases: empty string, rotationAmt > str.length
  if(str.length === 0 || str.length === 1 || rotationAmt === str.length) return str;
  if(rotationAmt > str.length) rotationAmt = rotationAmt % str.length;

  if(dir === 0){
    //if str is rotating left, the rotation index to end of string will be moved to the  beginning
    //then the beginning of the string up to rotation idx will be appended to the end
    return str.slice(rotationAmt) + str.slice(0, rotationAmt);
  } else if (dir === 1){
    //if str is rotating right, rotationAmt of letters will be moved from EOS to beginning
    //beginning of str up to rotationIdx will be moved to the end
    return str.slice(-rotationAmt) + str.slice(0, str.length - rotationAmt);
  }
}

//you could also use splice by creating a variable with the spliced portion of the string and returning it appended to the original accordingly

//without using built-in methods, you could use two non-nested for loops to copy letters into a new string

console.log(stringRotation("HelloWorld", 1, 4)); // "orldHelloW"
console.log(stringRotation("HelloWorld", 0, 4)); // "oWorldHell"
console.log(stringRotation("PracticeMakesPerf", 0, 6)); // "ceMakesPerfPracti"
console.log(stringRotation("", 0, 2)); // ""
console.log(stringRotation("H", 1, 3)); // "H"
console.log(stringRotation("Hello", 0, 5)); // "Hello"
console.log(stringRotation("Hello", 0, 6)); // "elloH"



