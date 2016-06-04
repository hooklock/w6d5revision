var Record = require('../record');
var assert = require ('chai').assert;

describe("Record", function(){

  beforeEach(function(){
    rec1 = new Record("David Bowie", "Hunky Dory", 9.99);
    rec2 = new Record("David Bowie", "Blackstar", 11.99);
    rec3 = new Record("David Bowie", "Earthling", 5.99);
    rec4 = new Record("Ozzy Osbourne", "Down to Earth", 6.99);
    rec5 = new Record("Goldfrapp", "Supernature", 9.99);
  });

  it("Should have an artist", function(){
    assert.equal("David Bowie", rec1.artist);
  });

  it("Should have a title", function(){
    assert.equal("Earthling", rec3.title);
  });

  it("Should have a price", function(){
    assert.equal(9.99, rec5.price);
  });

});
