var Store = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert;

describe("Store", function(){

  beforeEach(function(){
    macks = new Store ("Mack's", "Glasgow", [], 1000);
    rec1 = new Record("David Bowie", "Hunky Dory", 9.99);
    rec2 = new Record("David Bowie", "Blackstar", 11.99);
    rec3 = new Record("David Bowie", "Earthling", 5.99);
    rec4 = new Record("Ozzy Osbourne", "Down to Earth", 6.99);
    rec5 = new Record("Goldfrapp", "Supernature", 9.99);
    rec6 = new Record("Pink Floyd", "The Wall", 15.99);
    records = [rec1, rec2, rec3, rec4, rec5, rec6];
  });

  it("Should have a name", function(){
    assert.equal("Mack's", macks.name);
  });

  it("Should have a city", function(){
    assert.equal("Glasgow", macks.city);
  });

  it("Should have an opening balance", function(){
    assert.equal(1000, macks.balance);
  });

  it("should have records in its inventory", function(){
    console.log(macks);
    macks.openInventory(records);
    console.log(macks);
    assert.equal(6, macks.inventory.length);
  });

  it("should be able to add a record to the inventory", function(){
    macks.addRecord(rec6);
    assert.equal(1, macks.inventory.length);
  });

  it("should be able to list the inventory", function(){
    macks = new Store ("Mack's", "Glasgow", [
      {atrist: 'David Bowie', title: 'Hunky Dory', price: 9.99},
      {atrist: 'Ozzy Osbourne', title: 'Down to Earth', price: 6.99},
      {atrist: 'Goldfrapp', title: 'Supernature', price: 9.99},
      {atrist: 'Pink Floyd', title: 'The Wall', price: 15.99},
    ], 1000);
  });

  it("shoud be able to sell a record and increase its balance", function(){
    macks.sellRecord(rec6);
    assert.equal(1015.99, macks.balance);
  });

  it("should be able to return the balance and value of stock", function(){
    macks.openInventory(records);
    // macks.finStat(records);
    assert.equal(1000, macks.balance);
    assert.equal(60.94, macks.finStat());
    // console.log(macks);
  });

});
