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
    //if the value we're inputting is less than the initial value, and this.left is undefined


    //problem is my recursion is writing over all my values
/*    var recursiveFunction = function(node) {
      //loop 
      for (var key in node) {
        if (value < node[key]) {
          if (node[key] === null) {
            node.left = BinarySearchTree(value);
          } 
          else {
            recursiveFunction(node.left);
          }
        }
        if (value > node[key]) {
          if (node[key] === null) {
            node.right = BinarySearchTree(value);
          } else {
            recursiveFunction(node.right);
          }
        }
      }
    };*/

    if (value < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
       // recursiveFunction(this.left);
      }
    }

    if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
        //recursiveFunction(this.right);
      }
    }

    else {
      return;
    }

    console.log(this);
  };

  //returns a boolean
  searchTree.contains = function(value) {
    var found = false;
    if (this.value === value) {
      found = true;
    }
    var recursiveFunction = function(node) {
      if (value < this.value) {
        found = recursiveFunction(this.left);
      } else if (value > this.value) {
        found = recursiveFunction(this.right);
      }
    };

    
    return found;

  };

  // which accepts a callback and executes it on every value contained in the tree.
  searchTree.depthFirstLog = function(callback) {

  };




/*
 * Complexity: What is the time complexity of the above functions?
 */
