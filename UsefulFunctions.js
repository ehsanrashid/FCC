function flipFunctionArguments(func)
{
    return function()
    {
        func(...Array.from(arguments).reverse());
    }
}
