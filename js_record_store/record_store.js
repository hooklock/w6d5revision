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

  finStat: function(){
  // var total = 0;
  // for (var i = 0; i < this.inventory.length; i++) {
  //   total += this.inventory[i].price;
  // }
  // return total.toFixed(2);
    return _.sumBy(this.inventory, function(record) {return record.price;}).toFixed(2);
  }


// finStat: function sum(inventory){
//   return Object.keys(inventory)
//     .reduce(function(sum, price){
//       return sum + parseFloat(inventory[price]);
//     }, 0);
// }


};




module.exports = Store;
