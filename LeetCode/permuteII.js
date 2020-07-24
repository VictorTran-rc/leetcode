Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
1)
2)
3)
4)
5)
var permuteUnique = function(nums){
  nums.sort(function(a,b){return a-b});
  var used ={}, n=nums.length, res=[];
  var recur = function(cur) {
    if(cur.length == n){
      res.push(cur.slice());
    }

    for(let = i; i<n; i++){
      if(used[i] || (i>0 && nums[i-1]== nums[1] && !used[i-1])) {
        continue;
      }
      cur.push(nums[i]);
      used[i]=true;
      recur(cur);
      used[i]=false;
      cur.pop();
    }
  }
  recur([]);
  return res;
}
