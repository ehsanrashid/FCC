
// Multiple Pointers

// given a sorted array of integers and a target value, determine of there is a pair of value in the array where the avg
// equals the target value, 

// Time O(n)
// Space O(1)

function averagePair(arr, target)
{
    let beg = 0;
    let end = arr.length - 1;
    while (beg < end)
    {
        let avg = average(arr[beg], arr[end]);

        if (avg < target)
        {
            ++beg;
        }
        else
        if (avg > target)
        {
            --end;
        }
        else
        //if (avg === target)
        {
            return true;
        }
    }
    return false;
}

function average(num1, num2)
{
    return (num1 + num2) / 2;
}

console.log(averagePair([1, 2, 3], 2.5));  // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));  // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 6));  // false