/**
 * 装饰者模式
 * 
 * 装饰者模式可以动态的给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。
 */

/**
 * example
 */
var plane = {
  fire: function () {
    console.log('发射子弹')
  }
}

plane.fire();

var fire1 = plane.fire;
var shot = function () {
  console.log('发射炮弹')
}

plane.fire = function () {
  fire1();
  shot();
}

plane.fire();

