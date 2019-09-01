// function accepts a variable number of arguments, and checks whethere there are any duplicates

function isAnyDuplicates(...args)
{
    let obj = {};
    for (let arg of args)
    {
        if (obj[arg])
        {
            return true;
        }
        obj[arg] = true;
    }
    return false;
}

console.log(isAnyDuplicates(1, 2, 3, 4, 5, 6, 6));  // true
console.log(isAnyDuplicates(1, 2, 3, 4, 5, 6));  // false