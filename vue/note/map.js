function makeMap(str, expectsLowerCase) {
  var map = Object.create(null)

  var list = str.split(',')
  console.log('list', list)
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  console.log('map', map)

  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()] }
    : function (val) { return map[val] }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);
console.log(isBuiltInTag)

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
console.log(isReservedAttribute('key1'))