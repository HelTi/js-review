function orderByWeight(input) {
  let inputToArr = input.split(' ')
  let inputWeight = inputToArr.map(item => {
    console.log('item.split',item.split(''))
    return item.split('').reduce((prev, cur) => {
      console.log(prev, cur)
      return {
        key: prev * 1 + cur * 1,
        value: item
      }
    })
  })
  let inputWeightSort = inputWeight.sort((a, b) => b.key - a.key)
  console.log('inputWeightSort', inputWeightSort)
  return inputWeightSort.map(i => i.value).join(' ')
}

console.log('结果：', orderByWeight('1 11 12 23 45 24 56 89'))
