// ! 삽입정렬
function insertionSort(array) {
  let i, j, key;
  for (i = 1; i < array.length; i++) {
    // *기준값을 key 변수에 저장
    key = array[i];

    // 기준값 직전 (i-1) 까지는 모두 정렬이 완료되었다는 가정법 
    // *key값 보다 작거나 같은 값이 나올 때 까지 i-1 부터 뒤로가면서 비교 (key값 자리 찾기)
    for (j = i - 1; j >= 0 && array[j] > key; j--) {
      // *하나씩 인덱스 뒤로 보낸다.
      array[j + 1] = array[j];
    }
    // *key값보다 작거나 같은 값이 나오면 그 위치에 저장
    array[j + 1] = key;
  }
  return array;
}

const dummyArray = Array(100000).fill().map(x => ~~(Math.random() * 100000))

console.time("insertionSort");
const sortedArray = insertionSort(dummyArray)
console.timeEnd("insertionSort");

console.log(sortedArray);