var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums.indexOf(nums[i]), nums.indexOf(nums[j], i + 1)];
            }
        }
    }
};

console.log(twoSum([3, 3], 6));

/*
    * i = 0 and j = 1:
        - nums[i] + nums[j] = 2 + 7 = 9 ? true;
        - return [index(2), index(7)] => [0, 1];
*/