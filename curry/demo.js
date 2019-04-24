function currying(fn) {
  var slice = Array.prototype.slice,
    _args = slice.call(arguments, 1);
  console.log("_args", _args);
  return function() {
    var _inargs = slice.call(arguments);
    console.log("_inargs", _inargs);
    console.log("_args.concat", _args.concat(_inargs));
    return fn.apply(null, _args.concat(_inargs));
  };
}

function square(i) {
  return i * i;
}

function dubble(i) {
  return (i *= 2);
}

function map(handeler, list) {
  return list.map(handeler);
}

console.log(map(square, [1, 2, 3]));
console.log(map(square, [9, 8, 7]));
console.log(map(dubble, [1, 2, 3]));

/**
 * 使用柯里化改造，来避免每次都重复使用square和dubble函数
 */

var mapSQ = currying(map, square);
var mapDUBBLE = currying(map, dubble);

console.log("mapSQ", mapSQ([10, 9, 8, 7, 6]));
console.log("mapDUBBLE", mapDUBBLE([10, 9, 8, 7, 6]));
