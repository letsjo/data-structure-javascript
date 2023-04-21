// const tree = [];

// input.forEach((number) => {
//   pushNumber(0, number);
// });

// postOrder(0);

// function pushNumber(index, number) {
//   if (tree[index] === undefined) {
//     tree[index] = number;
//     return;
//   }

//   if (tree[index] > number) {
//     return pushNumber(2 * index + 1, number);
//   }

//   if (tree[index] < number) {
//     return pushNumber(2 * index + 2, number);
//   }
// }

// function postOrder(index) {
//   if (tree[2 * index + 1] !== undefined) {
//     postOrder(2 * index + 1);
//   }
//   if (tree[2 * index + 2] !== undefined) {
//     postOrder(2 * index + 2);
//   }
//   console.log(tree[index]);
// }

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new Node(key, value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return null;
    }

    if (node.key === key) {
      return node.value;
    }

    if (node.key > key) {
      return this.searchNode(node.left, key);
    } else {
      return this.searchNode(node.right, key);
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (node.key === key) {
      if (
        node.left === null &&
        node.right === null
      ) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.value = aux.value;
      node.right = this.removeNode(
        node.right,
        aux.key,
      );
      return node;
    }

    if (node.key > key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else {
      node.right = this.removeNode(
        node.right,
        key,
      );
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(
        node.left,
        callback,
      );
      callback(node.key);
      this.inOrderTraverseNode(
        node.right,
        callback,
      );
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(
      this.root,
      callback,
    );
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(
        node.left,
        callback,
      );
      this.preOrderTraverseNode(
        node.right,
        callback,
      );
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(
      this.root,
      callback,
    );
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(
        node.left,
        callback,
      );
      this.postOrderTraverseNode(
        node.right,
        callback,
      );
      callback(node.key);
    }
  }
}

input = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const tree = new BinarySearchTree();

input.forEach((number) => {
  tree.insert(number, number);
});

console.log('preOrderTraverse');

tree.postOrderTraverse((key) => {
  console.log(key);
});

console.log('inOrderTraverse');

tree.inOrderTraverse((key) => {
  console.log(key);
});

console.log('postOrderTraverse');

tree.postOrderTraverse((key) => {
  console.log(key);
});
