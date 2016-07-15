var RecordCollector = require('../recordcollector');
var RecordStore = require('../recordstore');
var Record = require('../record');
var assert = require('chai').assert;

describe('Record Collector', function(){

  beforeEach(function() {
    recordstore1 = new RecordStore("Fopp", "Glasgow");
    record1 = new Record("Bon Iver", "Bon Iver", 7.5);
    record2 = new Record("Gaslight Anthem", "American Slang", 8.5);
    record3 = new Record("Elliott Smith", "Figure 8", 9);
    recordcollector1 = new RecordCollector("Iain", 85);
    recordcollector2 = new RecordCollector("Boris", 120);
  });

  it('record collector has a name', function(){
    assert.equal("Iain", recordcollector1.name);
  })


});