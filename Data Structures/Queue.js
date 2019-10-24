class Node
{
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    isEmpty()
    {
        return this.head == null
            || this.tail == null;
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

    enqueue(data)
    {
        let newNode = new Node(data);
        if (this.isEmpty())
        {
            this.head = newNode;
        }
        else
        {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        return this;
    }

    dequeue()
    {
        if (this.isEmpty())
        {
            return null;
        }
        
        let dq = this.head;
        this.head = this.head.next;
        if (this.head === null) this.tail = null;
        
        return dq;
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();
// q.dequeue();
console.log(q.size());
console.log(q);