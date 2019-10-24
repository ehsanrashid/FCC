class Node
{
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class Stack
{
    constructor()
    {
        this.head = null;
    }

    isEmpty()
    {
        return this.head == null;
    }

    size()
    {
        let size = 0;
        let node = this.head;
        while (node !== null)
        {
            ++size;
            node = node.next;
        }
        return size;
    }

    push(data)
    {
        let newNode = new Node(data);
        if (!this.isEmpty())
        {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this;
    }

    pop()
    {
        if (this.isEmpty())
        {
            return null;
        }
        
        let p = this.head;
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        
        return p;
    }
}

let stack = new Stack();

stack
    .push(1)
    .push(2)
    .push(3);

console.log(stack);

let popped = stack.pop();

console.log(popped);
console.log(stack);