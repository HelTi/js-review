function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var head = new Node("head");
  var length = 1;

  this.append = function(item) {
    var currentNode = head;
    var newNode = new Node(item);
    // 如果不是空节点
    while (currentNode) {
      if (currentNode.next == null) {
        currentNode.next = newNode;
        length++;
        break;
      }
      currentNode = currentNode.next;
    }
  };

  this.insert = function(item, target) {
    var newNode = new Node(item);
    var targetNode = this.find(target);
    if (target) {
      newNode.next = targetNode.next;
      targetNode.next = newNode;
      length++;
    }
    return newNode;
  };

  this.remove = function(item) {
    var currentNode = head;
    var preveNode = head;
    while (currentNode) {
      if (currentNode.element == item) {
        preveNode.next = currentNode.next;
        length--;
      }
      preveNode = currentNode;
      currentNode = currentNode.next;
    }
    return item;
  };

  this.find = function(element) {
    var currentNode = head;
    var resultNodeTmp = null;
    while (currentNode) {
      if (currentNode.element == element) {
        resultNodeTmp = currentNode;
      }
      currentNode = currentNode.next;
    }
    return resultNodeTmp;
  };

  this.display = function() {
    var currentNode = head;
    // 不是空节点
    if (currentNode.next != null) {
      // 从不是head的第一个节点
      currentNode = currentNode.next;
      while (currentNode) {
        console.log(currentNode.element);
        currentNode = currentNode.next;
      }
    }
  };

  this.getLength = function() {
    return length;
  };
}

var linkedList = new LinkedList();
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
linkedList.insert("AA", "A");
linkedList.remove("B");
linkedList.append("D");
console.log("find", linkedList.find("AA"));
linkedList.display();
console.log(linkedList.getLength());
