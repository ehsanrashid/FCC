function bubbleSort(arr)
{
    let swapped;
    do
    {
        swapped = false;
        for (let i = 0; i < arr.length - 1; ++i)
        {
            if (arr[i + 1] < arr[i])
            {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSort([3, 4, 5, 6, 3, 2, 1, 2, 4]));