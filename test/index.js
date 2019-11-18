function add(i) {
  var a = 0;

  return function() {
    a += i;
    console.log(a);
    return a;
  };
}

var add5 = add(5);
var add10 = add(10);

function createIncrement(i) {
  let value = 0;

  function increment() {
    value += i;
    console.log(value);

    return function logValue() {
      const message = "current value is" + value;
      console.log(message);
    };
  }

  return increment;
}

const inc = createIncrement(1);
const bnc = createIncrement(1);

const log = inc();
inc();
inc();
log();
bnc()();

function singleInstance(v = 1) {
  var count = v;

  return {
    getCount: function() {
      return count;
    },
    setCount: function(val) {
      count = val;
    }
  };
}
console.log("###singleInstance###");
const sa = singleInstance();
const sa1 = singleInstance();
sa.setCount(6);
console.log(sa.getCount());
console.log(sa1.getCount());
