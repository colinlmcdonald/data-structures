var BinarySearchTree = function(value){
  var tree = {};
  _.extend(tree, searchTree);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

  var searchTree = {};

  //takes a value, puts it in correct position
  //if the value of the node we're inserting is greater than, go right, less than, go left
  searchTree.insert = function(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }

    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }

    else {
      return;
    }
  };

  //returns a boolean
  searchTree.contains = function(value) {
    //check to see if this.value is found, if so return true
    var found = false;
    //else we need to recurse
    var recursiveFunction = function(node) {
        if (node === null) {
          return found;
        }
        if (node.value === value) {
          found = true;
          return found;
        }
        if (value < node.value) {
          found = recursiveFunction(node.left);
        }
        if (value > node.value) {
          found = recursiveFunction(node.right);
        }
      
      return found;
    };

    return recursiveFunction(this);

  };

  // which accepts a callback and executes it on every value contained in the tree.
  searchTree.depthFirstLog = function(callback) {
    //loop through the tree
    var recursiveFunction = function(node) {
      for (var key in node) {
        if (key === 'value') {
          callback(node[key]);
        }
        if (typeof node[key] === 'object') {
          recursiveFunction(node[key]);
        }
      }
    }
    return recursiveFunction(this);
  };




/*
 * Complexity: What is the time complexity of the above functions?
 */
