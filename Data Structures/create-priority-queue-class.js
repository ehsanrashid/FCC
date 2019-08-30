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

    this.dequeue = function()
    {
        // return the Item without the priority number;
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

class PriorityQueue
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
    
    dequeue()
    {
        // return the Item without the priority number;
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

//export default PriorityQueue;
