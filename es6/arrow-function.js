// ES5 - 함수 선언문
function sum(a,b) {
    return a + b;
}

// ES5 - 함수표현식
var sum = function(a,b) {
    return a + b;
}

// ES6+ - 함수 표현식(화살표 함수)
var sum = (a, b) => {
    return a + b;
}
var sum = (a, b) => a + b;

// 타입스크립트의 화살표 함수
var sum = (a : number, b : number) : number => {
    return a + b;
}

// basic
() => {...} //메개변수가 없는경우
x => {...} //매개변수가 한개인 경우, 소괄호 생략가능
(x,y) => {...} //매개변수 여러개인 경우, 소과호 생략불가능

// 함수몸체지정
x => {return x * x}
x => x * x

()=>{
    const x = 10;
    return x * x;
}