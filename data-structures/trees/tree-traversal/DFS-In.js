class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value); // create new node
    // no root ? => newNode = new root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root; // store current root
    // looping over tree
    while (true) {
      if (value === current.value) return undefined; // checks for duplicates
      // if root value is greater than new value then
      if (value < current.value) {
        // if there is no value in the left of root then
        if (current.left === null) {
          current.left = newNode; // make that left to new node
          return this;
        }
        current = current.left; // else change root to left
      } else {
        // if value is greater than the main root
        // and there is no value on the right then
        if (current.right === null) {
          current.right = newNode; // make that right to new node
          return this;
        }
        current = current.right; // else change root to right
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(20);
tree.insert(44);
console.log(tree.DFSPostOrder());
console.log(tree.find(44));
console.log(tree);
