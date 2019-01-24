/**
 *传入参数时，代码不执行输出结果，而是先记忆起来
 *当传入空的参数时，代表可以进行真正的运算
 * @param {*} fn 
 */
function currying1(fn) {
  let allArgs = []

  return function next() {

    let args = [].slice.call(arguments)
    console.log('arguments', args)
    if (args.length > 0) {
      allArgs = allArgs.concat(args)
    } else {
      return fn.apply(null, allArgs)
    }
  }

}

let add1 = currying1(function () {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
})
add1(1)
add1(2)
console.log(add1())
//console.log(add1(1)(2)(3)())

function currying2(fn) {
  let allArgs = []

  return function next() {
    let args = [].slice.call(arguments)
    if (args.length > 0) {
      allArgs = allArgs.concat(args)
      return next
    } else {
      return fn.apply(null, allArgs)
    }
  }
}

let add2 = currying2(function () {
  let sum = 0
  let args = [].slice.call(arguments)
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum
})

console.log(add2(1)(2)(3)())
