Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

let intersection = function(nums1, nums2) {
  let firstSet = new Set();

  for (let num of nums1) {
    firstSet.add(num);
  }

  let intersectionSet = new Set();

  for (let num of nums2) {
    if (firstSet.has(num)) {
      intersectionSet.add(num);
    }
  }

  return Array.from(intersectionSet);
};