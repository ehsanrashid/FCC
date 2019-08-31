let called = 0;
/// Usage: hashCode(string)
let hashCode = (string) =>
{
    ++called;
    let hash = 0;
    for (let i = 0; i < string.length; ++i)
    {
        hash += string.charCodeAt(i);
    }
    return hash;
}
/*
/// Usage: string.hashCode()
String.prototype.hashCode = function(maxHash)
{
    let hash = 0;
    for (i = 0; i < this.length; ++i)
    {
        hash += this.charCodeAt(i);
        //hash = ((hash << 5) - hash) + this.charCodeAt(i);
        //hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(maxHash ? hash % maxHash : hash);
}
*/
/*
//let HashTable = function()
function HashTable()
{
    this.collection = {};

    this.add = function(key, value)
    {
        let keyHash = hashCode(String(key));
        if (!this.collection[keyHash])
        {
            this.collection[keyHash] = {};
        }
        this.collection[keyHash][key] = value;
    }

    this.remove = function(key)
    {
        let keyHash = hashCode(String(key));
        if (this.collection[keyHash])
        {
            for (let k of Object.keys(this.collection[keyHash]))
            {
                if (k === key)
                {
                    delete this.collection[keyHash][key];
                }
            }
        }
    }

    this.lookup = function(key)
    {
        let value = this.collection[hashCode(String(key))][key];
        return value ? value : null;
    }
}
*/

class HashTable
{
    constructor()
    {
        this.collection = {};
    }

    add(key, value)
    {
        let keyHash = hash(String(key));
        if (!this.collection[keyHash])
        {
            this.collection[keyHash] = {};
        }
        this.collection[keyHash][key] = value;
    }

    remove(key)
    {
        let keyHash = hash(String(key));
        if (this.collection[keyHash])
        {
            for (let k of Object.keys(this.collection[keyHash]))
            {
                if (k === key)
                {
                    delete this.collection[keyHash][key];
                }
            }
        }
    }

    lookup(key)
    {
        let value = this.collection[hash(String(key))][key];
        return value ? value : null;
    }
}
