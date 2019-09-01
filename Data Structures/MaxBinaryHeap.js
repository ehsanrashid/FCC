class MaxBinaryHeap
{
    constructor()
    {
        this.values = [];
    }

    insert(val)
    {
        this.values.push(val);
        this.bubbleUp();
        return this;
    }

    bubbleUp()
    {
        if (this.values.length === 1) return;
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (this.values[parentIndex] < this.values[index])
        {
            this.swap(parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    swap(idx1, idx2)
    {
        // Using ES6 method for swapping
        [this.values[idx1], this.values[idx2]] = [
            this.values[idx2],
            this.values[idx1]
        ];
    }

    extractMax()
    {
        // returns the root of the heap, and re-adjusts, "sinks-down", "bubble-downs" the heap
        this.swap(0, this.values.length - 1);
        let root = this.values.pop();
        this.bubbleDown();
        return root;
    }

    bubbleDown()
    {
        let rootIndex = 0;
        let root = this.values[0];
        let index1 = 1;
        let index2 = 2;
        while (this.values[index1] > root
            || this.values[index2] > root)
        {
            let child1 = this.values[index1];
            let child2 = this.values[index2];

            if (child1 > root
             && child2 > root)
            {
                // both greater than root
                if (child1 > child2)
                {
                    this.swap(rootIndex, index1);
                    rootIndex = index1;
                } else
                {
                    this.swap(rootIndex, index2);
                    rootIndex = index2;
                }
            }
            else if (child1 > root)
            {
                // only child1 is greater than root
                this.swap(rootIndex, index1);
                rootIndex = index1;
            }
            else
            {
                // only right Child is greater than root
                this.swap(rootIndex, index2);
                rootIndex = index1;
            }
            index1 = 2 * rootIndex + 1;
            index2 = 2 * rootIndex + 2;

            if (index1 > this.values.length - 1
             && index2 > this.values.length - 1)
            {
                return;
            }

            // We don't need to check for the above commented out condition because in JS
            // undefined > 1 == false.
            // undefined < 1 == false.
            // undefined == or === 1 is false as well,
            // hence no need to check the condition as the while condition will return false if the index exceeds length of the array
        }
    }
}

let h = new MaxBinaryHeap();
h.insert(67)
 .insert(58)
 .insert(65)
 .insert(45)
 .insert(31)
 .insert(40)
 .insert(85)
 .insert(44)
 .insert(15);

console.log(h.extractMax());
console.log(h);