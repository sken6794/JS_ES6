const arr = ['a', 'b', 'c', 'd'];
//기존 방법
/* 
let n1 = arr[0];
let n2 = arr[1]; 
*/
const [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log('-----------');
const [n1, n2, , n4] = arr;
console.log(n1); // a
console.log(n2); // b
console.log(n4); // d
console.log('-----------');
const [k1, k2] = arr;
console.log(k1); // a
console.log(k2); // b
console.log('-----------');

//arr 을 전부 다 반환받음 ( 배열로 )
const [...x] = arr;
console.log(x); // [ 'a', 'b', 'c', 'd' ]
console.log('-----------');

const [x1, x2, ...x3] = arr;
console.log(x1); // a
console.log(x2); // b
console.log(x3); // [c,d]
