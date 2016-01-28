var LinkedList = function(){
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
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
