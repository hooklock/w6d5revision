var Record = require('./record.js');
var _ = require('lodash');

var Store = function(name, city){
  this.name = name;
  this.city = city;
};

Store.prototype = {

};

module.exports = Store;
