// Implement a function called uniqueValues which accepts a sorted array and counts that array's unique numbers. Negative numbers are possible, assume only sorted, valid values will be passed in.

const uniqueValues = (arr) => {
  if(arr.length === 0) return 0;
  if(arr.length === 1) return 1;

  let holder = 0;
  let checker = 1;

  while(checker < arr.length){
    if(arr[checker] !== arr[holder]){
      arr[++holder] = arr[checker];
    } else {
      checker++;
    }
  }

  return holder+1;
}

console.log(uniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(uniqueValues([])); //0
console.log(uniqueValues([-2, -1, -1, 0, 1])); //4
