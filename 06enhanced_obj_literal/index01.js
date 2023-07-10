//객체 표현
let name = '홍길동';
let age = 20;
let setName = function () {
  return this.name;
};

const obj = { name: name, age: age, setName: setName };
console.log(obj);

//향상된 오브젝트 리터럴 - 속성과 값이 같으면 1개만 기입
const obj2 = { name, age, setName };
console.log(obj2);
const { name: a, age: b, setName: c } = obj2;
console.log(a, b, c);
console.log('----------------------------------------------------');

//const obj3 = { request: function () {} };
const obj3 = { request() {} };
console.log(obj3);
