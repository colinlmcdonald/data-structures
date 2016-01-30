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
