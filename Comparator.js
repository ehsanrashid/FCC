export default class Comparator
{
    constructor(compareFunction)
    {
        this.compare = compareFunction
                    || Compare.defaultCompareFunction;
    }

    static defaultCompareFunction (o1, o2)
    {
        return o1 === o2 ?
				0 :
				o1 < o2 ? -1 : 1;
    }
    
    // Returns true if equal, else returns false
    equal (o1, o2)
    {
        return this.compare(o1, o2) === 0;
    }

    lessThan(o1, o2)
    {
        return this.compare(o1, o2) < 0;
    }
  
    greaterThan(o1, o2)
    {
        return this.compare(o1, o2) > 0;
    }

    lessThanOrEqual(o1, o2)
    {
        return this.lessThan(o1, o2)
            || this.equal(o1, o2);
    }

    greaterThanOrEqual(o1, o2)
    {
        return this.greaterThan(o1, o2)
            || this.equal(o1, o2);
    }

    // Flips the compare arguments
    flip()
    {
        const originalCompare = this.compare;
        this.compare = (o1, o2) => originalCompare(o2, o1);
    }
}
