var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    oldest: 0,
    newest: 0
  };
  // Implement the methods below
  someInstance.enqueue = function(value){
    someInstance[storage.newest] = value;
    storage.newest++;
  };

  someInstance.dequeue = function(){
    //first in, first out
    //enqueue adds to the back, dequeue takes from the front
    //enqueue is the newest, dequeue is the oldest
    //return oldest of two values && return oldest value after new ones have been added
    //how do i find the oldest value in an object?
    if (storage.newest) {
      storage.newest--;
    }
    return someInstance[storage.oldest];
  };

  someInstance.size = function(){
    return (storage.newest - storage.oldest);
  };
  return someInstance;
};


someInstance = {
  0: a,
  1: b,
  2: c
}

oldest: 0
newest: 3