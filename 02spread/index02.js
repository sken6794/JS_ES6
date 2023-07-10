let arr = [1, 2, 3];

function sum(x, y, z) {
  return x + y + z;
}

console.log(sum(1, 2, 3)); //6
console.log(sum(arr, 2, 3)); //1,2,323 ??
console.log(sum(...arr)); // 6
console.log(sum(10, 20, ...arr)); //31 => 10,20,1,2,3 이 전달되고 함수는 앞에 10,20,1 만 인식해서 더해줌

console.log('------------------------------------------------');
//가변매개변수
// ... 은 가장 뒤에 선언 되어야 한다.
function sum2(y, ...x) {
  console.log(y);
  console.log(x);
}

sum2(1); //1,[]
sum2(1, 2); //1, [2]
sum2(1, 2, 3); //1,[2,3]

//함수의 default 매개변수
function sum3(x, y = 10, z = 20) {
  return x + y + z;
}
console.log(sum3(...arr));
console.log(sum3(1)); //31
console.log(sum3(1, 2)); //23

//주로 배열에 적용함
console.log(...(arr + 10));
console.log('nodemon 확인');
