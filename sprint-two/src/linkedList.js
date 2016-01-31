var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNode = Node(value);
    if (!list.head){
      list.head = currentNode; 
    }

    if (list.tail){
      list.tail.next = currentNode;
    }

    list.tail = currentNode;

    if (list.head.next === null) {
      list.head.next = currentNode;
    }
  };

  list.addToHead = function(value) {
    var offWith = list.head;
    list.head = Node(value);
    list.head.next = offWith;
  };

  list.removeHead = function() {
   var beheadedVal = list.head;
   var currentNode = list.head;
    list.head = currentNode.next,
    currentNode = null;
   return beheadedVal.value;
  };

  list.contains = function(target) {
    if (list.head.value === target){
      return true;
    } 
    var found = false;

    var recursiveFunction = function(currentNode) {
      if (currentNode.value === target){
        found = true;
      } else {
        if (currentNode.next) { 
          list.contains(currentNode.next);
        }
      }
     }
     
     if (list.head.next) {
      recursiveFunction(list.head.next);
     }
     return found;
    };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*Create a doubly-linked-list, with all the methods of your linked list, and add the following properties:
An .addToHead() method which takes a value and adds it to the front of the list.
A .removeTail() method which removes the last node from the list and returns its value.
Note: each node object will need to have a new .previous property pointing to the node behind it (or to null when appropriate); this is what makes it a doubly-linked list.
*/







/*var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    list.tail = new Node(value);
    if (list.head === null) {
      list.head = list.tail;
    }
    if (list.next !== null) {
      list.next = list.count;
      list.count++
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.tail;
    return oldHead;
  };

  list.contains = function(value) {
    var found = false;
    if (list.head.value === value) {
      found = true;
    }
    if (list.tail.value === value) {
      found = true;
    }
    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};*/
/*var LinkedList = function(){
  var list = {};
  list.head = {};
  list.tail = {};
  list.tail.storage = [];


  list.addToTail = function(value){
    this.head.value = this.tail.value;
    this.tail.value = value;
    list.tail.storage.push(value);
  };

  list.removeHead = function(){
    var tail = this.tail.storage;
    for (var i = 0; i < tail.length; i++) {
      if (tail[i] = this.head.value) {
        tail.splice(i);
      }
    }
    delete this.head.value;
    this.head.value = this.tail.value;
    return this.head.value;
  };

  list.contains = function(target){
    var tail = this.tail.storage;
    var itIsThere = false;
    for (var i = 0; i < tail.length; i++) {
      if (tail[i] === target) {
        itIsThere = true;
      } 
    }
    return itIsThere;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
