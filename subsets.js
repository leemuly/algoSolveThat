//Given a set of distinct integers, nums, return all possible subsets (the power set).

//Note: The solution set must not contain duplicate subsets.

function subsets(nums) {
  let results = [[]];

  for(let i = 0; i < nums.length; i++){
      let prevResults = [...results];

      for(let j = 0; j < prevResults.length; j++){
          results.push([...prevResults[j], nums[i]]);
      }
  }

  return results;
};
