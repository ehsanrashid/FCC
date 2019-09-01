// Write a funciton that takes in two string, and checks whether the 
// the characters in the string1 form a subsequence of the 
// characters in the string2, without their order changing

function isSubsequence(str1, str2)
{
    let index1 = 0;
    for (let elem of str2)
    {
        if (//str1.indexOf(elem, index1 + 1) !== -1
            str1[index1 + 1] === elem
         && str1[index1 + 1] !== str1[index1])
        {
            console.log(elem);
            return false;
        }

        if (elem === str1[index1])
        {
            ++index1
            if (index1 == str1.length)
            {
                return true;
            }
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'));  // true
console.log(isSubsequence('ting', 'stying'));  // true
console.log(isSubsequence('abc', 'abracadabra'));  // true
console.log(isSubsequence('abcd', 'abracadabra'));  // true
console.log(isSubsequence('abc', 'acbff'));  // false
console.log(isSubsequence('abcd', 'ahhhdgbcdggrg'));  // false
console.log(isSubsequence('abcd', 'abcdefgh'));  // true
