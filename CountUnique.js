// Given a sorted Array, count unique values inside it and return the value

function countUnique(arr)
{
    /*
    if (arr.length === 0)
    {
        return 0;
    }
    let count = 0;
    for (let i = 1; i < arr.length; ++i)
    {
        if (arr[count] !== arr[i])
        {
            ++count;
            arr[count] = arr[i];
        }
    }
    return 1 + count;
    */

    /*
    let obj = {}
    for (let i = 0; i < arr.length; ++i)
    {
        obj[arr[i]] = true;
    }
    return Object.keys(obj).length;
    */

    //return arr.filter((value, index, self) => self.indexOf(value) === index).length;
    
    return [...new Set(arr)].length;

}

console.log(countUnique([1, 1, 1, 1, 1, 2]));  // 2
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));  // 7
console.log(countUnique([]));  // 0
console.log(countUnique([-2, -1, -1, 0, 1]));  // 4
