class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
    this.front = null;
    this.back = null;
  }

  appendleft(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.back = node;
    } else {
      const tmpNode = this.front;
      tmpNode.prev = node;

      this.front = node;
      node.next = tmpNode;
    }

    this.count += 1;
    return this.count;
  }

  append(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.back = node;
    } else {
      const tmpNode = this.back;
      tmpNode.next = node;

      this.back = node;
      node.prev = tmpNode;
    }

    this.count += 1;
    return this.count;
  }

  popleft() {
    if (this.count === 0) return null;

    const data = this.front.data;

    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return data;
  }

  pop() {
    if (this.count === 0) return null;

    const data = this.back.data;

    if (this.count === 1) {
      this.init();
    } else {
      this.back = this.back.prev;
      this.back.next = null;
      this.count -= 1;
    }

    return data;
  }
}

module.exports = { Deque };
