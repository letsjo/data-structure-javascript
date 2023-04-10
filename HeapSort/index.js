function heapSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapify(arr, i);

    if (arr[0] > arr[i]) {
      swap(arr, 0, i);
    }
  }
  return arr;
}

function heapify(arr, lastIdx) {
  let idx = parseInt(lastIdx / 2) - 1;

  while (idx >= 0) {
    const left = arr[idx * 2 + 1];
    const right = arr[idx * 2 + 2];

    if (left >= right && arr[idx] < left) {
      swap(arr, idx, idx * 2 + 1);
    } else if (right > left && arr[idx] < right) {
      swap(arr, idx, idx * 2 + 2);
    }
    idx--;
  }

  return arr;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const list = [40, 20, 50, 10, 30, 70];

console.log(heapSort(list));
