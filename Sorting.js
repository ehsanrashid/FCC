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

function selectionSort(arr)
{
    for (let i = 0; i < arr.length - 1; ++i)
    {
        let min = i;
        for (let j = i + 1; j < arr.length; ++j)
        {
            if (arr[j] < arr[min])
            {
                min = j;
            }
        }
        if (min !== i)
        {  // swapping only if the elements to be swapped are different
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 7, 8, 1]))
console.log(bubbleSort([3, 4, 5, 6, 3, 2, 1, 2, 4]));