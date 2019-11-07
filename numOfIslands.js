// given an array of arrays, find the number of islands
// where 1 represents land, 0 represents water
// island is a block of land surrounded by water
// horizontally or vertically adjacent
//

// ex: 6 islands
// [
// [0,1,0,1,0],
// [0,0,1,1,1],
// [1,0,0,1,0],
// [0,1,1,0,0],
// [1,0,1,0,1]
// ]

//breadth(queue)/
// depth(stack) first (more efficient)
//splice has time complexity
// var ? no matter where it's blocked it belongs to scope of outer?

let numIslands = (map) => {
  let count = 0
  for (let row = 0; row < map.length; row++){
    for (let col = 0; col < map[row].length; col++){
      if(map[row][col] === 1){
        count++
        islandChecker(row, col, map)
      }
    }
    return count
  }
}
//floodFill algo
let islandChecker = (row, col, map) => {
  if(row < 0 ||
    row >= map.length ||
    col < 0 ||
    col >= map[row].length ||
    map[row][col] !== 1){
    return
  }
  map[row][col] = 0;
  islandChecker(row-1, col, map)
  islandChecker(row+1, col, map)
  islandChecker(row, col-1, map)
  islandChecker(row, col+1, map)
}

console.log(numIslands(
  [
    [0,1,0,1,0],
    [0,0,1,1,1],
    [1,0,0,1,0],
    [0,1,1,0,0],
    [1,0,1,0,1]
  ]
))

