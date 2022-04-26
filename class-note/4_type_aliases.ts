// interface Person {
//     name: string;
//     age: number;
// }

type Person1 = {
    name: string;
    age: number;
}

var jaewoong: Person1 = {
    name: '재웅',
    age: 30
}

type MyString = string;
var str2: MyString = 'hello';

type Todo = {id:string; title: string; done: boolean};
function getTodo(todo: Todo) {
    
}