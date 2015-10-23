var store  = (function() {
  var obj = {};
  obj.addUser = function(user, callback) {
    var item = {};
    if(user.isGuest) {
        alert("Can't save guest");
        return;
    }
    item[user.session] = JSON.stringify(user);
    chrome.storage.local.set(item);
    callback && callback();
  };
  obj.getUser = function(id, callback) {
    var user = chrome.storage.local.get(id);
    user = JSON.parse(user);
    return callback(user);
  };

  obj.getAllUsers = function(callback) {
    var i;
    chrome.storage.local.get(null, function(items) {
      for (i in items) {
        items[i] = JSON.parse(items[i]);
      }
      callback(items);
    });
  };

  return obj;
}());
window.store = store;
