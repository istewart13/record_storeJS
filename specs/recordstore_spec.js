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

    it('can list all inventory', function(){
      recordstore1.addRecord(record1);
      recordstore1.addRecord(record2);
      assert.equal("Record 1:\nBon Iver - Bon Iver - 7.5\nRecord 2:\nGaslight Anthem - American Slang - 8.5\n", recordstore1.listInventory());
    })

    it('cash balance is updated when inventory is sold', function(){
      recordstore1.addRecord(record1);
      recordstore1.addRecord(record2);
      recordstore1.sellRecord(record1);
      assert.deepEqual(7.5, recordstore1.balance);
    })

    it('item is deleted from inventory when bought', function(){
      recordstore1.addRecord(record1);
      recordstore1.addRecord(record2);
      recordstore1.sellRecord(record1);
      assert.deepEqual("Record 1:\nGaslight Anthem - American Slang - 8.5\n", recordstore1.listInventory());
    })

    it('store finances are reported accurately', function(){
      recordstore1.addRecord(record1);
      recordstore1.addRecord(record2);
      recordstore1.addRecord(record3);
      recordstore1.sellRecord(record1);
      ;
      assert.equal("The cash balance is £7.5\n. The value of inventory is £17.5", recordstore1.storeFinances());
    })

  })