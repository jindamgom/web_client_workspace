
//전역
let a = 10;
console.log(a);
function foo()
{
    //지역
    let b =20;
    console.log(b);
    //전역변수 접근
    a = 30;

 }

        if(true)
        {
            //지역
            let c = 99;
            console.log(c);
        }      
        
        console.log(i);//오류가 발생하는 코드, 그 이하는 실행 되지 않음! 주의!

        let i=0; //전역변수
        for(i=0; i<5; i++) //for문안에서 let i=0로 선언하면 지역변수
        {
            console.log(i);
        }

/**
 * 변수 사용 시 사용 하는 키워드
 * -const : 블럭스코프. 상수 선언시
 * -let : 블럭 스코프. 변수 선언시
 * -var : 함수 스코프(함수 블럭만 인정!if,for문은 인정안함;) 변수 선언시
 * 
 */

function test(){
    var a = 10;
    var a = 20; //문법 오류아님.
    console.log(a);
    const b = 123;
    let c = 1;
    c = 2;
    console.log(c);
    // test is not defined at HTMLButtonElement.onclick
    //let c = 'zz'; //위에 이미 c라는 변수가있어서 선언못함
}