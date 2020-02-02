//Given a binary tree represented as an array, return "right" if the sum total of the right branch, "left" if the left is larger, or "" if they're the same

const solution = (arr) => {
  //[root, left, right, left, left, right, right,
  //left, left, left, left, right, right, right, right]

  //2^level = total nodes in level / 2 = total nodes per branch

  //track current level
  //calculate total nodes
  //while in left branch, track total
  //while in right, track total
  //return larger of the two at the end

  if(arr.length === 0 || arr.length === 1) return "";

  let level = 1;
  let numNodesInLvl = 2;
  let leftNodes = 1;

  let leftTotal = 0;
  let rightTotal = 0;

  for(let i = 1; i < arr.length; i++){
      if(numNodesInLvl > 0){
          numNodesInLvl--;
      } else {
          level++;
          numNodesInLvl = Math.pow(2,level);
          leftNodes = (numNodesInLvl/2);
      }
      if(leftNodes > 0){
          if(arr[i] === -1) continue;
          leftTotal += arr[i];
          leftNodes--;
      } else {
          if(arr[i] === -1) continue;
          rightTotal += arr[i];
      }
  }

  if(leftTotal > rightTotal) return "Left";
  else if (rightTotal > leftTotal) return "Right";
  else return "";

};


// const solution = (arr) => {
//     if(arr.length === 0 || arr.length === 1) return "";

//     let level = 1;
//     let levelNodes = Math.pow(2,level);
//     let leftNodes = levelNodes/2;
//     let leftTotal = 0;
//     let rightTotal = 0;

//     for(let i = 1; i < arr.length; i++){
//             if(leftNodes > 0){
//                 leftNodes--;
//                 levelNodes--;
//                 if(arr[i] > 0){
//                     leftTotal += arr[i];
//                 }
//             } else {
//                 levelNodes--;
//                 if(arr[i] > 0){
//                     rightTotal += arr[i];
//                 }
//             }

//         if(levelNodes === 0){
//             level++;
//             levelNodes = Math.pow(2,level);
//             leftNodes = levelNodes/2;
//         }
//     }

//     if(leftTotal === rightTotal){
//         return "";
//     } else if (leftTotal > rightTotal){
//         return "Left";
//     } else {
//         return "Right";
//     }
// };
