class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return parseInt((index - 1) / 2);
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  insert(key, value) {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값 보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리
    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      // 마지막 노드를 루트 노드로 이동
      // 다시 heapifyDown 실행
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    // 루트 노드가 계속 내려갈 곳을 찾는다.
    // 왼쪽 자식 노드가 있다면, 먼저 왼쪽 자식 노드부터 비교한다.
    while (this.getLeftIndex(index) < count) {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);

      // 왼쪽, 오른쪽 자식 노드 중 더 작은 노드를 찾는다.
      // (오른쪽 자식 노드가 있다면)
      const smallerIndex =
        rightIndex < count && this.heap[rightIndex].key < this.heap[leftIndex].key
          ? rightIndex
          : leftIndex;

      // 자식 노드의 키 값이 루트 노드보다 작다면
      // 자식 노드와 루트 노드를 교환한다.
      if (this.heap[smallerIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerIndex];
        index = smallerIndex;
      } else break;
    }

    // break 를 만나 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리
    this.heap[index] = rootNode;
  }
}

module.exports = Heap;
