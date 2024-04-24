// 호이스팅
//action point 1 : 매개변수 다시 쓰기 (엔진은 똑같이 이해한다) 
//action point 2 : 결과 예상하기
//action point 3 : hoisting  적용해본 후 결과를 다시 예상해보기

// function a() {
//    var x;
//    var x;
//    var x;
//    x = 1;
//    console.log(x);
//    console.log(x);
//    x = 2;
//    console.log(x);
//}
// a(1)  // 1, 1, 2

//action point 1 : 결과 값 예상해보기 
//action point 2 : hoisting 적용해본 후 결과를 다시 예상해보기

function a() {
    var b; // 변수 선언부 호이스팅 
    function b() { } // 함수 선언은 전체를 호이스팅 
    console.log(b);
    b = 'bbb'; // 변수의 할당부는 원래 자리에 
    console.log(b);
    console.log(b);
}
a(); // bbb bbb

// 함수 선언문. 함수명 a가 곧 변수명 
// function 정의부만 존재, 할당 명령이 없는 경우 
function a () { /* ... */ } 
a(); // 실행 ok

// 함수표현식. 정의한 function을 별도 변수에 할당하는 경우 
// (1) 익명함수표현식 : 변수명 b가 곧 변수명(일반적 case에요) 
var b = function () { /* ... */ } 
b(); // 실행 ok 