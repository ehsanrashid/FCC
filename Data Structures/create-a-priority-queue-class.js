function PriorityQueue()
{
	this.collection = [];
	
	this.printCollection = function()
	{
		console.log(this.collection);
	};
	
	
	this.enqueue = function(item)
	{
		// if colleciton is empty, just push the item in the list
		if (this.collection.length === 0)
		{
			this.collection.push(item);
		}
		// else, we need to check the priority of the incoming item & compare it to items in list till 
		// we get to the first item whose priority is higher than or item,
		// we insert the item right before it.
		else
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
		}
		return this;
	};

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
}

//export default PriorityQueue;
