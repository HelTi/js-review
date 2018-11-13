/**
 * Remove an item from an array
 */
function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * 检测对象自身属性
 */
var hasOwnProperty = Object.prototype.hasOwnProperty

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

console.log('haso',hasOwn({a:2},'a'))