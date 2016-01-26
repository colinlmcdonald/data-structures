var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowestIndex = 0;
  someInstance.highestIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //loop through the values of someInstance to make sure that something isn't replaced
  this.storage[this.highestIndex] = value;
  this.highestIndex++;
  this.count++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.lowestIndex];
  delete this.storage[this.lowestIndex];
  this.highestIndex--;
  this.count--;

  return dequeued;
}

queueMethods.size = function() {
  return this.count;
}