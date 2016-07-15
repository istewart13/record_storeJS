var RecordCollector = function(name, money) {
  this.name = name;
  this.money = money;
  this.bought = [];
  this.sold = [];
}

module.exports = RecordCollector;