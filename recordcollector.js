var RecordCollector = function(name, money) {
  this.name = name;
  this.money = money;
  this.bought = [];
  this.sold = [];
}

RecordCollector.prototype = {
  buyRecord: function(record, recordStore) {
    if (this.money > record.price) {
      this.money -= record.price;
      recordStore.sellRecord(record);
      this.bought.push(record);
    }
  },
  sellRecord: function() {

  }
}

module.exports = RecordCollector;