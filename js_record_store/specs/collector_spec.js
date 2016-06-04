var Collector = require('../collector');
var Store = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert;

describe("Collector", function(){

  beforeEach(function(){
    adam = new Collector ("Adam", 500, []);
    rec1 = new Record ("David Bowie", "Earthling", 5.99);
    });

  it("Should be able to buy a record and see balance reduce", function(){
    adam.buyRecord(rec1);
    assert.equal(1, adam.collection.length);
    console.log(adam.collection);
    assert.equal(494.01, adam.balance);
  });

  it("Should be able to sell a record and see balance increase", function(){
    adam.buyRecord(rec1);
    adam.sellRecord(rec1);
    assert.equal(0, adam.collection.length);
    assert.equal(500, adam.balance);
  });
});
