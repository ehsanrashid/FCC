class Node
{
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
    
    toString(stringifier)
    {
        return stringifier ? stringifier(this.data) : `${this.data}`;
    }
    
}

/*
class LinkedList
{
    constructor()
    {
        let headNode = null;

        this.head = function ()
        {
            return headNode;
        };
        this.tail = function ()
        {
            let node = headNode;
            if (node !== null)
            {
                while (node.next !== null)
                {
                    node = node.next;
                }
            }
            return node;
        };

        this.isEmpty = function ()
        {
            return headNode === null;
        };

        this.size = function ()
        {
            let size = 0;
            let node = headNode;
            while (node !== null)
            {
                node = node.next;
                ++size;
            }
            return size;
        };
        this.at = function (index)
        {
            if (this.isEmpty()
             || index < 0 || this.size() < index)
            {
                return null;
            }

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
        };
        this.addHead = function (data)
        {
            let newNode = new Node(data);
            if (!this.isEmpty())
            {
                newNode.next = headNode;
            }
            headNode = newNode;
        };
        this.addTail = function (data)
        {
            let newNode = new Node(data);
            if (this.isEmpty())
            {
                headNode = newNode;
            }
            else
            {
                this.tail().next = newNode;
            }
        };
        this.addAt = function (index, data)
        {
            if ((this.isEmpty() && index !== 0)
             || index < 0 || this.size() < index)
            {
                return false;
            }
            // for (let prevNode = null, currNode = headNode, currIndex = 0;
            //      currNode !== null;
            //      prevNode = currNode, currNode = currNode.next, ++currIndex)
            // {
            //     if (currIndex === index)
            //     {
            //         let newNode = new Node(data, currNode);
            //         if (prevNode === null)
            //         {
            //             headNode = newNode;
            //         }
            //         else
            //         {
            //             prevNode.next = newNode;
            //         }
            //         return true;
            //     }
            // }
            // return false;

            let prevNode = this.at(index);
            if (prevNode === undefined)
            {
                return false;
            }
            if (prevNode === null)
            {
                headNode = new Node(data, headNode);
            }
            else
            {
                prevNode.next = new Node(data, prevNode.next);
            }
            return true;
        };
        this.remove = function (data)
        {
            if (this.isEmpty())
            {
                return;
            }
            for (let prevNode = null, currNode = headNode;
                 currNode !== null;
                 currNode = currNode.next)
            {
                if (currNode.data === data)
                {
                    if (prevNode === null)
                    {
                        this.headNode = currNode.next;
                    }
                    else
                    {
                        prevNode.next = currNode.next;
                    }
                    continue;
                }
                prevNode = currNode;
            }
        };
        this.removeAt = function (index)
        {
            if (this.isEmpty()
             || index < 0 || this.size() <= index)
            {
                return null;
            }

            // for (let prevNode = null, currNode = headNode, currIndex = 0;
            //      currNode !== null;
            //      prevNode = currNode, currNode = currNode.next, ++currIndex)
            // {
            //     if (currIndex === index)
            //     {
            //         let removedNode = currNode;
            //         if (prevNode === null)
            //         {
            //             headNode = currNode.next;
            //         }
            //         else
            //         {
            //             prevNode.next = currNode.next;
            //         }
            //         return removedNode.data;
            //     }
            // }
            // return null;

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
            return removedNode.data;
        };
        this.indexOf = function (data)
        {
            if (this.isEmpty())
            {
                return -1;
            }
            for (let node = headNode, index = 0;
                 node !== null;
                 node = node.next, ++index)
            {
                if (node.data === data)
                {
                    return index;
                }
            }
            return -1;
        };
        this.elementAt = function (index)
        {
            if (this.isEmpty())
            {
                return undefined;
            }
            for (let node = headNode, _index = 0;
                 node !== null;
                 node = node.next, ++_index)
            {
                if (_index === index)
                {
                    return node.data;
                }
            }
            return undefined;
        };

        this.fromArray = function (values)
        {
            values.forEach((value) => this.addTail(value));
        };
        
        this.toArray = function ()
        {
            let nodes = [];
            let node = headNode;
            while (node !== null)
            {
                nodes.push(node.data);
                node = node.next;
            }
            return nodes;
        };

        this.toString = function(stringifier)
        {
            return this.toArray().map(node => node.toString(stringifier)).toString();
        };
    }
}
*/

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
        let node = this.headNode;
        if (node !== null)
        {
            while (node.next !== null)
            {
                node = node.next;
            }
        }
        return node;
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
            ++size;
            node = node.next;
        }
        return size;
    }
    
    at(index)
    {
        if (this.isEmpty()
         || index < 0 || this.size() < index)
        {
           return undefined;
        }
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
    
    addHead(data)
    {
        let newNode = new Node(data);

        if (!this.isEmpty())
        {
            newNode.next = this.headNode;
        }
        this.headNode = newNode;
    }

    addTail(data)
    {
        let newNode = new Node(data);

        if (this.isEmpty())
        {
            this.headNode = newNode;
        }
        else
        {
            this.tail().next = newNode;
        }
    }
    
    addAt(index, data)
    {
        if ((this.isEmpty() && index !== 0)
         || index < 0 || this.size() < index)
        {
            return false;
        }
        
        //for (let prevNode = null, currNode = this.headNode, currIndex = 0;
        //     currNode !== null;
        //     prevNode = currNode, currNode = currNode.next, ++currIndex)
        //{
        //    if (currIndex === index)
        //    {
        //        let newNode = new Node(data, currNode);
        //        if (prevNode === null)
        //        {
        //            this.headNode = newNode;
        //        }
        //        else
        //        {
        //            prevNode.next = newNode;
        //        }
        //        return true;
        //    }
        //}
        //return false;
        
        
        let prevNode = this.at(index);
        if (prevNode === undefined)
        {
            return false;
        }
        if (prevNode === null)
        {
            this.headNode = new Node(data, this.headNode);
        }
        else
        {
            prevNode.next = new Node(data, prevNode.next);
        }
        return true;
    }
    
    removeHead()
    {
        if (this.isEmpty())
        {
            return null;
        }

        const removedHead = this.headNode;
        this.headNode = this.headNode.next;
        return removedHead;
    }
    
    removeTail()
    {
        if (this.isEmpty())
        {
            return null;
        }
        let removedTail = null;
        for (let prevNode = null, currNode = this.headNode;
             currNode !== null;
             prevNode = currNode, currNode = currNode.next)
        {
            if (currNode.next === null)
            {
                removedTail = currNode;
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
        return removedTail;
    }

    remove(data)
    {
        if (this.isEmpty())
        {
            return;
        }
        let deletedNodes = [];
        for (let prevNode = null, currNode = this.headNode;
             currNode !== null;
             currNode = currNode.next)
        {
            if (currNode.data === data)
            {
                deletedNodes.push(currNode);
                if (prevNode === null)
                {
                    this.headNode = currNode.next;
                }
                else
                {
                    prevNode.next = currNode.next;
                }
                continue;
            }
            prevNode = currNode;
        }
        return deletedNodes;
    }
    
    removeAt(index)
    {
        if (this.isEmpty()
         || index < 0 || this.size() <= index)
        {
            return null;
        }
        
        // for (let prevNode = null, currNode = this.headNode, currIndex = 0;
        //      currNode !== null;
        //      prevNode = currNode, currNode = currNode.next, ++currIndex)
        // {
        //     if (currIndex === index)
        //     {
        //         let removedNode = currNode;
        //         if (prevNode === null)
        //         {
        //             this.headNode = currNode.next;
        //         }
        //         else
        //         {
        //             prevNode.next = currNode.next;
        //         }
        //         return removedNode.data;
        //     }
        // }
        // return null;
        
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
        return removedNode.data;
    }
    
    find(data)
    {
        if (this.isEmpty())
        {
            return null;
        }

        for (let node = this.headNode, index = 0;
             node !== null;
             node = node.next, ++index)
        {
            if (node.data === data)
            {
                return node;
            }
        }
        return null;
    }

    indexOf(data)
    {
        if (this.isEmpty())
        {
            return -1;
        }

        for (let node = this.headNode, index = 0;
             node !== null;
             node = node.next, ++index)
        {
            if (node.data === data)
            {
                return index;
            }
        }
        return -1;
    }

    elementAt(index)
    {
        if (this.isEmpty()
         || index < 0 || this.size() <= index)
        {
            return undefined;
        }
        
        for (let node = this.headNode, _index = 0;
             node !== null;
             node = node.next, ++_index)
        {
            if (_index === index)
            {
                return node.data;
            }
        }
        return undefined;
    }
    
    fromArray(values)
    {
        values.forEach((value) => this.addTail(value));
    }

    toArray()
    {
        const nodes = [];
        let node = this.headNode;
        while (node !== null)
        {
            nodes.push(node.data);
            node = node.next;
        }
        return nodes;
    }

    reverse()
    {
        let prevNode = null;
        
        for (let currNode = this.headNode;
             currNode !== null;)
        {
            let nextNode = currNode.next;
            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }
        this.headNode = prevNode;
    }

    toString(stringifier)
    {
        return this.toArray().map(node => node.toString(stringifier)).toString();
    }
}


//LinkedList.prototype = {
//  add: function (data){}
//  remove: function(data){}
//  addAt: function (index, data){}
//  removeAt: function (index){}
//}

let arr = [3, 1, 2, 3, 4, 5, 3, 3, 6];
let linkedList = new LinkedList();
linkedList.fromArray(arr);
// linkedList.addTail(3);
// linkedList.addTail(2);
// linkedList.addTail(3);
// linkedList.addTail(3);
// linkedList.addTail(6);
// linkedList.addTail(3);
// linkedList.addTail(4);
// linkedList.addTail(5);
// linkedList.addHead(3);
// linkedList.addTail(3);
// console.log(linkedList.toString());
console.log(linkedList.remove(3));

console.log(linkedList.size());
console.log(linkedList.toString());

//linkedList.reverse();
// console.log(linkedList.removeHead().data);
// console.log(linkedList.removeHead().data);
// console.log(linkedList.removeTail().data);


console.log(linkedList.size());
console.log(linkedList.toString());
