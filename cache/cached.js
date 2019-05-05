/**
 * 把函数执行的结果放进缓存对象中，如果执行函数参数相同，则直接从缓存对象中取得结果
 * vue源码中的cached函数，只能传一个参数.
 * @param {*} fn
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    console.log(cache);
    return hit || (cache[str] = fn(str));
  };
}

var toUpperCase = cached(function(a) {
  return a.toUpperCase();
});

// console.log(toUpperCase("aa"));
// console.log(toUpperCase("bb"));
// console.log(toUpperCase("aa"));

// 可传多参数的cache

function cached2(fn) {
  var cache = Object.create(null);
  return function() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 1) {
      throw new Error("no arguments");
    } else {
      var str = args.join("-");
      console.log(cache);
      return cache[str] || (cache[str] = fn.apply(fn, arguments));
    }
  };
}

var sum = cached2(function(a, b) {
  return a + b;
});

var toUpperCase2 = cached2(function(a) {
  return a.toUpperCase();
});

console.log("sum-----");
console.log(sum(1, 2));
console.log(sum(1, 9));
console.log(sum(1, 2));
console.log(sum(1, 2));

console.log(toUpperCase2("aa"));
console.log(toUpperCase2("bb"));
console.log(toUpperCase2("aa"));
