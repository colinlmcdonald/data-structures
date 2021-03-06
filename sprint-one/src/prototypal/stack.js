var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  //someInstance = {storage: {}, count: 0}
  this.storage[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  if (this.count) {
    this.count--;
  };
  return this.storage[this.count];
}

stackMethods.size = function() {
  return this.count;
}