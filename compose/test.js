function compose(...funs) {
  if (funs.length === 0) {
    return (arg) => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => (...args) => b(a(...args)));
}

function add6(val) {
  return 6 + val;
}

function fun2(val) {
  return val * 2;
}

let res = compose(add6, fun2);

console.log(res(2));
