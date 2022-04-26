// 숫자형
enum Shose {
    Nike,
    Adidas
}
var myShose = Shose.Nike;
console.log(myShose);

// 문자형
enum Shose1 {
    Nike = '나이키',
    Adidas = '아디다스'
}
var myShose1 = Shose1.Nike;
console.log(myShose1);

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);