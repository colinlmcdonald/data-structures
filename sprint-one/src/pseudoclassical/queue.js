var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.high = 0;
  this.low = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.high] = value;
  this.high++;
  this.count++;
}

Queue.prototype.dequeue = function() {
  var highHolder = this.storage[this.low];
  delete this.storage[this.low];
  if (this.count) {
    this.count--;
  }
  this.low++;
  return highHolder;
}

Queue.prototype.size = function() {
  return this.count;
}

var StorageIsMe = new Queue();