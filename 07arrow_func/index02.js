//forEach

//forEach (callback (현재값, 인덱스, 현재배열))

const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach((a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// });

arr.forEach((a, b, c) => console.log(a, b, c));
// a b c d e arr의 값들을 순회
// 첫번째 매개변수는 value, 두 번째 매개변수는 index, 세 번째 매개변수는 현재 배열

console.log('----------------------------------------------');
//filter (callback (현재값, 인덱스, 배열)) - callback에 true인 값을 받아서 새로운 배열로 리턴
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let re = list.filter((a, b, c) => {
//   //return true;
//   return a % 2 == 0;
// });

//console.log(re); // (return true) 모든값을 true로 리턴 했기때문에 다 나옴
// retrun a % 2 == 0  => 전달받은 매개변수로 짝수인 값들만 리턴하여 배열을 만들어 리턴

//위의 과정을 한줄로 표현
const re = list.filter((a) => a % 2 == 0);
console.log(re);

// 5보다 큰 수만 filter로 반환
const re2 = list.filter((a) => a > 5);
console.log('5보다 큰 수만 ' + re2);

console.log('--------------------------------------------------');
//map ( callback (현재값, 인덱스, 현재배열))
// const re3 = list.map((a, b, c) => {
//   return '야';
// });
// console.log(re3);

const re3 = list.map((a) => a + 10);
console.log(re3);
