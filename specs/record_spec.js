var Record = require('../record');
var assert = require('chai').assert;

  describe('Record', function(){

    beforeEach(function() {
      record1 = new Record("Bon Iver", "Bon Iver", 7.5);
      record2 = new Record("Gaslight Anthem", "American Slang", 8.5);
      record3 = new Record("Elliott Smith", "Figure 8", 9);
    });

    it('record has a name', function(){
      assert.equal("Bon Iver", record1.artist);
    })

    it('record has a title', function(){
      assert.equal("American Slang", record2.title);
    })

    it('record has a price', function(){
      assert.equal(9, record3.price);
    })

  })



// Implement an OO JS program using the 'new' keyword
// Practice adding methods to objects
// Using JS data structures and loops
// Practice building a TDD program from scratch

// Create a constructor to create Record objects with artist, title, price
// Create some new records
// Create a RecordStore that has a name, city and multiple records in it's inventory
// Give the RecordStore a balance i.e. cash in bank.
// Add some records to your RecordStore.
// Create a method that lists the inventory.
// Create a method so that the RecordStore can sell a record. Adjust the cash in bank to take into account the price of the record sold
// Create a method that reports on the financial situation of the store. Cash and value of inventory.
// Create a RecordCollector (or customer) constructor who can buy and sell records.
// If you choose to, you can use lodash for enumerable functionality.
// Use TDD all the way through!