const Heap = require('./heap');

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue(priority, value) {
    this.insert(priority, value);
  }

  dequeue() {
    const node = this.remove();
    return node && node.value;
  }

  isEmpty() {
    return this.heap.length <= 0;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(1, '최우선순위');
priorityQueue.enqueue(2, '2순위');
priorityQueue.enqueue(0, '0순위');
priorityQueue.enqueue(3, '3순위');

console.log(priorityQueue.isEmpty());

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue.isEmpty());
