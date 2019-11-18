var obj = {
  name: "objname",
  sayName: function() {
    console.log(this.name);
  }
};

function say() {
  this.name = "name";
  var sayName = obj.sayName;
  sayName();
}
say();
function bind(context) {}
