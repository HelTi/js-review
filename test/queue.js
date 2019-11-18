class Queue {
  constructor() {
    this.data = []
  }

  enqueue(element) {
    this.data.push(element)
  }

  dequeue() {
    return this.data.shift()
  }

  frond() {
    return this.data[0]
  }
  isEmpty() {
    return this.data.length === 0
  }
  size() {
    return this.data.length
  }

  toString() {
    return this.data.toString()
  }
  clear() {
    this.data = []
  }
}

let queue = new Queue()

queue.enqueue('A')
queue.enqueue('B')
queue.enqueue('C')
console.log(queue.data)
queue.dequeue()
console.log(queue.data)
console.log(queue.toString())

// 基数排序
var queues = []
var nums = []
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue()
  nums[i] = Math.floor(Math.random() * 101)
}

console.log(nums)

function distribution(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
    }
  }
}

function collect(queues, nums) {
  var i = 0
  for (var digit = 0; digit < 10; digit++) {
    while (!queues[digit].isEmpty()) {
      nums[i++] = queues[digit].frond()
      queues[digit].dequeue()
    }
  }
}

distribution(nums, queues, 10, 1)
collect(queues, nums)
console.log(nums)
distribution(nums, queues, 10, 10)
collect(queues, nums)
console.log(nums)
