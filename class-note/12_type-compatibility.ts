/** 타입호환 */

// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
//     skill: string;
// }

class Person{
    name: string;
    skill: string;
}

var developer: Developer;
var person: Person;
developer = new Person();
//person = developer;

// 함수
var add = function(a: number) {
    // ...
}
var sum = function(a: number, b: number) {
    // ...
}
sum = add;
// add = sum;

/** 제네릭 호환 */

//값이 없으면 호환이 됨
interface Empty<T> {
    // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

// 값이 있으면 호환이 안됨
interface NotEmpty<T> {
    DATA: T;
}
var notEmpty1: NotEmpty<string>
var notEmpty2: NotEmpty<number>
//notEmpty1 = notEmpty2;
//notEmpty2 = notEmpty1;
