let obj = { name: '이순신', age: 20 };
/* 기존문법
console.log(obj.name);
console.log(obj['name']);
*/

//구조분해할당
// let { name, age } = obj;
// console.log(name);
// console.log(age);

let { ...x } = obj;
console.log(x);

console.log('--------------------------------------------');

let person = {
  name: '홍길자',
  age: 20,
  job: [1, 2, 3, 4, 5],
};

//name이라는 key를 n 변수로 가지고 나온다.
let { name: n } = person;
console.log(n); //홍길자
console.log('--------------------------------------------');
let { name: n1, age: a1, job: arr } = person;
console.log(n1, a1, arr); // 홍길자, 20, [1,2,3,4,5]
