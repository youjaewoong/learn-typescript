// 타입 단언(type assertion)
var a1;
a1 = 20;
a1 = 'a';
var b = a1 as string;

// DOM API 조작
// <div id="app">hi</div>
var div = document.querySelector('div') as HTMLDivElement; //타입단언
div.innerHTML
