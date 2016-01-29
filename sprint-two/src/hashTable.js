var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
    var storage = this._storage;
    var i = getIndexBelowMaxForKey(k, this._limit);
    var insertionObject = {};
    insertionObject[k] = v;
    //if theres nothing there, insert it
    if (!!!storage.get(i)) {
      this._storage.set(i, insertionObject);
    } else {//move up one and insert it;
      this._storage.set((i+1), insertionObject);
    }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  var index = storage.get(i);
  var index2 = storage.get(1);
  if (index[k] === undefined) {
    return index2[k];
  }
  return index[k];
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};

// 
/*  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
