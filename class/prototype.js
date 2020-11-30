// Shape - 父类(superclass)
function Shape(x,y) {
  this.x = x || 0;
  this.y = y || 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - 子类(subclass)
function Rectangle(x,y) {
  Shape.call(this,x,y); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Shape.prototype;
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle(1,2);
var rect2 = new Rectangle(2,3);

console.log(rect,rect2)

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
