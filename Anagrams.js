// Given two strings, write a function to determine if the second string is an anagram of the first

// We can use the frequency counter technique

function isAnagram(str1, str2)
{
    if (str1.length !== str2.length)
    {
        return false;
    }

    let obj = {};
    for (let char of str1)
    {
        obj[char] = obj[char] ? ++obj[char] : 1;
    }
    for (let char of str2)
    {
        if (!obj[char])
        {
            return false;
        }
        --obj[char];
    }
    return true;
}

console.log(isAnagram('', ''));  // true
console.log(isAnagram('aaz', 'zza'));  // false
console.log(isAnagram('anagram', 'agnaram'));  // true