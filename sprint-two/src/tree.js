var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);


  newTree.value = value;
  newTree.children = {};

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
  this.children['value'] = value;
};

treeMethods.contains = function(target){
  var child = this.children;
  for (var key in child) {
    if (child[key] === target) {
      return true;
    } else {
      return false;
    }
  }
}; 


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0]).to.equal(6);
  });*/