let arr = ['a', 'b', 'c'];
//es5
// for (var i in arr) {
//   console.log(i); // 0 1 2 index 번호를 출력
// }

//es6 - java의 향상된 포문 형태
// for (let i of arr) {
//   console.log(i); //index 값이 아닌 arr 의 value 값을 출력
// }

let person = { name: '홍길동', age: 20 };
// for (let i of person) {
//   console.log(i); // person is not iterable 에러 발생 객체는 iterable이 아니다.
// }

console.log('------------------------------------');

//
const list = [
  { name: '홍길동', age: 10 },
  { name: '이순신', age: 20 },
];
for (let i of list) {
  console.log(i); // i 가 순서대로 객체를 받아 옴
}

for (let { name, age } of list) {
  console.log(name); // list 에서 키 값을 받아와서 출력할 수도 있음
  console.log(age);
}
