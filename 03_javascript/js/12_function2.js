

/**
 * 나머지 파라메터
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

// const calc = (type,...numbers) =>
// {
//     let result;
//     switch(type)
//     {
//         case 'plus':
//             result = numbers.reduce((agg,n)=>agg+n);
//             break;
//         case "minus":
//             result = numbers.reduce((agg,n)=>agg-n);
//             break;
//         case "multiply":
//             result = numbers.reduce((agg,n)=>agg*n);
//             break;
//         case "divide":
//             result = numbers.reduce((agg,n)=>agg/n);
//             break;
//         case "remain":
//             result = numbers.reduce((agg,n)=>agg%n);
//             break;
//     }
//     return result;
// }

//======다른 버전으로도============
// const calc = (type,...nums) =>
// {
//     return nums.reduce((agg,n)=>{
//         switch(type){
//             //여기에서 return은 내부에서 callback
//             case 'plus': return agg+n;
//             case 'minus': return agg-n;
//             case 'multiply': return agg*n;
//             case 'divide': return agg/n;
//             case 'remain': return agg%n;
//         }
//     });
// }
//===위의 것 구조를 보면 return이 하나임[스위치 문 말고]
//그래서 중괄호와{} return 생략가능.
const calc = (type,...nums) => 
        nums.reduce((agg,n)=>{
        switch(type){
            //여기에서 return은 내부에서 callback
            case 'plus': return agg+n;
            case 'minus': return agg-n;
            case 'multiply': return agg*n;
            case 'divide': return agg/n;
            case 'remain': return agg%n;
        }
    });




    
/**
 * 자바스크립트에서 함수는 1급객체다.
 * -함수는 값이다.
 * -변수에 대입/함수 호출 전달/함수리턴값
 */
const _test7 = () =>{
    const k = () => console.log('🥓');
    //k();
    const m = k; //함수 k를 다시 m에 대입하고
    //console.log(m); //() => console.log('🥓')
    m();  

    //함수를 매개 인자로 사용..
    //runner(k);

    //함수말고 값을 직접 대입해서 호출할수도있음.
    //runner(()=>console.log('🍜'));

    //고기1,2,3,4,..이렇게 출력되게 하기.
    //runner((n)=>console.log(`🍖${n}`));

    //계산기 예제
    console.log(calc2((a,b) => a+b,10,20));
    console.log(calc2((a,b) => a-b,10,20));
    console.log(calc2((a,b) => a*b,10,20));
    console.log(calc2((a,b) => a/b,10,20));
    console.log(calc2((a,b) => a%b,10,20));
};

const runner = (f) => {
  for(let i=0; i<10; i++)
    f(i+1);  
};

//calc2
//f:함수 a,b:인자값
const calc2 = (f,a,b) =>{
    
    console.log(f,a,b);
    return f(a,b);
};

/**
 * 함수를 리턴값으로 사용해보기
 *
 */

const test8 = () =>
{
    //k는 함수다.
    const k = getFunction();
    //const k =()=>console.log('🧁🧁🧁');
    //const k = (text) => console.log(`${text}🧁🧁🧁`);
    //k('디저트먹기');
    k('야!','디저트먹어'); //둘다 출력하려면?
    const friends = ['길동','철수','영희','혁'];
    friends.forEach((name)=>{
        k(name,'디저트먹어');
    });

    const sayHello = getFunction2();
    
    const sayHello2 = getFunction_2('hi');
    //const sayHello2 = (name) => console.log(`Hello ${name}`);
    sayHello2('길동');
    const sayGoodBye = getFunction_2('bye');
    sayGoodBye('길동');

    const noMoney = showMeTheMoney('돈좀 빌려줘ㅠㅠ');
    noMoney('농담곰');
};

const getFunction = () =>{
    return(text1,text2) => console.log(`${text1} ${text2}🧁🧁🧁`);
};

const getFunction2 = () =>{
    return (name) => console.log(`Hello ${name}`);
}

// const getFunction_2 = (gretting) =>{
//     return (name) => console.log(`${gretting} ${name}`);
// }
const getFunction_2 = (gretting) =>
    (name) => console.log(`${gretting} ${name}`);


const showMeTheMoney = (plz) =>{
    return (name) => console.log(`${plz}... ${name}`);
}


/**
 * tagMaker함수를 작성하자.
 * 특정태그를 만드는 함수를 반환
 * 반환된 함수의 태그의 내용을 전달해 호출 가능
 * div#result에 요소를 추가
 */

const test9 = () =>{
    const writeP = tagMaker('p');//p태그메이커
    const writeMark = tagMaker('mark');//p태그메이커
    const writeButton = tagMaker('button');//p태그메이커

    const result = document.querySelector("#result");
    result.innerHTML = writeP('안뇽');
    result.innerHTML += writeMark('밥먹었니?');
    result.innerHTML += writeButton('여기클릭');
};
`<p>안녕</p>`;
const tagMaker = (tagName) => (content) =>`<${tagName}>${content}</${tagName}>`;

