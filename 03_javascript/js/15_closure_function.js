//1122

/**
 * 자유변수 Free Variable
 * -함수 지역 범위에서 선언되지 않은 변수
 * -자유변수는 지역변수일수도있고 아닐수있음.
 * -자유변수=지역변수는 아님.
 */
const test1 = () =>
{
    say('홍길동');
}
const hello = "안녕";//전역

/**
 * say함수의 지역변수 name,str1,str2 (매개변수인 name도 지역변수.)
 * 
 * 자유변수:hello
 * 
 * ex)
 * const getFunction_2 = (gretting) =>{
   return (name) => console.log(`${gretting} ${name}`);}
 * console..여기서 gretting이 자유변수 / name은 선언[매개변수]라 아님
 */
const say = (name) => {
    const str1 = `${hello}~,${name}`;
    const str2 = "밥 먹었니?";
    console.log(str1,str2);
}


/**
 * closure 함수
 * -닫힘함수. 
 * -참조하는 "자유변수를 가지고" 외부로부터 닫힌 함수 
 * -함수를 반환하는 과정에서 클로저 함수를 생성할 수 있음.
 */
const test2 = () =>
{   const n = 20;
    const foo2 = foo();//foo를 호출한 결과 foo2
    console.log(foo2);
    foo2(); // = const foo2 = () => console.log(n);

}
const foo = () =>{
    const n = 10;
    return () =>console.log(n); //console.log(n)반환 10과 함께
}

let cnt = 0;

/**
 * 전역카운터
 * :값이 오염됨
 */
const test3 = () =>{
    cnt++;
    document.querySelector("#global-counter").innerHTML =cnt;
}

/**
 * 클로져카운터
 */
const counterMaker = () =>{
    let cnt = 0; //외부에서 접근못하는 변수(지역변수)
    return ()=>{
        cnt++;
        document.querySelector("#closure-counter").innerHTML = cnt;
    }
}
const test4 = counterMaker();


/**
 * 실습문제 클로져 가산기
 */
const test5 = () =>{
    let sum=0;
    return() =>
    {
      const myadder = document.querySelector ("#myadder");
      if(isNaN(myadder.value))return;
      sum+=Number(myadder.value);
      result.innerHTML = sum;
    };
};
const addFunc = test5();