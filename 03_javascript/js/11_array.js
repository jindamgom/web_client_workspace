/**
 * Array
 * -js배열은 타입지정이 없고, 크기도 제한이 없음.
 * -java의 ArrayList<Object>와 비슷하다..
 * 
 */

function test1()
{
    const arr1 = [1,2,3]; //리터럴로 생성
    const arr2 = new Array(1,2,3); //new 연산자로 생성

    console.log(arr1);
    console.log(arr2);
    console.log(arr1==arr2); //false

    //배열사이즈 외의 인덱스를 참조시 undefined반환.(오류x)
    console.log(arr1[100]);

    //arr1[100].abc(); 
    //Cannot read properties of undefined (reading 'abc');
    //undefined의 속성을 읽을 수 없다.
    //==nullPointException
    //자바와 비슷하게 없는애를 확인하면 null로뜨는데 
    //null인 애의 무언가를 참조하려고 하면 오류발생함(java의 nullstr.length()와 유사)

    arr1[0] *= 100;
    arr1[1] *= 100;
    arr1[2] *= 100;
    console.log(arr1);

    //국영수
    const student = ['농담곰',[100,99,100],[70,100,30]];
    
    const korAvg =(student[1][0]+student[2][0])/2;
    console.log(korAvg);
}   
/**
 * 반복문
 * -for
 * -for in문 : 각 속성명(index)을 매턴에 반환
 * -for of문 : 각 속성값을 매턴에 반환
 */
function test2()
{
    const arr = ['a','b','c','d','e'];

    //for..in문
    for(let index in arr)
    {
        console.log(index,arr[index]);
    }
    
    //for..of문
    for(const value of arr)
    {
        console.log(value); //a,b,c,d,e
    }

}

/**
 * 전개연산자 (Spread Operator)
 *
 */
function test3()
{
    const arr = [1,2,3];
    const arr2 = ['가','나','다'];
    const arr3 = [...arr,...arr2];
    console.log(arr3);
    for(let index in arr3)
    {
        console.log(index,arr3[index]);
    }
}

/**
 * 유사배열(가짜배열)
 * -Array객체를 상속하지 않은 배열 모양만 흉내낸 객체.
 * (index,length 속성만 있다.)
 * -Array객체가 제공하는 다른 메소드는 사용 불가.
 * -getElementsByTagName
 * -getElementByClassName
 * -getElementsByName
 * -querySelectorAll
 *
 */
function test4()
{
    const arr = [1,2,3];
    console.log(arr);
    const buttons = document.getElementsByName("button");
    console.log(buttons);

    arr.map(function(n) {console.log(n);});
    //buttons.map(function (n) {console.log(n)});

    //가짜배열을 진짜배열로 변환하기
    //1.전개연산자
    [...buttons].map(function(b) {console.log(b)});
    //2.Array.from
    Array.from(buttons).map(function(b){console.log(b)});
}

/**
 * -index
 * -lastIndexof
 * -find
 * -findIndex
 * -concat
 * -join
 * -sort
 */
function test5()
{
    //indexOf : 해당 요소의 인덱스 반환 . 존재하지 않을 시 -1 반환
    const arr = ['사과','딸기','귤','멜론','아보카도'];
    console.log(arr.indexOf('멜론')); //3
    console.log(arr.indexOf('바나나')); //-1

    console.log(arr.indexOf('사과'));//0
    console.log(arr.lastIndexOf('사과'));//4
    
    //find:조건에 만족하는 최초의 요소를 반환
    console.log(arr.find(function(fruit){
        //return fruit ==='귤';
        //return fruit.length===4; //아보카도
        return fruit.startsWith('딸'); //딸기

    }));


     //findIndex:조건에 만족하는 최초의 요소의 인덱스를 반환
     console.log(arr.findIndex(function(fruit){
        //return fruit ==='귤';
        //return fruit.length===4; //아보카도
        return fruit.startsWith('딸');//1
        
    }));

    //concat : 두 배열 연결 (immutable)
    const vegitables = ['고구마','감자','오이'];
    const vegifruits = arr.concat(vegitables);

    console.log(vegifruits);

    //그럼 arr과 vegitables는 정말로 합쳐진걸까?
    //아래 로그를 확인해본 결과, 아니다.
    //원본 arr,vegitables를 다시 출력하면 원본 그대로임.(원본 안건들음)
    console.log(arr);
    console.log(vegitables);

    //join<>split
    //해당 배열에 있는 요소들을 하나의 문자열로 합침.(구분자)
    //결과:고구마+감자+오이
    //구분자는 사용자 맘대로 아무거나 사용해도 됨.
    console.log(vegitables.join('+'));

    //reverse (mutable) ->리버스 적용 
    //오이 감자 고구마
    console.log(vegitables.reverse());
    console.log("리버스 결과:",vegitables);

    //sort:오름차순정렬 (mutable)
    const nums = [3,2,1,5,4];
    console.log(nums.sort());
    console.log(nums);

    const names = ["홍길동","고길동","박길동"];
    console.log(names.sort()); //오름차순
    
    //내림차순 정렬(또는 커스텀 정렬) - 정렬 기준함수를 같이 전달해야함
    console.log(nums.sort(function(a,b){
        return b-a; //내림차순 (기존은 return a-b;)
    }));

    //문자열 정렬
    console.log('홍길동'-'고길동'); //nan
    //연산하려고 하면 자동으로 홍길동과 고길동을 숫자로 변환시킨 후 
    //계산하려고 하는데 둘다 숫자로 바꿀 수가 없어서 NaN가 나옴

    console.log('홍길동'>'고길동'); //true
    console.log(names.sort(function(a,b){
        if(a>b) return -1; //자리교환
        if(b<a) return 1;
        return 0;
    }));
}




/**
 * -push | pop |unshift |shift
 * -slice
 * -splice
 */
function test6()
{
    //push : 마지막에 요소 추가
    //pop : 마지막 요소 제거 (반환)
    //unshift : 0번지에 요소 추가
    //shifht : 0번지에 요소 제거 (반환)
    const arr = ['강남','역삼','선릉'];
    arr.push('삼성'); //mutable
    console.log(arr.pop());

    arr.unshift('교대');
    console.log(arr.shift());

    //0번지의 강남을 맨 뒤로 보내고싶을때
    //1.shift로 0번지 제거-반환
    //2.그 요소를 push(맨 뒤에 추가)
    arr.push(arr.shift());

    console.log(arr);

    //slice(start,end) : immutable
    const langs = ['html5','css','javascript','typescript','java'];

    //'javascript','typescript' 두개를 제외하고싶을때
    //2번지부터 4번지 '전'까지 즉, 2와 3번지 제거
    console.log(langs.slice(2,4));
    console.log(langs.slice(3));//3번지부터 끝까지
    console.log(langs.slice()); //전체 복제 (처음인 0부터 끝까지)

    //splice(start,delCnt,newItem1,newItem2,....) : mutable
    //start부터 delCnt개를 삭제하고,새 요소를 추가
    //그리고 삭제된 요소는 배열로 반환됨.

    const alpha = ['a','b','c','d','e'];
    console.log(alpha.splice(1,1,'x','y'));  //삭제된 b반환
    console.log(alpha); //a,x,y,c,d,e
    //요소를 삭제하지 않고 추가 하고싶다면.delCnt를 0으로.
    console.log(alpha.splice(1,0,'k','l','m'));
    console.log(alpha);//['a', 'k', 'l', 'm', 'x', 'y', 'c', 'd', 'e']

    //toString(override)
    console.log(alpha.toString());


}