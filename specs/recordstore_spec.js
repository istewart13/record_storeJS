var RecordStore = require('../recordstore');
var Record = require('../record');
var assert = require('chai').assert;

  describe('Record Store', function(){

    beforeEach(function() {
      recordstore1 = new RecordStore("Fopp", "Glasgow");
      recordstore2 = new RecordStore("Poundland", "Dundee");
      recordstore3 = new RecordStore("HMV", "Edinburgh");
      record1 = new Record("Bon Iver", "Bon Iver", 7.5);
      record2 = new Record("Gaslight Anthem", "American Slang", 8.5);
      record3 = new Record("Elliott Smith", "Figure 8", 9);
    });

    it('record store has a name', function(){
      assert.equal("Fopp", recordstore1.name);
    })

    it('record store has a city', function(){
      assert.equal("Dundee", recordstore2.city);
    })

    it('record store initially has no inventory', function(){
      assert.deepEqual([], recordstore1.inventory);
    })

    it('record store initially has zero balance', function(){
      assert.deepEqual(0, recordstore1.balance);
    })

    it('can add records to recordstore', function(){
      recordstore1.addRecord(record1);
      recordstore1.addRecord(record2);
      assert.deepEqual([{"artist": "Bon Iver", "price": 7.5, "title": "Bon Iver"}, {"artist": "Gaslight Anthem", "price": 8.5, "title": "American Slang"}], recordstore1.inventory);
    })

  })