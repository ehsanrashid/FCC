class Node
{
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
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
            let tailNode = headNode;
            if (tailNode !== null)
            {
                while (tailNode.next !== null)
                {
                    tailNode = tailNode.next;
                }
            }
            return tailNode;
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
            for (let prevNode = null, currNode = headNode, currIndex = 0; currNode !== null; prevNode = currNode, currNode = currNode.next, ++currIndex)
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
                || index < 0 || index > this.size())
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
            for (let prevNode = null, currNode = headNode; currNode !== null; prevNode = currNode, currNode = currNode.next)
            {
                if (currNode.data === data)
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
        };
        this.removeAt = function (index)
        {
            if (this.isEmpty()
                || index < 0 || index >= this.size())
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
            for (let currNode = headNode, currIndex = 0; currNode !== null; currNode = currNode.next, ++currIndex)
            {
                if (currNode.data === data)
                {
                    return currIndex;
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
            for (let currNode = headNode, currIndex = 0; currNode !== null; currNode = currNode.next, ++currIndex)
            {
                if (currIndex === index)
                {
                    return currNode.data;
                }
            }
            return undefined;
        };
        this.toArray = function ()
        {
            if (this.isEmpty())
            {
                return null;
            }
            let array = new Array();
            let node = headNode;
            while (node !== null)
            {
                array.push(node.data);
                node = node.next;
            }
            return array;
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
            ++size;
            node = node.next;
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
         || index < 0 || index > this.size())
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
    
    remove(data)
    {
        if (this.isEmpty())
        {
            return;
        }
        for (let prevNode = null, currNode = this.headNode;
             currNode !== null;
             prevNode = currNode, currNode = currNode.next)
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
    
    indexOf(data)
    {
        if (this.isEmpty())
        {
            return -1;
        }

        for (let currNode = this.headNode, currIndex = 0;
             currNode !== null;
             currNode = currNode.next, ++currIndex)
        {
            if (currNode.data === data)
            {
                return currIndex;
            }
        }
        return -1;
    }

    dataAt(index)
    {
        if (this.isEmpty()
         || index < 0 || index >= this.size())
        {
            return undefined;
        }
        
        for (let currNode = this.headNode, currIndex = 0;
             currNode !== null;
             currNode = currNode.next, ++currIndex)
        {
            if (currIndex === index)
            {
                return currNode.data;
            }
        }
        return undefined;
    }
    
    toArray()
    {
        if (this.isEmpty())
        {
            return null;
        }

        let array = new Array();
        let node = this.headNode;
        while (node !== null)
        {
            array.push(node.data);
            node = node.next;
        }
        return array;
    }

}


//LinkedList.prototype = {
//  add: function (data){}
//  remove: function(data){}
//  addAt: function (index, data){}
//  removeAt: function (index){}
//}

let linkedList = new LinkedList();
linkedList.addTail(1);
linkedList.addTail(2);
linkedList.addHead(3);
linkedList.addTail(4);
linkedList.addTail(5);
//linkedList.addAt(0, "bird");
console.log(linkedList.toArray().join(''));
