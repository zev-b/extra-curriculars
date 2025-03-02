class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /*
        1. declare a map variable KV pairs for indices and vals of array
        2. loop through array
            ? To find the solution, the array has to contain 
            ?   the value remaining when you subtract 
            ?   the current el from the target val...
            * Declare var for differential value
            ? Check the map for the DiffVal
                - not in the map will be 'undefined'
                - if it exists, return the indices...
        3. otherwise the val is not found at any indices in the array
              return an empty array
        */

        let indxValMap = {};
        
        for (let i = 0; i < nums.length; i++) {
            let diffVal = target - nums[i];

            if (indxValMap[diffVal] !== undefined) {
                // console.log(indxValMap);
                return [indxValMap[diffVal], i]
            }
            indxValMap[nums[i]] = i;
        }
        
        return [];
    }
}
