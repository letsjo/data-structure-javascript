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
}
