function threeSum(nums)
{
    let result = [];
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i])
        {
            for (let j = i + 1; j < nums.length; ++j)
            {
                let elem1 = nums[i];
                let elem2 = nums[j];
                let target = - (elem1 + elem2);

                if (nums.slice(j + 1).includes(target))
                {
                    //result.push([elem1, elem2, target].sort());    
                    result.push([elem1, elem2, target]);
                }
            }
        }
    }
    return result;
}

let nums = [-1, 0, 1, -1, 2, -1, -4];

console.log(threeSum(nums));