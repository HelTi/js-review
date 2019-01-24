/**
 * 创建一个接受最多 n 个参数的函数，忽略任何其他参数。使用 Array.prototype.slice（0，n） 方法和 spread 扩展运算符 （…） 调用提供的函数 fn （最多 n 个参数）。
 * @param {*} fn 
 * @param {*} n 
 */
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))
const firstTwoMax = ary(Math.max, 2)
console.log([[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)));