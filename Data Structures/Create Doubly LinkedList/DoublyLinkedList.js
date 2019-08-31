function Node(data, prev = null, next = null)
{
    this.data = data;
    this.prev = prev;
    this.next = next;
};

function DoublyLinkedList()
{
    this.head = null;
    this.tail = null;

    this.isEmpty = function()
    {
        return this.head === null
            || this.tail === null;
    }

    this.size = function()
    {
        let size = 0;
        if (!this.isEmpty ())
        {
            let head = this.head;
            let tail = this.tail;
            while (true)
            {
                ++size;
                if (head == tail)
                {
                    break;
                }
                ++size;
                if (head.next == tail
                 || tail.prev == head)
                {
                    break;
                }
                head = head.next;
                tail = tail.prev;
            }
        }
        return size;
    }
    
    this.print = function()
    {
        if (this.isEmpty())
        {
            return null;
        }
        else
        {
            var result = new Array();
            var node = this.head;
            while (node !== null)
            {
                result.push(node.data);
                node = node.next;
            }
            return result;
        }
    }

    this.printReverse = function()
    {
        if (this.isEmpty())
        {
            return null;
        }
        else
        {
            var result = new Array();
            var node = this.tail;
            while (node !== null)
            {
                result.push(node.data);
                node = node.prev;
            }
            return result;
        }
    } 

    this.add = function(data)
    {
        let newNode = new Node(data);
        
        if (this.isEmpty())
        {
            this.head = newNode;
        }
        else
        {
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    this.remove = function(data)
    {
        if (this.isEmpty())
        {
            return;
        }

        for (let prevNode = null, currNode = this.head;
             currNode !== null;
             prevNode = currNode, currNode = currNode.next)
        {
            if (currNode.data === data)
            {
                if (prevNode === null)
                {
                    currNode.prev = null; // this.head.prev
                    this.head = currNode.next;
                }
                else
                {
                    prevNode.next = currNode.next;
                    if (currNode.next === null)
                    {
                        this.tail = prevNode;
                        break;
                    }
                    else
                    {
                        currNode.next.prev = prevNode;
                    }
                }
            }
        }
    }

    this.reverse = function()
    {
        /*
        if (this.isEmpty())
        {
            return null;
        }
        else
        {
            const length = this.size();
            let currNode = this.head;
            for (let i = 0; i < length; ++i)
            {
                let prevNode = currNode.prev;
                let nextNode = currNode.next;

                if (prevNode == null)
                {
                    this.tail = currNode;
                    currNode.next = null;
                    currNode.prev = nextNode;
                }
                else if (nextNode == null)
                {
                    this.head = currNode;
                    currNode.prev = null;
                    currNode.next = prevNode;
                }
                else
                {
                    currNode.next = prevNode;
                    currNode.prev = nextNode;
                }

                currNode = nextNode;
            }
        }
        */

        if (this.isEmpty())
        {
            return null;
        }

        let currNode = this.head;
        this.tail = currNode;

        while (currNode !== null)
        {
            let prevNode = currNode.prev;
            currNode.prev = currNode.next;
            currNode.next = prevNode;

            if (currNode.prev !== null)
            {
                currNode = currNode.prev;
            }
            else
            {
                this.head = currNode;
                break;
            }
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(1);
doublyLinkedList.add(3);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.add(3);
doublyLinkedList.add(5);
doublyLinkedList.add(3);
doublyLinkedList.remove(3);

console.log(doublyLinkedList.print().join(''));
console.log(doublyLinkedList.printReverse().join(''));
console.log(doublyLinkedList.size());

