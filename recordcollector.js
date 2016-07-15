var _ = require('lodash');

var RecordCollector = function(name, money) {
  this.name = name;
  this.money = money;
  this.collection = [];
}

RecordCollector.prototype = {
  addRecordToCollection: function(record) {
    this.collection.push(record);
  },
  buyRecord: function(record, recordStore) {
    if (this.money > record.price) {
      this.money -= record.price;
      recordStore.sellRecord(record);
      this.collection.push(record);
    }
  },
  sellRecord: function(record, recordStore) {
    this.collection.splice(_.indexOf(this.inventory, record), 1);
    recordStore.buyRecord(record);
    this.money += record.price;
  }
}

module.exports = RecordCollector;