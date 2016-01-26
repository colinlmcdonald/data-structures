var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    oldest: 0,
    newest: 0
  };
  var other = [];
  // Implement the methods below
  someInstance.enqueue = function(value){
    for (var key in someInstance) {
      if (!someInstance[storage.newest]) {
        someInstance[storage.newest] = value;
      } else {
        continue;
      }
    }
    storage.newest++;

  };

  someInstance.dequeue = function(){
    var getOut = someInstance[storage.oldest];
    //first in, first out
    //enqueue adds to the back, dequeue takes from the front
    //enqueue is the newest, dequeue is the oldest
    //return oldest of two values && return oldest value after new ones have been added
    //how do i find the oldest value in an object?

/*    other.push(someInstance[storage.oldest]);
    delete someInstance[storage.oldest];
    return other[0];*/
    delete someInstance[storage.oldest];
    //console.log(getOut);
    if (getOut === undefined) {
      getOut = someInstance[storage.newest - 1]
    }
        if (storage.newest) {
      storage.newest--;
    }
    return getOut;
  };

  someInstance.size = function(){
    return (storage.newest - storage.oldest);
  };
  return someInstance;
};
