var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.count = 0;
  newTree.value = value;
  newTree.children = {};
  // debugger;

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.count] = Tree(value);
  this.count++;
};

treeMethods.contains = function(target){ 
  //recursion function
  var found = false;
    var keepSearching = function(node) {
      for (var key in node) {
        if (node[key].value === target) {
          found = true;
          return found;
        } 
        else{ 
          found = keepSearching(node[key].children);
        } 
      }
      return found;
  }

  return keepSearching(this.children);
}; 

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0]).to.equal(6);
  });*/

var ourTree = Tree(7);


ourTree.addChild(11);


console.log(ourTree);

console.log(ourTree.contains(7));

// ourTree.contains(7);

