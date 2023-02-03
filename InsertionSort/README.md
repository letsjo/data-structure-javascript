# 🗄️ 삽입정렬(Insertion sort)

![](/InsertionSort/insertion-sort.png)

- 손안의 카드를 정렬하는 방법과 유사하다.
  - 새로운 카드를 기존의 정렬된 카드 사이의 올바른 자리를 찾아 삽입한다.
  - 새로 삽입될 카드의 수만큼 반복하게 되면 전체 카드가 정렬된다.
- 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
- 매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣는다.

# 📊 정렬 알고리즘 시간복잡도 비교

| Name                                                               | Best               | Avg                | Worst              | Run-time |
| ------------------------------------------------------------------ | ------------------ | ------------------ | ------------------ | -------- |
| <span style='background-color: #fff5b1; color:red'>삽입정렬</span> | n                  | n<sup>2</sup>      | n<sup>2</sup>      | 7.438    |
| 선택정렬                                                           | n<sup>2</sup>      | n<sup>2</sup>      | n<sup>2</sup>      | 10.842   |
| 버블정렬                                                           | n<sup>2</sup>      | n<sup>2</sup>      | n<sup>2</sup>      | 22.894   |
| 셸정렬                                                             | n                  | n<sup>1.5</sup>    | n<sup>2</sup>      | 0.056    |
| 퀵정렬                                                             | n log<sub>2</sub>n | n log<sub>2</sub>n | n<sup>2</sup>      | 0.014    |
| 힙정렬                                                             | n log<sub>2</sub>n | n log<sub>2</sub>n | n log<sub>2</sub>n | 0.034    |
| 병합정렬                                                           | n log<sub>2</sub>n | n log<sub>2</sub>n | n<sup>2</sup>      | 0.026    |
