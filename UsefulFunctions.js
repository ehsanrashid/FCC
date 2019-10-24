function flipFunctionArguments(func)
{
    return function ()
    {
        func(...Array.from(arguments).reverse());
    }
}

function reverse(str)
{
    if (str === '') return '';
    return reverse(str.slice(1)) + str[0];
}

//console.log(reverse('abcdefg'));


function power(base, exp)
{
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// console.log(power(2, 2));
// console.log(power(2, 0));


function factorial(num)
{
    if (num === 0
        || num === 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));


function productOfArray([first, ...rest])
{
    if (rest.length === 0) return first;
    return first * productOfArray(rest);
}

// console.log(productOfArray([1,2,3,10])) // 60

function recursiveRange(num)
{
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(10)) // 55 

function fib(n)
{
    if (n === 1 || n === 2) return 1;
    let f1 = 1;
    let f2 = 1;
    return (function helper(num)
    {
        if (num === 0) return f2;
        [f1, f2] = [f2, f1 + f2];
        return helper(num - 1);
    })(n - 2);  // n - 2, since we already have the first two fib numbers
}

function fib(n)
{
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(2))  // 1
// console.log(fib(3))  // 2
// console.log(fib(4))  // 3
// console.log(fib(35))  // 9227465
// console.log(fib(10))  // 55


function isPalindrome(str)
{
    if (str === '') return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome('abcddcba'));
// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


function flatten([first, ...rest])
{
    if (!first) return [];  // let [first, ...rest] = [], then in this case, first = undefined, rest = []
    if (Array.isArray(first))
    {
        return [...flatten(first), ...flatten(rest)];
    }
    else
    {
        return [first, ...flatten(rest)];
    }
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


function capitalizeFirst([first, ...rest])
{
    // if (rest.length === 0) return [first[0].toUpperCase() + first.slice(1)];
    // return [first[0].toUpperCase() + first.slice(1), ...capitalizeFirst(rest)];
    let cap = [first[0].toUpperCase() + first.slice(1)];
    if (rest.length === 0) return cap;
    return cap.concat(capitalizeFirst(rest));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana'])



function nestedEvenSum(obj)
{
    let sum = 0;
    for (let [key, value] of Object.entries(obj))
    {
        if (typeof value === "number" && value % 2 === 0)
        {
            sum += value;
        } else if (typeof value === "object")
        {
            sum += nestedEvenSum(value);
        }
    }
    return sum;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10


function capitalizedWords([first, ...rest])
{

    if (first)
    {
        return [capitalizeWord(first), ...capitalizedWords(rest)];
    } else
    {
        return '';
    }

    function capitalizeWord(str)
    {
        return [...str].reduce((acc, x) => [...acc, x.toUpperCase()], []).join('');
    }
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


function stringifyNumbers(obj)
{
    let newObj = {};
    for (let [key, value] of Object.entries(obj))
    {
        if (typeof value === "object")
        {
            if (Array.isArray(value) || value === null || typeof value === "function")
            {
                newObj[key] = value;
            } else
            {
                newObj[key] = stringifyNumbers(value);
            }
        } else if (typeof value === "number")
        {
            newObj[key] = String(value);
        } else
        {
            newObj[key] = value;
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));



function collectStrings(obj)
{
    let collection = [];
    for (let [key, val] of Object.entries(obj))
    {
        if (typeof val === "string")
        {
            collection.push(val);
        } else if (typeof val === "object")
        {
            if (!Array.isArray(val) && val != null && typeof val !== "function")
            {
                collection = [...collection, ...collectStrings(val)];
            }
        }
    }
    return collection;
}

obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])