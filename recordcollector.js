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
  sellRecord: function() {

  }
}

module.exports = RecordCollector;