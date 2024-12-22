// Create a sample tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Find the ancestors of node 7
let ancestors = treeAncestors("node 7", root.right.right);

// Print the ancestors
console.log("Ancestors of node 7:", ancestors);
