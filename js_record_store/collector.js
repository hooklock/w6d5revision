var Record = require('./record');
var Store = require('./record_store');
var _ = require('lodash');

var Collector = function(name, balance, collection){
  this.name = name;
  this.balance = balance;
  this.collection = collection;
};

Collector.prototype = {
  buyRecord: function(record){
    this.collection.push(record);
    result = (this.balance -= record.price);
    return result;
  },

  sellRecord: function(record){
    this.collection.pop(record);
    result = (this.balance += record.price);
    return result;
  }
};

module.exports = Collector;
