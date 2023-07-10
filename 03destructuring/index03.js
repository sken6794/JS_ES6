let list = [
  {
    num: 1,
    title: 'hello',
    info: ['banana', 'apple'],
    profile: { birth: '20201111', img: 'https://wwww.test.com/1' },
  },
  {
    num: 1,
    title: 'hello',
    info: ['melon', 'orange'],
    profile: { birth: '20201212', img: 'https://wwww.test.com/2' },
  },
];

//두 번째 객체의 title의 값 가져오기
//기존 방법
//console.log(list[1].title); // hello

//구조분해로 가져오기
// list 는 요소를 객체로 가지고 있는 배열임.
//  [, a] 는 배열의 2번째 요소 를 가지고 나온다.
//const [, a] = list;
//console.log(a);

//
// const [, { title }] = list;
// console.log(title); //hello

//const [, { num, title, info }] = list;
//console.log(num, title, info);

// const [, { num: a, title: b, info: c }] = list;
// console.log(a, b, c);

// const [
//   ,
//   {
//     info: [a, b],
//   },
// ] = list;
// console.log(a, b); //melon orange

//첫번째 객체의 profile 안에 있는 birth와 img 값 구조분해 할당
// const [
//   {
//     profile: { birth, img },
//   },
// ] = list;
// console.log(birth, img);

const [
  {
    profile: { birth: a, img: b },
  },
  {
    profile: { birth: c, img: d },
  },
] = list;
console.log(a, b, c, d);
