function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  this.front = null;
  this.back = null;
  this.size = 0;

  this.enqueue = function (value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  };

  this.dequeue = function () {
    if (this.size === 0) {
      throw new Error('empty queue');
    }
    const value = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.size === 0) this.back = null;
    return value;
  };

  this.isEmpty = function () {
    return this.size === 0;
  };

  this.peek = function () {
    if (this.size === 0) return null;
    return this.front.value;
  };
}

module.exports = { Queue };