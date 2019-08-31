/*
 * Contructor Function
 * */
/*
//let PriorityQueue = function()
function PriorityQueue()
{
    this.collection = [];
    
    this.enqueue = function(item)
    {
        let index = this.collection.findIndex(x => x[1] > item[1]);
        if (index !== -1)
        {
            this.collection.splice(index, 0, item);
        }
        else
        {
            this.collection.push(item);
        }
        return this;
    }

	// Return the Item->data (0)
    this.dequeue = function()
    {
        return this.collection.shift()[0];
    }

    this.size = function()
    {
        return this.collection.length;
    }

    this.isEmpty = function()
    {
        return this.collection.length === 0;
    }
    
    this.print = function()
    {
        console.log(this.collection);
    }
};
*/

export default class PriorityQueue
{
    constructor()
    {
        this.collection = [];
    }
    
    enqueue(item)
    {
        let index = this.collection.findIndex(x => x[1] > item[1]);
        if (index !== -1)
        {
            this.collection.splice(index, 0, item);
        }
        else
        {
            this.collection.push(item);
        }
        return this;
    }
    
    // Return the Item->data (0)
    dequeue()
    {
        return this.collection.shift()[0];
    }

    size()
    {
        return this.collection.length;
    }

    isEmpty()
    {
        return this.collection.length === 0;
    }

    print()
    {
        console.log(this.collection);
    }
};

