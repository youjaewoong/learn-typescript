function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}
var jaewoong = new Person('재웅', 30); //생성 되었습니다.
console.log(jaewoong);