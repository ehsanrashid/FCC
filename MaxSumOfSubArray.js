// WRite a funcntion which accepts an array of integers, and a number n
// the function calculates the maximum sum of n consecutive elements in the array

function maxSumOfSubArray(arr, n)
{
    if (arr.length < n)
    {
        return null;
    }
    
    let sumSub = 0;
    for (let i = 0; i < n; ++i)
    {
        sumSub += arr[i];
    }

    // now that we have the sum of first n elements, we move the window once to right,
    // and calculate the sum of the next "window".
    let maxSum  = sumSub;
    for (let i = n; i < arr.length; ++i)
    {
        // sutracting 1 element to the left of window, adding one element to the right
        sumSub += -arr[i - n] + arr[i];
        maxSum = Math.max(sumSub, maxSum);
    }
    return maxSum;
}

console.log(maxSumOfSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));  // 19