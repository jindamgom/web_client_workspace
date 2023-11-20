/**
 * 
 * String
 * -"",'',``로 리터럴을 감싸서 표현한다.
 * -String 내장 객체에서 제공하는 api를 사용한다.
 * 
 * 
 * 
 */
function test1()
{
    const str = "Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); //길이

    //배열로도 한글자씩(공백포함)확인 가능
    //js에도 charAt 기능을 제공한다.(문자배열 한글자씩)
    // for(let i=0; i<str.length; i++)
    //     console.log(str[i], str.charAt(i));

    console.log(str.toLowerCase()); //모두 소문자로
    console.log(str.toUpperCase()); //모두 대문자로
    //java와 마찬가지로 불변성이라 실제 str의 값이 바뀌진 않음
    console.log(str);//재출력하면 그대로임.

    console.log(str.indexOf('Sam')); //str[6]부터 시작이라 6 출력
    console.log(str.indexOf('Apple')); //0
    console.log(str.lastIndexOf('Apple'));//뒤에서부터 찾아줌 18

    /**
     * substring(start,end)
     * substr(start,length)
     */
    console.log("substring:",str.substring(6,9)); //[6]~[8] //9번 인데스 전까지!!!
    console.log("str:",str.substr(6,3)); //deprecated ㅠㅠ

    /**
     * replace(search,newStr)
     * replaceAll(search,newStr):ecma2021에 추가
     * 현재 ecma버전:2015 (let,const)
     */

    console.log(str.replace('Apple','사과')); //맨 첫번째것만 변환
    console.log(str.replaceAll('Apple','사과'));//모두 변환

    console.log(str.split(' '));//["Apple","Samsung","PineApple"]
}


function test2()
{
    //@실습문제:사용자 입력값에서 알파벳 개수 세기
    /**
     * prompt를 통해 임의의 문자열을 받고 알파벳 개수 출력
     */
    const str = prompt(`문자열을 입력해주세요`);
    const newStr = str.replace(/[^a-zA-Z]/g,'');
    console.log('알파벳은 ',newStr.length,'개입니다.');

    //====================================================
    if(!str)
    {
        //아무것도 입력안하거나 취소 누르면.
        alert("유효한 문자열을 입력해주세요.");
        return;//짧은조건문에 사용못함.
    }
    let cnt = 0; //상수로 선언x 계속 변화(누적)하는 변수니까..
    for(let i=0;i<str.length; i++)
    {
        //console.log(str[i]);
        //java처럼 알파벳==아스키코드 이런게 없어서 범위 연산을 해야한다.
        if(str[i]>="A" && str[i] <="Z")
            cnt++;
        if(str[i]>="a" && str[i] <="z")
            cnt++;
    }
    alert(`입력하신 문자열 ${str}에서 알파벳의 개수는 ${cnt}개 입니다. `);
}

/**
 * Math
 * -random
 * -ceil
 * -round
 * -floor
 * -trunc
 */
function test3(){
    //0.0"이상", 1.0"미만" 실수를 반환.
    //Math.random()*경우의수+최소값
    //java에서는 (int)로 처리했지만 js에선 Math.trunc
    console.log(Math.trunc(Math.random()*10+1)); //1~10사이의 숫자

    
    console.log(Math.ceil(12.34)); //올림 13
    console.log(Math.round(12.5)); //반올림 13
    console.log(Math.floor(12.34)); //내림 12
    console.log(Math.trunc(12.341212122)); //소수점 이하 버림

    console.log(Math.floor(-3.4)); //-4
    console.log(Math.trunc(-3.4)); //-3 

    console.log(Math.round(123.456*100)/100);

}
/**
 * 실습문제: 난수목록 태그 만들고 ,짝수만 컬러 변경하기
 * ul#nums 하위의 li태그에 난수대입[100개]
 * -짝수인 경우 컬러 변경
 * -매번 버튼 클릭시 숫자/컬러가 새로 지정되어야함
 */
function test4()
{
    console.log(Math.trunc(Math.random()*30+1)); //1~30사이의 숫자

    const nums = document.querySelector("#nums");
    console.log(nums);
    
    const n = document.querySelectorAll("ul#nums>li");
    // for(let i=0; i<n.length; i++)
    // {
    //     n[i].innerText = Math.trunc(Math.random()*100+1);
    //     //console.log(n[i].innerText);    
    //     if(Number(n[i].innerText)%2==0)
    //     {
    //         n[i].classList.add("on");
    //     }
    //     else
    //     {
    //         n[i].classList.remove("on");
    //     }
    // }
    //내가한것
    //==========================================
    //강사님리뷰
    for(let i=0; i<n.length; i++)
    {   
        n[i].style.color='black';
        const rnd = Math.trunc(Math.random()*100+1);
        n[i].innerText = rnd;
        rnd % 2 == 0 && (n[i].style.color='hotpink');
    }
}

/**
 * Date
 * -날짜/시각을 관리하는 객체.
 * -기본적으로 시스템 시각을 읽어와서 사용함.
 */
function test5(){
    const now = new Date();//new+생성자 함수 호출!
    console.log(now);
    //한국기준 GMT+0900이라고 출력(표준시보다 9시간 빠르다)

    console.log(now.getFullYear());
    console.log(now.getMonth()+1);//0~11이라 사용하려면 +1
    console.log(now.getDate());

    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    console.log(Date.now()); //UTC time/초(Epoch Time)
    const date = new Date(Date.now()); //UTC time으로 Date객체 생성.
    console.log(date);

    //특정 날짜 & 시각 객체
    const someday = new Date(1999,8,9,12,30); //8월x 9월임. 0-based
    console.log(someday);


}
/**
 * start,end시각을 밀리초로 구해서 차이를 계산한다.
 */
function test6(){
    // const start = Date.now();
    // foo(); //반복문이 1만번 된 것만큼 지연됨
    // const end = Date.now();
    // console.log((end-start),'ms');

    console.time('Test');
    foo();
    console.timeEnd('Test');
}

function foo()
{
    let sum=0;
    for(let i=0; i<100000; i++)
    {
        sum+=i;
    }
    console.log(sum);
}