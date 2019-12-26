// Write a function that accepts two arrays. It should return true if every value in the first array has its corresponding value squared in the second array. The frequency of the values should be the same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencies = {};
  for (const val of arr1){
    const square = val**2;
    frequencies[square] = ++frequencies[square] || 1;
  }

  for (const val of arr2){
    if(frequencies[val]){
      frequencies[val]--;
      if(frequencies[val] < 0) return false;
    } else {
      return false;
    }
  }
  return true;
}

console.log(same([1,2,3], [4, 1, 9])); //true
console.log(same([1,2,3], [1, 9])); //false
console.log(same([1,2,1], [4, 4, 1])); //false

