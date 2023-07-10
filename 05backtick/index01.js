let name = '홍길동';
let age = 20;
//console.log('이름은 ' + name + ' 이고, 나이는 ' + age + ' 입니다');
console.log(`이름은 ${name}이고 , 나이는 ${age}입니다.`);

//백틱 안에서는 연산자 사용이 된다.
let num = parseInt(Math.random() * 20); // 0~19

console.log(`이번에 나온 랜덤 수는 ${num}`);
console.log(`이번에 나온 랜덤 수는 ${num % 2 == 0 ? '짝수' : '홀수'}`);

// 10 이상인 경우는 그대로 출력, 10 이하인 경우에는 01,02,03 ... 출력
console.log(`${num >= 10 ? num : '0' + num}`);
console.log(`${num >= 10 ? num : `0${num}`}`); //중첩 백틱 사용가능
