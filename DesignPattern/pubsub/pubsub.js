/**
 * PubSub
 */

var PubSub = {};

var messages = {};
var subUid = -1;


PubSub.subscribe = function (message, func) {
  if (!func) {
    return false;
  }

  if (!messages[message]) {
    messages[message] = [];
  }

  var token = String(++subUid);
  messages[message].push({
    token: token,
    func: func
  });
  return token;
}

PubSub.publish = function (message, args) {
  if (!messages[message]) {
    return false;
  }

  var subscribers = messages[message],
    len = subscribers ? subscribers.length : 0;

  while (len--) {
    subscribers[len].func(message, args);
  }
  return this;
}

PubSub.unsubscribe = function (token) {
  for (var m in messages) {
    if (messages[m]) {
      for (var i = 0, j = messages[m].length; i < j; j++) {
        messages[m].splice(i, 1);
        return token;
      }
    }
  }
}

var emailEvent = function(message,data){
  console.log(message,data)
}

var subscribe1 = PubSub.subscribe('senEmail',emailEvent);

PubSub.publish('senEmail','your email')