/**
 * 짧은 조건문
 * -(조건식) && (실행문) : true 일때만 실행
 * -(조건식) || (실행문) : false 일때만 실행
 * -실행문에는 return문은 작성불가함.(if문을 사용할 것.)
 */

function test1()
{
    //prompt도 input처럼 string을 반환함.
    //콘솔에 파란색:숫자, 검정:문자
    const num = Number(prompt("정수를 입력하세요.",10));
    console.log(num);

    /**
     * true && true ->우항검사
     * true && false ->우항검사
     * false && true
     * false && false
     * ===========================
     * true || true 
     * true || false 
     * false || true ->우항검사
     * false || false ->우항검사
     * 
     * 위의 성질을 이용한 조건문
     */
    num % 2 == 0 && alert("짝수 입니다!");
    num % 2 == 0 || hol();

    if(num % 2 == 0)
        alert("짝수입니다.");
    else
        alert("홀수입니다..");


    //foo라는 id로 검색
    //foo가 없으면 body밑에 태그를 추가하시오.
    //null || (실행문)
    //false || (실행문)
    //두 번째 실행 때는 이제 foo가 존재하므로 또 추가되진 않음.
    //연산자우선순위 때문에 괄호처리할것.
    document.querySelector("#foo") || 
    (document.body.innerHTML +='<div id="foo">🍗🍗🍗🍗🍗🍗</div>');
}
function hol()
{
    alert("홀수 입니다!");
}


/**
 * ||
 * 
 */
function test2()
{
    const a = 10;
    const b = 3;
    //a가 존재해서 true로 평가되면 a를 대입.
    //a가 존재하지 않으면 false로 평가되면 b를 대입.
    const c = a || b;
    console.log(c);

    //#foo 객체 또는 #bar 객체를 변수 some에 대입.
    const some = document.querySelector("#foo") || document.querySelector("#bar");
    //test2부터 실행하면 당연히 null
    //test1부터 실행해서 foo 객체를 만들고 
    //다시 test2를 실행하면 some 변수에 foo가 대입.
    console.log("some은 ",some);
}