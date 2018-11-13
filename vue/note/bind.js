
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;

    return l ?
      l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length
  return boundFn
}

var testP = function(){
  this.name = 'zhu'

  var ins = polyfillBind(childF,this)

  console.log(ins)
}

var childF = function(){
  this.color = 'yellow'
}

