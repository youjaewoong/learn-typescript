// 함수의 파라미터에 타입을 정의하는 방식
// function sum1(a: number, b: number) {
//     return a+b;
// }
// sum1(10,20);

//함수의 반환 값에 타입을 정의하는 방식
function add2(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a+b;
}

// 함수에 옵셔널 파라미터
function log1(a: string, b?: string) {

}
log1('hello world');
log1('hello ts', 'abc');