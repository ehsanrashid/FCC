import Comparator from '../../Comparator';

export default class LinkedListNode
{
    constructor(value, next = null)
    {
        this.value = value;
        this.next = next;
    }

    toString(callback)
    {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

export default class LinkedList
{
  
    constructor(comparatorFunction)
    {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(comparatorFunction);
    }

    // puts value at the start of the list
    prepend(value)
    {
        // the current head becomes the next of the new node.
        const newNode = new LinkedListNode(value, this.head);
        
        // if the list is empty, then newNode is both the head and the tail.    
        if (this.head === null
         || this.tail === null)
        {
            this.head = newNode;
            this.tail = newNode
        }
        // if list is not empty, then attach the newNode at the head
        else
        {
            this.head = newNode;
        }
        
        return this;
    }
    // puts value at the end of the list
    append(value)
    {
        const newNode = new LinkedListNode(value, null)

        // if the list is empty, then newNode is both the head and the tail
        if (this.head === null
         || this.tail === null)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        // if list is not empty, then attach the newNode at the tail.
        else
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        return this;
    }

    // delete all occurences of 'value' inside the list
    delete(value)
    {  
        if (this.head === null)
        {
            return null;   // if the list is empty, we cannot delete anything.
        }

        //let deletedNode = null;

        // if we are going to delete the head, then the next differing node must be made the head
        while (this.head !== null
            && this.compare.equal(this.head.value, value))
        {
            //deletedNode = this.head;
            this.head = this.head.next;
        }

        // now the current node will be the last element from the above while loop
        let currNode = this.head;
        if (currNode !== null)
        {
            // if next node is to be deleted, then make next's next to be next
            if (this.compare.equal(currNode.next.value, value))
            {
                //deletedNode = currNode.next;
                currNode.next = currNode.next.next;
            }
            else
            {
                currNode = currNode.next // since the value were not equal, we move on to the next node.
            }

            // check if the tail must be deleted
            if (this.compare.equal(this.tail.value, value))
            {
                this.tail = currNode;
            }
            //return deletedNode;
        }
    }

    find({value = undefined, compare = undefined})
    {
        // we traverse the list, trying to find the matching node, either with the value or with the callback
        if (this.head === null)
        {
            // return null for empty linked-list
            return null;
        }

        let currNode = this.head;  // starting with the current head
        while (currNode !== null)
        {
            // if callback is given, we try tp find a match with it
            if (compare !== undefined
             && compare(currNode.value))
            {
                return currNode;
            }
            // if value is specified, we check by value
            if (value !== undefined
             && this.compare.equal(currNode.value, value))
            {
                return currNode;
            }

            currNode = currNode.next;  // no match -> move on to the next node
        }

        return null;
    }

    deleteTail ()
    {
        const deletedTail = this.tail;
        
        if (this.head === this.tail)
        {
            // there was only one node, which was both head and tail, now the list becomes empty
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        // if there are many nodes in the list
        // traverse to the second last node, remove its connection to the "tail" by removing the "next" link 
        let currNode = this.head;
        while (currNode.next !== null)
        {
            if (currNode.next.next === null)
            {
                currNode.next = null  // removing the link
            }
            else
            {
                currNode = currNode.next;
            }
        }
        // current node will become the tail now.
        this.tail = currNode;
        return deletedTail;
    }

    deleteHead ()
    {
        if (this.head === null)
        {
            return null;
        }

        const deletedHead = this.head;
        // if there is a node after the current head, make it head
        if (this.head.next !== null)
        {
            this.head = this.head.next;
        }
        // if there is no node after the current head, that means the list will now be empty.
        else
        {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    fromArray(values)
    {
        values.array.forEach(value =>
        {
            this.append(value);
            return this;
        });
    }

    toArray ()
    {
        const nodes = [];
        let currNode = this.head;
        while (currNode !== null)
        {
            nodes.push(currNode);
            currNode = currNode.next;
        }
        return nodes;
    }

    reverse ()
    {
        let prevNode = null;
        let nextNode = null;
        let currNode = this.head;
        while (currNode !== null)
        {
            // store the next node
            nextNode = currNode.next;
            // change the "next" of currNode to point to "previous" node
            currNode.next = prevNode;
            // move prevNode & current node one step forward
            prevNode = currNode;
            currNode = nextNode;
        }
        // reset head and tail
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }

    toString(callback)
    {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

}
