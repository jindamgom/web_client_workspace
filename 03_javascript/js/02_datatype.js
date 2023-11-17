//전역

/**
 * 자바스크립트 자료형
 * -변수의 자료형이 값에 따라 지정됨 (dynamic typing)
 * 
 * 1.undefined
 * 2.string
 * 3.number
 * 4.boolean
 * 5.array
 * 6.object
 * 7.function
 * 
 */
function testType(){
    //지역
    //변수선언 키워드 let/const
    let a; //undefined
    console.log(a,typeof a); //undefined 'undefined'
    a = 100;
    console.log(a,typeof a); //숫자형이됨
    a = 'hello';
    console.log(a,typeof a); //stirng형이 됨

    //const = 상수 = 한 번 지정시 변경불가
    const name = '홍길동';
    console.log(name,typeof name);
    const age =33;
    console.log(age,typeof age);
    const married = true;
    console.log(married,typeof married);
    const arr = [1,2,3,4,5];
    console.log(arr,typeof arr); //타입-object로 나옴

    const obj ={
        username:'honggd',
        passwrod: 1234
    }
    console.log(obj,typeof obj); //타입-object
    
    //함수안에 또 함수를 선언할 수있다~
    function foo(){
        console.log('🥨');
    }
    console.log(foo,typeof foo) //타입-function 얘도 하나의 자료형
}
testType();