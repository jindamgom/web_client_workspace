//test1();
//함수선언식에서는 정상 작동
//함수표현식에서는 오류 발생



/**
 * 함수 선언식
 * -hoisting 처리됨
 * -<script>태그,js파일을 처리시에 함수가 끌어올려져서(hoisting)먼저 등록됨.
 */
// function test1(){
//     console.log("함수 선언식");
// }

//함수선언식, 함수표현식 중에 하나만 쓰기.안그럼 덮어씌워진당
/**
 * 함수 표현식
 * -hoistring 처리 안됨.
 * -변수에 함수라는 값 대입
 * -익명함수 전달(이름이없음)
 */
const test1 = function()
{
    console.log("함수 표현식");
}

/**
 * IIFE
 * -Immediately Invoked Function Expression
 * -즉시 호출 되는 함수 표현식
 * -함수 선언과 호출을 동시에 처리(1회용)
 * -전역변수 노출 대신 지역변수로 처리하기 위한 용도
 */
(function(){
    console.log('😪😯🤐🤐');
    let cnt=0;
})();

//매개변수 선언부 : 매개인자가 담긴 공간 parameter
//매개인자 호출부 : 함수에 전달할 값 argument
(function(text){
    console.log(text);
})('햄버거');

/**
 * 자바스크립트 매개변수 선언과 다르게 매개인자를 전달해도 오류가 나지 않음.
 * argument : 함수의 모든 매개인자를 관리하는 숨은 참조 배열
 */
const test2 = function(){
    foo(10,20);
    foo(10,20,30);
    foo(10);
    foo();
}
const foo = function(m,n){
    console.log(m,n);
    console.log(arguments);
};
/**
 * 모든 자바스크립트 함수에는 리턴값이 있다.
 * 명시하지 않은 경우 undefined가 반환된다..
 * 
 */
const test3 = function()
{
    console.log(bar());
};
const bar = function(){};



/**
 * 화살표 함수
 * -익명함수를 간결하게 작성하는 방법
 * -(매개변수) => {함수 실행부}
 * 
 * -생성자 함수 사용불가..(new로 호출할 수 없다는 것)
 * -함수자체 this가 없고, 부모 this를 가져와 사용.
 * 
 * -함수 표현식에서 사용하는거지 함수 선언식에서 사용하는 것이 아님.
 */
const test4 = function()
{
    console.log(koo(1,2,3));
};

// const koo = (a,b,c)=>{
//     return a+b+c;
// };
//위의 코드를 아래로 표현
//return 구문 한줄만 있을 때 {return} 생략가능
const koo = (a,b,c) =>a+b+c;

// const boo = (b) =>{
//     console.log(b);
// }
//실행구문이 한 줄 뿐일때도 {} 생략가능..
const boo = (b) => console.log(b);


//매개변수가 하나 뿐일때, 소괄호 생략가능
const hoo = h => {  //(h)
    console.log(h);
    console.log(typeof h);
}

/**
 * 나머지 파라메터 Rest Parameter
 * (전개연산자와 같은구조. 하지만 파라메터는 변수이다.)
 * -매개인자 여러개를 배열로 처리
 * -전개연산자와 동일한 모양이지만, 변수 자리에만 사용가능.
 * -일반 매개변수와 혼용시 "마지막"에 한 번만 사용
 */
const test5 = () => {
   // zoo('홍길동','신사임당','세종대왕');
   
   const names = ['홍길동','신사임당','세종대왕'];
   zoo(...names); //전개연산자 매개인자(값)
   zoo('ㅋㅋ','ㅎㅎ');
};

//주의점 ...names,gom 이렇게 바꿔서 인자값 받을 수 없음.
const zoo = (gom,...names) => {  //나머지 파라메터(변수,공간)
    console.log(gom,names);
}


/**
 * 계산기 예제
 * 스위치문도 사용하기
 */
const _test6 = () =>{
    console.log(calc('plus',10,20));
    console.log(calc('minus',30,20));
    console.log(calc('multiply',10,20,30));
    console.log(calc('divide',30,6));
    console.log(calc('remain',10,3));
}
function test6()
{
    console.log("ㅎㅎㅎ");
}


