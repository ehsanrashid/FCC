
function countSubString(string, target)
{
    let count = 0;
    for (let i = 0; i < string.length; ++i)
    {
        if (target[0] === string[i])
        {
            let substring = string.slice(i, i + target.length);
            if (substring === target)
            {
                ++count;
            }
        }
    }
    return count;
}

console.log(stringSearch('abraabra', 'abr'));  // 2
console.log(stringSearch('helloworldhello', 'world'));  // 1
console.log(stringSearch('lorie loled', 'lol'));  // 1