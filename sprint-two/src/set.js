var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
//  console.log(this._storage);
};

setPrototype.contains = function(item){
  var storage = this._storage;
  var found = false;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      found = true;
    }
  }
  return found;
};

setPrototype.remove = function(item){
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      storage.splice(i);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
