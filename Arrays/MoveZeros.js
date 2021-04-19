/* 

283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if(nums.length < 2) {
        return;
    }
    
    let end = nums.length -1;
    
   for(let i=0; i<nums.length; i++) {
       if(nums[i] === 0) {
           let currIndex = i;
           while(currIndex< nums.length) {
               let nextIndex = currIndex+1;
               if(nextIndex < nums.length && nums[nextIndex] !== 0){
                   let temp = nums[currIndex];
                   nums[currIndex] = nums[nextIndex];
                   nums[nextIndex] = temp;
               }
               currIndex++;
           }
       }
   }
    
    for(let i=0; i<nums.length; i++) {
       if(nums[i] === 0) {
           let currIndex = i;
           while(currIndex< nums.length) {
               let nextIndex = currIndex+1;
               if(nextIndex < nums.length && nums[nextIndex] !== 0){
                   let temp = nums[currIndex];
                   nums[currIndex] = nums[nextIndex];
                   nums[nextIndex] = temp;
               }
               currIndex++;
           }
       }
   }
    
    
};