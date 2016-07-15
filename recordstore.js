var _ = require('lodash');

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  listInventory: function() {
    var inventoryString = "";
    for (var i = 0; i < this.inventory.length; i++) {
      inventoryString += "Record " + (i + 1) + ":\n"
      inventoryString += this.inventory[i].artist + " - " + this.inventory[i].title + " - " + this.inventory[i].price + "\n";
    }
    console.log(inventoryString);
    return inventoryString;
  },
  sellRecord: function(record) {
   this.balance += record.price;
   this.inventory.splice(_.indexOf(this.inventory, record), 1);
  },
  storeFinances: function() {
    var financeString = "";
    financeString += "The cash balance is £" + this.balance + "\n. ";
    var inventoryValue = _.sumBy(this.inventory, function(record) {
      return record.price;
    });
    financeString += "The value of inventory is £" + inventoryValue;
    return financeString;
  }
}

module.exports = RecordStore;