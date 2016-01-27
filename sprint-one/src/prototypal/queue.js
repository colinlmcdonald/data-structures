var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowIndex = 0;
  someInstance.highIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  //1: 'b',
  //highIndex = 1;
  //count = 1;
  this.storage[this.highIndex] = value;
  console.log(this.storage[this.highIndex]);
  this.count++;
  this.highIndex++;
}

queueMethods.dequeue = function() {
  //getThis = 'a'
  var getThis = this.storage[this.lowIndex];
  console.log(getThis);
  //storage {1: 'b'}
  delete this.storage[this.lowIndex];
  this.lowIndex++;
  if (this.count) {
    this.count--;
  }
  return getThis;
}

queueMethods.size = function() {
  return this.count;
}