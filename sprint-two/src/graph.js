

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodeHolder = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodeHolder['node'] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var holder = this.nodeHolder;
  for (var key in holder) {
    if (holder[key] === node) {
      return true;
    }
  }
  return false; //why was this returning undefined when the return was in the for loop?
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var holder = this.nodeHolder;
  for (var key in holder) {
    if (holder[key] === node) {
      delete holder[key];
    }
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var holder = this.nodeHolder;
  for (var key in holder) {
    if (holder[i] === fromNode) {
      holder[i].edge = toNode;
    }
    if (holder[i] === toNode) {
      holder[i].edge = fromNode;
    }
  }

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var holder = this.nodeHolder;
  var count = 0;
  console.log(holder);
  for (var i = 0; i < holder.length; i++) {
    if (holder[i].edge === toNode) {
      count++;
    }
    if (holder[i].edge === fromNode) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



