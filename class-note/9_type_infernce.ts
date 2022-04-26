// 타입 추론 기본 1
var a = 'abc';

function getB(b=10){
    var c = 'h1i';
    return b + c;
}
10 + '10' //1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

//타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value:123,
    tag:123
}

// Best Common Type
var arr = [1, 2, true, true, 'a']