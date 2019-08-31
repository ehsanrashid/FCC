/*
 * Function
 * */
/*
function LinkedList()
{
	function Node(element, next = null)
	{
		this.element = element;
		this.next = next;
	}

	let headNode = null;
	
	this.head = function()
	{
		return headNode;
	}
	this.tail = function()
	{
		let tailNode = headNode;
		if (tailNode !== null)
		{
			while (tailNode.next !== null)
			{
				tailNode = tailNode.next;
			}
		}
		return tailNode;
	}
	
	this.isEmpty = function()
	{
		return headNode === null;
	}

	this.size = function()
	{
		let size = 0;
		let node = headNode;
		while (node !== null)
		{
			node = node.next;
			++size;
		}
		return size;
	}

	this.at = function(index)
	{
		for (let prevNode = null, currNode = headNode, currIndex = 0;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				return prevNode;
			}
		}
		return undefined;
	}
	
	this.add = function(element)
	{
		let newNode = new Node(element);
		
		let tailNode = this.tail();
		if (tailNode === null)
		{
			headNode = newNode;
		}
		else
		{
			tailNode.next = newNode;
		}
	};

	this.addAt = function(index, element)
	{
		if ((this.isEmpty() && index !== 0)
		 || index < 0 || index > this.size())
		{
			return false;
		}
		
		//for (let prevNode = null, currNode = headNode, currIndex = 0;
			 //currNode !== null;
			 //prevNode = currNode, currNode = currNode.next, ++currIndex)
		//{
			//if (currIndex === index)
			//{
				//let newNode = new Node(element, currNode);

				//if (prevNode === null)
				//{
					//headNode = newNode;
				//}
				//else
				//{
					//prevNode.next = newNode;
				//}
				//return true;
			//}
		//}
		//return false;
		
		
		let prevNode = this.at(index);
		if (prevNode === undefined)
		{
			return false;
		}
		if (prevNode === null)
		{
			headNode = new Node(element, headNode);
		}
		else
		{
			prevNode.next = new Node(element, prevNode.next);
		}
		return true;
	}

	this.remove = function(element)
	{
		if (this.isEmpty())
		{
			return;
		}
		for (let prevNode = null, currNode = headNode;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next)
		{
			if (currNode.element === element)
			{
				if (prevNode === null)
				{
					headNode = currNode.next;
				}
				else
				{
					prevNode.next = currNode.next;
				}
				break;
			}
		}
	}

	this.removeAt = function(index)
	{
		if (this.isEmpty()
		 || index < 0 || index >= this.size())
		{
			return null;
		}
		
		//for (let prevNode = null, currNode = headNode, currIndex = 0;
			 //currNode !== null;
			 //prevNode = currNode, currNode = currNode.next, ++currIndex)
		//{
			//if (currIndex === index)
			//{
				//let removedNode = currNode;
				
				//if (prevNode === null)
				//{
					//headNode = currNode.next;
				//}
				//else
				//{
					//prevNode.next = currNode.next;
				//}
				//return removedNode.element;
			//}
		//}
		//return null;
		
		
		let prevNode = this.at(index);
		if (prevNode === undefined)
		{
			return null;
		}
		let removedNode;
		if (prevNode === null)
		{
			removedNode = headNode;
			headNode = headNode.next;
		}
		else
		{
			removedNode = prevNode.next;
			prevNode.next = prevNode.next.next;
		}
		return removedNode.element;
	}

	this.indexOf = function(element)
	{
		if (this.isEmpty())
		{
			return -1;
		}

		for (let currNode = headNode, currIndex = 0;
			 currNode !== null;
			 currNode = currNode.next, ++currIndex)
		{
			if (currNode.element === element)
			{
				return currIndex;
			}
		}
		return -1;
	}

	this.elementAt = function(index)
	{
		if (this.isEmpty())
		{
			return undefined;
		}
		for (let currNode = headNode, currIndex = 0;
			 currNode !== null;
			 currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				return currNode.element;
			}
		}
		return undefined;
	}

}
*/

/*
 * Class
 * */
