class Node
{
    constructor(data, prev = null, next = null)
    {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}
/*
class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;

        this.isEmpty = function ()
        {
            return this.head === null
                || this.tail === null;
        };

        this.size = function ()
        {
            let size = 0;
            if (!this.isEmpty())
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
        };

        this.get = function (index)
        {
            let length = this.size();
            if (0 > index || index >= length)
            {
                return null;
            }
            let mid = Math.floor(length / 2);
            if (index <= mid)
            {
                let node = this.head;
                for (let count = 0; count !== index; ++count)
                {
                    node = node.next;
                }
                return node;
            }
            else
            {
                let node = this.tail;
                for (let count = length - 1; count !== index; --count)
                {
                    node = node.prev;
                }
                return node;
            }
        }

        this.set = function (index, data)
        {
            let node = this.get(index);
            if (node === null)
            {
                return false;
            }
            node.data = data;
            return true;
        }

        this.addHead = function (data)
        {
            let newNode = new Node(data);
            if (this.isEmpty())
            {
                this.tail = newNode;
            }
            else
            {
                newNode.next = this.head;
                this.head.prev = newNode;
            }
            this.head = newNode;
        };

        this.addTail = function (data)
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
        };

        this.addAt = function (index, data)
        {
            let length = this.size();
            if (0 > index || index >= length)
            {
                return false;
            }

            if (index === 0)
            {
                this.addHead(data);
                return true;
            }
            if (index === length)
            {
                this.addTail(data);
                return true;
            }

            let newNode = new Node(data);

            let node = this.get(index - 1);
            let nextNode = node.next;

            newNode.next = nextNode;
            nextNode.prev = newNode;
            newNode.prev = node;
            node.next = newNode;
            return true;
        }

        this.remove = function (data)
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
                        this.head = currNode.next;
                        this.head.prev = null;
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
                        currNode = currNode.prev;
                    }
                    
                }
            }
        };

        this.shift = function ()
        {
            if (this.isEmpty())
            {
                return undefined;
            }
            
            let shiftedNode = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            return shiftedNode;
        }

        this.unshift = function (val)
        {
            this.addHead(val);
            return this;
        }

        this.reverse = function ()
        {
            if (this.isEmpty())
            {
                return null;
            }
            //const length = this.size();
            //let currNode = this.head;
            //for (let i = 0; i < length; ++i)
            //{
            //    let prevNode = currNode.prev;
            //    let nextNode = currNode.next;
            //    if (prevNode == null)
            //    {
            //        this.tail = currNode;
            //        currNode.next = null;
            //        currNode.prev = nextNode;
            //    }
            //    else if (nextNode == null)
            //    {
            //        this.head = currNode;
            //        currNode.prev = null;
            //        currNode.next = prevNode;
            //    }
            //    else
            //    {
            //        currNode.next = prevNode;
            //        currNode.prev = nextNode;
            //    }
            //    currNode = nextNode;
            //}

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
        };

        this.toArrayForward = function ()
        {
            if (this.isEmpty())
            {
                return null;
            }
            var array = new Array();
            var node = this.head;
            while (node !== null)
            {
                array.push(node.data);
                node = node.next;
            }
            return array;
        };

        this.toArrayReverse = function ()
        {
            if (this.isEmpty())
            {
                return null;
            }
            var array = new Array();
            var node = this.tail;
            while (node !== null)
            {
                array.push(node.data);
                node = node.prev;
            }
            return array;
        };
    }
}
*/

class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    isEmpty()
    {
        return this.head === null
            || this.tail === null;
    }

    size()
    {
        let size = 0;
        if (!this.isEmpty())
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

    get(index)
    {
        let length = this.size();
        if (0 > index || index >= length)
        {
            return null;
        }
        let mid = Math.floor(length / 2);
        if (index <= mid)
        {
            let node = this.head;
            for (let count = 0; count !== index; ++count)
            {
                node = node.next;
            }
            return node;
        }
        else
        {
            let node = this.tail;
            for (let count = length - 1; count !== index; --count)
            {
                node = node.prev;
            }
            return node;
        }
    }

    set(index, data)
    {
        let node = this.get(index);
        if (node === null)
        {
            return false;
        }
        node.data = data;
        return true;
    }

    addHead(data)
    {
        let newNode = new Node(data);
        if (this.isEmpty())
        {
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
    };

    addTail(data)
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
    };

    addAt(index, data)
    {
        let length = this.size();
        if (0 > index || index >= length)
        {
            return false;
        }

        if (index === 0)
        {
            this.addHead(data);
            return true;
        }
        if (index === length)
        {
            this.addTail(data);
            return true;
        }

        let newNode = new Node(data);

        let node = this.get(index - 1);
        let nextNode = node.next;

        newNode.next = nextNode;
        nextNode.prev = newNode;
        newNode.prev = node;
        node.next = newNode;
        return true;
    }

    remove(data)
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
                    this.head = currNode.next;
                    this.head.prev = null;
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
                    currNode = currNode.prev;
                }
                
            }
        }
    };

    shift()
    {
        if (this.isEmpty())
        {
            return undefined;
        }
        
        let shiftedNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        return shiftedNode;
    }

    unshift(val)
    {
        this.addHead(val);
    }

    reverse()
    {
        if (this.isEmpty())
        {
            return null;
        }
        //const length = this.size();
        //let currNode = this.head;
        //for (let i = 0; i < length; ++i)
        //{
        //    let prevNode = currNode.prev;
        //    let nextNode = currNode.next;
        //    if (prevNode === null)
        //    {
        //        this.tail = currNode;
        //        currNode.next = null;
        //        currNode.prev = nextNode;
        //    }
        //    else
        //    if (nextNode === null)
        //    {
        //        this.head = currNode;
        //        currNode.prev = null;
        //        currNode.next = prevNode;
        //    }
        //    else
        //    {
        //        currNode.next = prevNode;
        //        currNode.prev = nextNode;
        //    }
        //    currNode = nextNode;
        //}

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
    };

    toArrayForward()
    {
        if (this.isEmpty())
        {
            return null;
        }
        var array = new Array();
        var node = this.head;
        while (node !== null)
        {
            array.push(node.data);
            node = node.next;
        }
        return array;
    };

    toArrayReverse()
    {
        if (this.isEmpty())
        {
            return null;
        }
        var array = new Array();
        var node = this.tail;
        while (node !== null)
        {
            array.push(node.data);
            node = node.prev;
        }
        return array;
    };

}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addTail(1);
doublyLinkedList.addHead(3);
doublyLinkedList.addTail(2);
doublyLinkedList.addTail(3);
doublyLinkedList.addHead(4);
doublyLinkedList.addTail(4);
doublyLinkedList.addTail(3);
doublyLinkedList.addTail(5);
doublyLinkedList.addTail(3);
doublyLinkedList.addTail(3);
doublyLinkedList.addAt(2, 6);
console.log(doublyLinkedList.toArrayForward().join(''));
//doublyLinkedList.shift();
//doublyLinkedList.remove(3);
doublyLinkedList.reverse()
console.log(doublyLinkedList.toArrayForward().join(''));
//console.log(doublyLinkedList.toArrayReverse().join(''));
console.log(doublyLinkedList.size());
