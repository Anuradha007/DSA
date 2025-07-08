 function twoSum(nums, target) {
    const numMap = {};

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if(compliment in numMap && numMap[compliment] !== 1) {
            return [numMap[compliment], i];
        }
        numMap[nums[i]] = i;
    }
    return [];
 }

 const nums = [2, 7, 10, 20];
 // const target = 9;
 const target = 30;
 const result = twoSum(nums, target);
 console.log(result);
 