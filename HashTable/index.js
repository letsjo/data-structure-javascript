class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);

    if (this.table[index]) {
      for (
        let i = 0;
        i < this.table[index].length;
        i++
      ) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (
        let i = 0;
        i < this.table[index].length;
        i++
      ) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index].length) {
      for (
        let i = 0;
        i < this.table[index].length;
        i++
      ) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`,
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();
ht.set('Canada', 300);
ht.set('France', 100);
ht.set('Spain', 110);

console.log(1, ht.get('France')); // [ 'France', 100 ]
console.log(2, ht.get('Spain')); // [ 'Spain', 110 ]
console.log(3, ht.get('Canada')); // [ 'Canada', 300 ]

console.log(4, ht.remove('Spain')); // true
ht.display();
console.log(5, ht.get('Spain')); // []

ht.set('Spain', 110);
ht.set('ǻ', 192);

console.log(6, ht.get('Spain')); // [ 'Spain', 110 ]
console.log(7, ht.get('ǻ')); // [ 'ǻ', 192 ]
