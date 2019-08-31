function LinkedList()
{
	function Node(element, next = null)
	{
		this.element = element;
		this.next = next;
	}

	let head = null;
	
	this.head = function()
	{
		return head;
	}
	this.tail = function()
	{
		let tail = head;
		if (tail !== null)
		{
			while (tail.next !== null)
			{
				tail = tail.next;
			}
		}
		return tail;
	}
	
	this.isEmpty = function()
	{
		return head === null;
	}

	this.size = function()
	{
		let size = 0;
		let node = head;
		while (node !== null)
		{
			node = node.next;
			++size;
		}
		return size;
	}

	this.at = function(index)
	{
		for (let prevNode = null, currNode = head, currIndex = 0;
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
		if (this.isEmpty())
		{
			head = new Node(element);
		}
		else
		{
			this.tail().next = new Node(element);
		}
	};

	this.addAt = function(index, element)
	{
		if ((this.isEmpty() && index !== 0)
		 || index < 0 || index > this.size())
		{
			return false;
		}
		/*
		for (let prevNode = null, currNode = head, currIndex = 0;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				let node = new Node(element, currNode);

				if (prevNode === null)
				{
					head = node;
				}
				else
				{
					prevNode.next = node;
				}
				return true;
			}
		}
		return false;
		*/
		
		let prevNode = this.at(index);
		if (prevNode === null)
		{
			head = new Node(element, head);
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
		for (let prevNode = null, currNode = head;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next)
		{
			if (currNode.element === element)
			{
				if (prevNode === null)
				{
					head = currNode.next;
				}
				else
				{
					prevNode.next = currNode.next;
				}
				break;
			}
		}
	};

	this.removeAt = function(index)
	{
		if (this.isEmpty()
		 || index < 0 || index >= this.size())
		{
			return null;
		}
		
		for (let prevNode = null, currNode = head, currIndex = 0;
			 currNode !== null;
			 prevNode = currNode, currNode = currNode.next, ++currIndex)
		{
			if (currIndex === index)
			{
				let removedNode = currNode;
				
				if (prevNode === null)
				{
					head = currNode.next;
				}
				else
				{
					prevNode.next = currNode.next;
				}
				return removedNode.element;
			}
		}
		return null;
	}

	this.indexOf = function(element)
	{
		if (this.isEmpty())
		{
			return -1;
		}

		for (let currNode = head, index = 0;
			 currNode !== null;
			 currNode = currNode.next, ++index)
		{
			if (currNode.element === element)
			{
				return index;
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
		for (let currNode = head, currIndex = 0;
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
linkedList.addAt(0, "bird");
console.log(linkedList.head());

