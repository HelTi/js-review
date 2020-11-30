function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : currying(fn.bind(this, ...args), length - args.length);
  };
}

// Test
const fn = currying(function (a, b, c) {
  console.log([a, b, c]);
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("d", "e", "f"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]

let b = fn("g");
b("f", "g");
