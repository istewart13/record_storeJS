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

  it('record collector has money', function(){
    assert.equal(85, recordcollector1.money);
  })

  it('money reduces when record collector buys a record', function(){
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
    recordstore1.addRecord(record3);
    recordcollector1.buyRecord(record1, recordstore1);
    assert.equal(77.5, recordcollector1.money);
  })

  it('record is transferred when record collector buys a record', function(){
    recordstore1.addRecord(record1);
    recordstore1.addRecord(record2);
    recordstore1.addRecord(record3);
    recordcollector1.buyRecord(record1, recordstore1);
    assert.deepEqual([{"artist": "Bon Iver", "price": 7.5, "title": "Bon Iver"}], recordcollector1.bought);
  })


});