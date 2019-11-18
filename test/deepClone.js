function deepClone(obj) {
  var result = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    if (typeof key === "object" && key !== null) {
      deepClone(key);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

var testObj = {
  a: "1",
  b: null,
  arr: [
    1,
    2,
    3,
    {
      a: 1
    }
  ]
};

console.log("testObjClone", deepClone(testObj));
