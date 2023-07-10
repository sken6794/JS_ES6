// var a = function () {
//   console.log('a실행');
// };

let a = () => {
  console.log('a실행');
};
a();
//문법 1 - 작성할 코드가 한줄이면 {} 는 생략할 수 있다.
// {} 를 쓰지않으면 기본값 undefind 반환
// {}를 쓰지 않고 구문을 작성하면, 자동으로 리턴값이 된다.

let b = (x) => console.log(x);
b(10); //10
console.log(b(10)); //undefind    => console.log 가 리턴값이 없는 함수여서 콘솔을 콘솔 찍으면 없음

let c = (x) => x + 10; // x+10을 반환하는 함수
console.log(c(10)); //20

console.log('----------------------------------------------------');
//문법2 - 매개변수가 1개라면 () 생략 가능
//let d = y => y + 10;
let d = (y) => y * 10;
console.log(d(3)); //30

let e = (x = 10, y = 20) => x * y;
console.log(e());

console.log('*--------------------------------------------------------*');
//문법3 - 객체를 반환 할때는 () 를 묶어준다.
// let f = () => {
//   return { name: '홍길동' };
// };
let f = () => ({ name: '홍길동' });

console.log(f());
