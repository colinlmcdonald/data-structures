

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodeHolder = [];
  this.edgeHolder = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodeHolder.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var holder = this.nodeHolder;
  for (var i = 0; i < holder.length; i++) {
    debugger;
    if (holder[i] === node) {
      return true;
  return false; //why was this returning undefined when the return was in the for loop?
    }
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var holder = this.nodeHolder;
  for (var i = 0; i < holder.length; i++) {
    if (holder[i] === node) {
      holder.splice(i);
    }
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var holder = this.nodeHolder;
  var tempHolder = {};
  tempHolder.fromNode = fromNode;
  tempHolder.toNode = toNode;
  holder.push(tempHolder); 
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var holder = this.nodeHolder;
  var found = false;
  for (var i = 0; i < holder.length; i++) {
    if ((holder[i].fromNode === fromNode) && (holder[i].toNode === toNode) || (holder[i].fromNode === toNode) && (holder[i].toNode === fromNode)) {
      found = true;
    }
  }
  return found;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var holder = this.nodeHolder;
    for (var i = 0; i < holder.length; i++) {
    if (holder[i].fromNode === fromNode) {
      holder.splice(i);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  var holder = this.nodeHolder;
  for (var i = 0; i < holder.length; i++) {
    if (typeof holder[i] !== 'object') {
      cb(holder[i]);
    }
  }
};

var myGraph = new Graph();
myGraph.addNode(9);
console.log(myGraph.contains(9));

/*
 * Complexity: What is the time complexity of the above functions?
 */



