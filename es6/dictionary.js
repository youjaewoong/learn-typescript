// Rest 파라미터
function foo(param, ...rest) {
    console.log(param); //1
    console.log(rest); // [2,3,4,5]
}
console.log(foo(1,2,3,4,5));

// 합계
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue, initialValue
);
console.log(sumWithInitial); // 10

// Spread 연산자
console.log(...[1,2,3]); //1 2 3

// Spread concat
const arr1 = [1,2];
const arr2 = [0, ...arr1, 3, 4];
console.log('Spread concat', arr2); // [0, 1, 2, 3, 4]

const arr3 = [1,2,3,6]
const arr4 = [4,5];
arr3.slice(3, 0, ...arr4)
console.log(arr3);

// 특정 프로퍼티 변경
const changed = {...{x:1, y:2}, y:100};
console.log('특정 프로퍼티 변경', changed); // {x:1, y:100}

// 디스트럭처링
const arr = [1,2,3];
const [one, two, three] = arr;
console.log('디스트럭처링', one, two, three);

// 객체 디스트럭처링
const obj = {firstName: 'Youn', lastName: 'jaewoong'}
const {firstName, lastName} = obj;
console.log('객체 디스트럭처링', firstName, lastName);

// 제네레이터
function* foo() {
    yield 1;
    yield 2;
}
const generator = foo();
for (const val of generator) {
    console.log('제네레이터', val);
}
const arr5= [...foo()];
console.log(arr5);

// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log('filter', result);