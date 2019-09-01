function binarySearch(arr, val)
{
    let beg = 0;
    let end = arr.length - 1;
    while (beg <= end)
    {
        let mid = Math.ceil((beg + end) / 2);
        
        if (val > arr[mid])
        {
            beg = mid + 1;
        }
        else
        if (val < arr[mid])
        {
            end = mid - 1;
        }
        else
        //if (val === arr[mid])
        {
            return mid;
        }
    }
    return -1;
}



console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // 8
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1