//export
class Node
{
	constructor(element, next = null)
	{
		this.element = element;
		this.next = next;
	}
}

//export
class LinkedList
{
	constructor()
	{
		this.headNode = null;
	}
	
	head()
	{
		return this.headNode;
	}
	
	tail()
	{
		let tailNode = this.headNode;
		if (tailNode !== null)
		{
			while (tailNode.next !== null)
			{
				tailNode = tailNode.next;
			}
		}
		return tailNode;
	}
	
	isEmpty()
	{
		return this.headNode === null;
	}
	
	size()
	{
		let size = 0;
		let node = this.headNode;
		while (node !== null)
		{
			node = node.next;
			++size;
		}
		return size;
	}
	
	at(index)
	{
		for (let prevNode = null, currNode = this.headNode, currIndex = 0;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				return prevNode;
			}
		}
		return undefined;
	}
	
	add(element)
	{
		let newNode = new Node(element);
		let tailNode = this.tail();
		if (tailNode === null)
		{
			this.headNode = newNode;
		}
		else
		{
			tailNode.next = newNode;
		}
		
		return this;
	}
	
	addAt(index, element)
	{
		if ((this.isEmpty() && index !== 0)
		 || index < 0 || index > this.size())
		{
			return false;
		}
		
		//for (let prevNode = null, currNode = this.headNode, currIndex = 0;
			 //currNode !== null;
			 //prevNode = currNode, currNode = currNode.next, ++currIndex)
		//{
			//if (currIndex === index)
			//{
				//let newNode = new Node(element, currNode);

				//if (prevNode === null)
				//{
					//this.headNode = newNode;
				//}
				//else
				//{
					//prevNode.next = newNode;
				//}
				//return true;
			//}
		//}
		//return false;
		
		
		let prevNode = this.at(index);
		if (prevNode === undefined)
		{
			return false;
		}
		if (prevNode === null)
		{
			this.headNode = new Node(element, this.headNode);
		}
		else
		{
			prevNode.next = new Node(element, prevNode.next);
		}
		return true;
	}
	
	remove(element)
	{
		if (this.isEmpty())
		{
			return;
		}
		for (let prevNode = null, currNode = this.headNode;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next)
		{
			if (currNode.element === element)
			{
				if (prevNode === null)
				{
					this.headNode = currNode.next;
				}
				else
				{
					prevNode.next = currNode.next;
				}
				break;
			}
		}
	}
	
	removeAt(index)
	{
		if (this.isEmpty()
		 || index < 0 || index >= this.size())
		{
			return null;
		}
		
		//for (let prevNode = null, currNode = this.headNode, currIndex = 0;
			 //currNode !== null;
			 //prevNode = currNode, currNode = currNode.next, ++currIndex)
		//{
			//if (currIndex === index)
			//{
				//let removedNode = currNode;
				
				//if (prevNode === null)
				//{
					//this.headNode = currNode.next;
				//}
				//else
				//{
					//prevNode.next = currNode.next;
				//}
				//return removedNode.element;
			//}
		//}
		//return null;
		
		
		let prevNode = this.at(index);
		if (prevNode === undefined)
		{
			return null;
		}
		let removedNode;
		if (prevNode === null)
		{
			removedNode = headNode;
			this.headNode = this.headNode.next;
		}
		else
		{
			removedNode = prevNode.next;
			prevNode.next = prevNode.next.next;
		}
		return removedNode.element;
	}
	
	indexOf(element)
	{
		if (this.isEmpty())
		{
			return -1;
		}

		for (let currNode = this.headNode, currIndex = 0;
			 currNode !== null;
			 currNode = currNode.next, ++currIndex)
		{
			if (currNode.element === element)
			{
				return currIndex;
			}
		}
		return -1;
	}

	elementAt(index)
	{
		if (this.isEmpty())
		{
			return undefined;
		}
		for (let currNode = this.headNode, currIndex = 0;
			 currNode !== null;
			 currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				return currNode.element;
			}
		}
		return undefined;
	}
	
}


let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
//linkedList.addAt(0, "bird");
console.log(linkedList.head());
