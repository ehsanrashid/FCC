class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    // insert(data) {
    //   let newNode = new Node(data);
    //   if (!this.root) return (this.root = newNode);

    //   if (this.root.value < data) {
    //     if (!this.root.right) return (this.root.right = newNode);
    //     return this.root.right.insert(data);
    //   } else {
    //     if (!this.root.left) return (this.root.left = newNode);
    //     return this.root.left.insert(data);
    //   }
    // }

    insert(data)
    {
        let newNode = new Node(data);
        if (!this.root) return (this.root = newNode);
        let currentNode = this.root;
        while (currentNode)
        {
            if (data > currentNode.value)
            {
                if (!currentNode.right) return (currentNode.right = newNode);
                currentNode = currentNode.right;
            } else if (data < currentNode.value)
            {
                if (!currentNode.left) return (currentNode.left = newNode);
                currentNode = currentNode.left;
            } else
            {
                return null;
            }
        }
    }

    find(value)
    {
        if (!this.root) return false;
        let currentNode = this.root;
        while (currentNode)
        {
            if (currentNode.value === value) return true;
            if (value < currentNode.value)
            {
                if (!currentNode.left) return false;
                currentNode = currentNode.left;
            } else
            {
                if (!currentNode.right) return false;
                currentNode = currentNode.right;
            }
        }
    }

    bfs()
    {
        let values = [];
        let q = [];
        if (!this.root) return values;
        q.push(this.root);
        while (q.length > 0)
        {
            let currentNode = q[0];
            values.push(currentNode.value);
            if (currentNode.left) q.push(currentNode.left);
            if (currentNode.right) q.push(currentNode.right);
            q.shift();
        }
        return values;
    }

    dfs_preorder()
    {
        // in preorder we traverse the whole left side of all nodes before traversing the right
        let values = [];
        if (!this.root) return values;
        traverse(this.root);
        return values;

        function traverse(node)
        {
            values.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
    }

    dfs_postorder()
    {
        // in postorder, we "visit" later, first we go all the way down to left, then right, then we visit the parent
        let values = [];
        if (!this.root) return values;
        traverse(this.root);
        return values;

        function traverse(node)
        {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.value);
        }
    }

    dfs_inorder()
    {
        // in "inorder", we traverse the whole left of a node, then we visit the node, then we visit the right side
        // In all these "dfs" traversal techniques, the only difference is when do we "visit" the node

        // in pre-order, we visit the node first, then left, then right;
        // in post-order, we traverse left, then traverse right, then visit node;
        // in in-order, we traverse left, then visit the node, then visit right

        // The only difference, code-wise, is we push the node value into values array

        let values = [];
        if (!this.root) return values;
        traverse(this.root);
        return values;

        function traverse(node)
        {
            if (node.left) traverse(node.left);
            values.push(node.value);
            if (node.right) traverse(node.right);
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(11);
bst.insert(9);
bst.insert(7);
bst.insert(6);
bst.insert(13);
bst.insert(8);

//         10
//     9        12
//   7       11    13
// 6  8
console.log(bst.dfs_inorder());
console.log(bst.dfs_postorder());
console.log(bst.bfs());
console.log(bst);