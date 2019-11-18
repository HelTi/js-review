class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }

  push(element) {
    this.dataStore[this.top++] = element
  }

  pop() {
    return this.dataStore.splice(--this.top, 1)
  }

  peek() {
    if (this.top > 0) {
      return this.dataStore[this.top - 1]
    } else {
      return 'Empty'
    }
  }

  length() {
    return this.top
  }

  clear() {
    this.dataStore = []
    this.top = 0
  }
}

let stack = new Stack()

stack.push('A')
stack.push('B')
stack.push('C')

console.log(stack.dataStore)
console.log('pop', stack.pop())
console.log(stack.length(), stack.dataStore)
stack.push('D')
console.log(stack.length(), stack.dataStore)

stack.clear()
console.log(stack.dataStore)
