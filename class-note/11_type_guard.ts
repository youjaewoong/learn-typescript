interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'}
}
var tony = introduce();
console.log(tony.skill); //유니온 타입을 쓸수있는 방법은?


if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

//타입가드 정의 is 키워드
function isDevloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDevloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}