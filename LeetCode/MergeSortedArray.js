Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]


Constraints:

-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n

1) Have two pointers starting from the back of the array
2) loop through the array but first check if one of the arrays is less than 0
3) if condition to check if the nums1 is greater than nums2
4) loop through both arrays backward
5) if the first number is greater than the second then move on to the next number in the first array
6) else nums1 equal to nums2 then move to down the second array

var merge = function(nums1, m, nums2, n) {
    for(let i=0; i<nums2.length; i++){
        nums1[m] = nums2[i];
        m++;
    }
    nums1.sort((a,b)=>a-b);
};
