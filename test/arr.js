function mixArr(arr) {
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
}

function shuffle(arr) {
  let m = arr.length;
  while (m > 1) {
    let index = parseInt(Math.random() * m--);
    {
      [arr[index], arr[m]] = [arr[m], arr[index]];
    }
  }

  return arr;
}

var testArr = [1, 22, 34, 56, 78, 22, 1];
// console.log(mixArr(testArr));
// console.log(shuffle(testArr));

function flat(arr) {
  var result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flat(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

const reduceFlat = arr =>
  arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(reduceFlat(cur));
    } else {
      return prev.concat(cur);
    }
  }, []);

var testFlatArr = [1, 2, 3, [11, 22, 33, [111, 222, 333]], 4, 5];
// console.log(flat(testFlatArr));
// console.log(reduceFlat(testFlatArr));

/**
 * 使用reduce
 * @param  {...any} args
 */
function cartesianProduct(...args) {
  return args.reduce((prev, cur) => {
    const arr = [];
    prev.forEach(cp1 => {
      cur.forEach(cp2 => {
        arr.push(`${cp1}-${cp2}`);
      });
    });
    return arr;
  });
}

function cartesianProductV2(...args) {
  let len = args.length;
  if (len <= 1) return args[0];
  let curPos = 0;
  let result = [];
  while (len--) {
    if (result.length === 0) {
      result = args[curPos];
    } else {
      const arr = [];
      result.forEach(prev => {
        args[curPos].forEach(cur => {
          arr.push(`${prev}-${cur}`);
        });
      });
      result = [].concat(arr);
    }
    curPos += 1;
  }

  return result;
}

function cartesianProduct2(arr1, arr2) {
  var result = [];
  arr1.forEach(a1 => {
    arr2.forEach(a2 => {
      result.push(`${a1}-${a2}`);
    });
  });
  return result;
}

//console.log(cartesianProduct([1, 2, 3], ["a", "b", "c"], ["11", "22"]));
console.log(cartesianProductV2([1, 2, 3], ["a", "b", "c"], ["11", "22", "33"]));
