import LinkedList from './LinkedList';

describe('LinkedList', () => {
    
    it('should create empty linked list', () =>
    {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    });

    it('should add node to the tail of linked list', () =>
    {
        const linkedList = new LinkedList();

        expect(linkedList.head()).toBeNull();
        expect(linkedList.tail()).toBeNull();

        linkedList.addTail(1);
        linkedList.addTail(2);

        expect(linkedList.toString()).toBe('1,2');
        expect(linkedList.tail().next).toBeNull();
    });

    it('should add node to the head of linked list', () =>
    {
        const linkedList = new LinkedList();

        linkedList.addHead(2);
        expect(linkedList.head().toString()).toBe('2');
        expect(linkedList.tail().toString()).toBe('2');

        linkedList.addTail(1);
        linkedList.addHead(3);

        expect(linkedList.toString()).toBe('3,2,1');
    });

    it('should delete node by data from linked list', () =>
    {
        const linkedList = new LinkedList();

        expect(linkedList.delete(5)).toBeNull();

        linkedList.addTail(1);
        linkedList.addTail(1);
        linkedList.addTail(2);
        linkedList.addTail(3);
        linkedList.addTail(3);
        linkedList.addTail(3);
        linkedList.addTail(4);
        linkedList.addTail(5);

        expect(linkedList.head().toString()).toBe('1');
        expect(linkedList.tail().toString()).toBe('5');

        const deletedNode = linkedList.remove(3);
        expect(deletedNode.length).toBe(3);
        expect(linkedList.toString()).toBe('1,1,2,4,5');

        linkedList.remove(3);
        expect(linkedList.toString()).toBe('1,1,2,4,5');

        linkedList.remove(1);
        expect(linkedList.toString()).toBe('2,4,5');

        expect(linkedList.head().toString()).toBe('2');
        expect(linkedList.tail().toString()).toBe('5');

        linkedList.remove(5);
        expect(linkedList.toString()).toBe('2,4');

        expect(linkedList.head().toString()).toBe('2');
        expect(linkedList.tail().toString()).toBe('4');

        linkedList.remove(4);
        expect(linkedList.toString()).toBe('2');

        expect(linkedList.head().toString()).toBe('2');
        expect(linkedList.tail().toString()).toBe('2');

        linkedList.remove(2);
        expect(linkedList.toString()).toBe('');
    });

    it('should delete linked list tail', () =>
    {
        const linkedList = new LinkedList();

        linkedList.addTail(1);
        linkedList.addTail(2);
        linkedList.addTail(3);

        expect(linkedList.head().toString()).toBe('1');
        expect(linkedList.tail().toString()).toBe('3');

        const deletedNode1 = linkedList.removeTail();

        expect(deletedNode1.data).toBe(3);
        expect(linkedList.toString()).toBe('1,2');
        expect(linkedList.head().toString()).toBe('1');
        expect(linkedList.tail().toString()).toBe('2');

        const deletedNode2 = linkedList.removeTail();

        expect(deletedNode2.data).toBe(2);
        expect(linkedList.toString()).toBe('1');
        expect(linkedList.head().toString()).toBe('1');
        expect(linkedList.tail().toString()).toBe('1');

        const deletedNode3 = linkedList.removeTail();

        expect(deletedNode3.data).toBe(1);
        expect(linkedList.toString()).toBe('');
        expect(linkedList.head()).toBeNull();
        expect(linkedList.tail()).toBeNull();
    });

    it('should delete linked list head', () =>
    {
        const linkedList = new LinkedList();

        expect(linkedList.removeHead()).toBeNull();

        linkedList.addTail(1);
        linkedList.addTail(2);

        expect(linkedList.head().toString()).toBe('1');
        expect(linkedList.tail().toString()).toBe('2');

        const deletedNode1 = linkedList.removeHead();

        expect(deletedNode1.data).toBe(1);
        expect(linkedList.toString()).toBe('2');
        expect(linkedList.head().toString()).toBe('2');
        expect(linkedList.tail().toString()).toBe('2');

        const deletedNode2 = linkedList.removeHead();

        expect(deletedNode2.data).toBe(2);
        expect(linkedList.toString()).toBe('');
        expect(linkedList.head()).toBeNull();
        expect(linkedList.tail()).toBeNull();
    });

    it('should be possible to store objects in the list and to print them out', () =>
    {
        const linkedList = new LinkedList();

        const nodeValue1 = { data: 1, key: 'key1' };
        const nodeValue2 = { data: 2, key: 'key2' };

        linkedList.addTail(nodeValue1);
        linkedList.addHead(nodeValue2);

        const nodeStringifier = (data) => `${data.key}:${data.data}`;

        expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
    });

    it('should find node by data', () =>
    {
        const linkedList = new LinkedList();

        expect(linkedList.find({ data: 5 })).toBeNull();

        linkedList.addTail(1);
        expect(linkedList.find({ data: 1 })).toBeDefined();

        linkedList.addTail(2);
        linkedList.addTail(3);

        const node = linkedList.find({ data: 2 });

        expect(node.data).toBe(2);
        expect(linkedList.find({ data: 5 })).toBeNull();
    });

    it('should find node by callback', () =>
    {
        const linkedList = new LinkedList();

        linkedList.addTail({ data: 1, key: 'test1' })
        linkedList.addTail({ data: 2, key: 'test2' })
        linkedList.addTail({ data: 3, key: 'test3' });

        const node = linkedList.find({ callback: data => data.key === 'test2' });

        expect(node).toBeDefined();
        expect(node.data.data).toBe(2);
        expect(node.data.key).toBe('test2');
        expect(linkedList.find({ callback: data => data.key === 'test5' })).toBeNull();
    });

    it('should create linked list from array', () =>
    {
        const linkedList = new LinkedList();
        linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

        expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
    });

    it('should find node by means of custom compare function', () =>
    {
        const comparatorFunction = (o1, o2) =>
        {
            if (o1.customValue < o2.customValue)
            {
                return -1;
            }
            if (o1.customValue > o2.customValue)
            {
                return +1;
            }
            return 0;
        };

        const linkedList = new LinkedList(comparatorFunction);

        linkedList.addTail({ data: 1, customValue: 'test1' })
        linkedList.addTail({ data: 2, customValue: 'test2' })
        linkedList.addTail({ data: 3, customValue: 'test3' });

        const node = linkedList.find({
            data: { data: 2, customValue: 'test2' },
        });

        expect(node).toBeDefined();
        expect(node.data.data).toBe(2);
        expect(node.data.customValue).toBe('test2');
        expect(linkedList.find({ data: 2, customValue: 'test5' })).toBeNull();
    });

    it('should reverse linked list', () =>
    {
        const linkedList = new LinkedList();

        // Add test values to linked list.
        linkedList.addTail(1)
        linkedList.addTail(2)
        linkedList.addTail(3);

        expect(linkedList.toString()).toBe('1,2,3');
        expect(linkedList.head().data).toBe(1);
        expect(linkedList.tail().data).toBe(3);

        // Reverse linked list.
        linkedList.reverse();
        expect(linkedList.toString()).toBe('3,2,1');
        expect(linkedList.head().data).toBe(3);
        expect(linkedList.tail().data).toBe(1);

        // Reverse linked list back to initial state.
        linkedList.reverse();
        expect(linkedList.toString()).toBe('1,2,3');
        expect(linkedList.head().data).toBe(1);
        expect(linkedList.tail().data).toBe(3);
    });
});
