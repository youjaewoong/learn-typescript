// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage('100');

// Union Type
var jaewoong1 : string | number | boolean;

function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Devloper {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

var jaewoong1: string | number | boolean
function askSomeone(someone: Devloper | Person) {
    someone.name;
    //someone.skill
    //someone.age
}

//인터섹션 타입
var capt1: string & number & boolean;
function askSomeone1(someone: Devloper & Person) {
    someone.name;
    someone.skill
    someone.age
}

//모든값을 넣어야함
askSomeone1({name: '캡틴', age:10, skill:'zz'});