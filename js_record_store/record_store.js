var Record = require('./record.js');
var _ = require('lodash');

var Store = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;
};

Store.prototype = {
 openInventory: function(records){
   this.inventory.push(records);
  this.inventory = _.flatten(this.inventory);
},

addRecord: function(record){
  this.inventory.push(record);
},

sellRecord: function(record){
  result = (this.balance += record.price);
  return result;
},

finStat: function(records){
  value = _.sumBy(this.inventory, function(record) {return record.price;});
  return value;
}

};




module.exports = Store;
