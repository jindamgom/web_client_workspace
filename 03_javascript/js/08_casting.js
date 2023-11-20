/**
 * 산술 연산 시 주의 할 형변환
 * 
 * number + string = string
 * number - string = number | NaN
 * number * string = number | NaN
 * number % string = number | NaN
 * number / string = number | NaN
 */
function test1()
{
    console.log(3 + "3"); //'33'
    console.log(3 - "3"); //0
    console.log(3 * "3"); //9
    console.log(3 / "3"); //1
    console.log(3 % "3"); //0

    console.log(3 - "a"); //nan (not a number)
    console.log(3 * "a"); //nan
    console.log(3 / "a"); //nan
    console.log(3 % "a"); //nan
    console.log(typeof NaN); //number 숫자타입에 nan 키워드가 있다.
}
/**
 * 비교연산자
 * ==타입이 달라도 값(형변환 후 )이 같으면 true 반환
 * != 값이 다르면 true
 * 
 * ★엄격비교연산자
 * === 값/타입이 모두 같아야 true 반환
 * !== 값 또는 타입이 달라야 true 반환
 * 
 * 크기 비교
 * >
 * <
 * >=
 * <=
 * 
 */

function test2()
{
    console.log(3 == "3"); //true
    console.log(3 != "3"); //false

    console.log(3 === "3"); //false
    console.log(3 !== "3"); //true

    //사전등재순
    console.log("a" > "b"); //b는 a보다 크다
    console.log("a" < "b");
    console.log("a" >= "b");
    console.log("a" <= "b");
}

/**
 * 숫자형변환
 * Number() 숫자로 변환. 변환 불가한 문자가 하나라도 있으면 nan반환
 * parseInt() 정수로 변환. 변환 불가한 문자가 있기 전까지 반환
 * parseFloat() 실수로 변환. 변환 불가한 문자가 있기 전까지 반환
 */
function test3()
{
    const num = '123.456';
    console.log(Number(num)); //123.456
    console.log(parseInt(num)); //123
    console.log(parseFloat(num)); //123.456

    const num2 = '123.456원';
    console.log(Number(num2)); //nan
    console.log(parseInt(num2)); //123
    console.log(parseFloat(num2)); //123.456

    const num3 = '$123.456';
    console.log(Number(num3)); //nan
    console.log(parseInt(num3)); //nan
    console.log(parseFloat(num3)); //nan

    //숫자가 아닌 문자열 제거
    const _num3 = num.replace(/[^0-9.]/g,'');
    console.log(_num3); 
    console.log(Number(_num3)); //123.456
    console.log(parseInt(_num3)); //123
    console.log(parseFloat(_num3)); //123.456
}

//계산
//input 의 type이 text,number,range,date,color..등등 
//type이 어떤 것이든 무조건 value는 string 
//input type은 해당 타입 외의 다른 타입의 입력을 방지하는 것 일뿐...
function cal()
{
    //const num1 = document.getElementById("num1").value;
    //const num2 = document.getElementById("num2").value;

    //위처럼 .value값을 변수에 담는것보다,
    //아래처럼 num1Val 변수를 따로 선언하여 값을 담는 용도로 사용하기.
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const num1Val = num1.value;
    const num2Val = num2.value;
    if(isNaN(num1Val) || isNaN(num2Val))
    {
        alert(`유효한 숫자를 입력해주세요....`);
        return;//조기리턴
    }
    const sum = Number(num1Val)+Number(num2Val);
    alert(` ${sum}`);
}

/**
 * Infinity 무한수 
 * -number type
 * -너무 큰 숫자는 표현되지 못하고 infinity로 대체됨.
 * 
 */
function test4()
{
    console.log(10/0); //Infinity
    console.log(10/0 === Infinity); //true
}

/**
 * 논리형으로의 자동형변환
 * -모든 자료형은 boolean으로 평가될 수 있다.
 * -true (값이 있는 것) 123, 45.5 , -100 , "apple", [] , {} , Infinity
 * -false(값이 없는 것) 0, 0.0, "", undefined, null, NaN
 * 
 */
function test5()
{
    //true
    console.log(Boolean(123));
    console.log(Boolean(45.5));
    console.log(Boolean(-100));
    console.log(Boolean("apple"));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(10/0)); //Infi

    //false
    console.log(Boolean(0));
    console.log(Boolean(0.0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(Number("apple"))); //NaN
}