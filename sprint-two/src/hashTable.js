var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

/*  this._lookUp = function(value) {
      if (value[1] === )
  }*/

};

HashTable.prototype.insert = function(k, v){
    var storage = this._storage;
    var i = getIndexBelowMaxForKey(k, this._limit);
    var insertionArray = [k, v];
    //inserting an array into storage
    //console.log(storage.get(i).length)
    if (storage.get(i) === undefined) {
      storage.set(i, [insertionArray]);
    } else {
      var collision = storage.get(i);
      for (var i = 0; i < collision.length; i++) {
        if (collision[i][0] === k) {
          collision[i] = insertionArray;
        } else {
          collision.push(insertionArray);
        }
      }
      /*storage.set(i, insertionArray);*/
      // console.log(storage.get(i))
    }
    
    //if i in storage already has a value, add k,v into it
    //lookUp is returning the value of each element in the array
/*    storage.each(function(value) {
      if (i.length > 0)
    });*/
};


/*    if (!!!storage.get(i)) {
      this._storage.set(i, insertionObject);
    } else {//move up one and insert it;
      this._storage.set((i+1), insertionObject);*/

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage; 
  var bucket = storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};
/*  var index = storage.get(i);
  var index2 = storage.get(1);
  if (index[k] === undefined) {
    return index2[k];
  }
  return index[k];*/

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};

// looping through our storage
//i need to see if the storage[i] contains our key
//storage[i][0] should acess it, and then check to see if (storage[i][0] === k)
/*  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
