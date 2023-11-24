/**
 * 구조 분해 할당
 * -배열/객체의 요소를 손쉽게 변수에 대입하는 방법
 * -배열은 인덱스에 따라, 객체는 속성명에 따라 변수에 대입된다.
 * 
 */
const test1 = () =>{
    const arr = [1,2,3];
    // const a = arr[0];
    // const b = arr[1];
    // const c = arr[2];
    //가 아니고 아래와 같이 처리
    
    // //1. 모두 담기
    // const [a,b,c] = arr;
    // //arr도 배열이기 때문에 const[a,b,c]에 순차적으로 값이 담김
    // console.log(a,b,c);
    
    // //2. 0번지 1번지만 담기
    // const [a,b] = arr;
    // //3. 1번지,2번지만 담기
    // const [,a,b] = arr;
    // //좌항의 const[]는 실제 배열이 아니고 배열arr의 값을 담기위한 포맷일뿐임!

    //자리교환
    let x = 11;
    let y = 9999;
    [x,y] = [y,x];//두 값 바꾸기
    console.log(x,y);
    
    //기본값 지정
    const [l,m,n=100] = [10,20];
    console.log(l,m,n); //10 20 undefined
    //만약 n의 값이 없는경우 기본값을 주고싶다면 위의 n=100 처리.

    //나머지 파라미터(변수)
    const [i,j, ...k] = ['a','b','c','d','e'];
    console.log(i,j,k);
    //i,j는 각각 a,b가 들어가고 나머지 cde는 k배열에 들어감
    
};

/**
 * -매개변수 
 * -리턴값 처리
 */
const test2 = () =>{
    foo(['홍길동',99,89,79]);
    foo(['신사임당',100,100,30]);

    const [sum,diff,product,quotient,remainder] = bar2(30,20); 
    console.log(sum,diff,product,quotient,remainder);

}
//const foo = (arr) =>{
// const foo = ([name,kor,eng,math]) =>{
//     console.log(`${name}학생 : 국(${kor}) 영(${eng}) 수(${math})`);
// }
//foo 다른버전으로도
const foo =([name, ...score])=>{
    const[kor,eng,math] = score;
    console.log(`${name}학생 : 국(${kor}) 영(${eng}) 수(${math})`);
}

const bar = (num1,num2)=>
{
    //num1/num2 trunc
    return ([num1+num2,num1-num2,num1*num2,Math.trunc(num1/num2),num1%num2]);
}; 

//리턴시 1줄일때 {}return 생략가능
const bar2 = (num1,num2)=>
//num1/num2 trunc
([num1+num2,num1-num2,num1*num2,Math.trunc(num1/num2),num1%num2]);


/**
 * 객체 구조분해 할당
 * -객체의 속성명을 통해 속성값을 변수에 대입하는 문법
 * -동일한이름의 속성명을 참조
 * 
 */
const test3 = () =>{
    const obj = {
        a:123,
        b:'Winter',
        c:true
    };
    // const a = obj.a;
    // const b = obj.b;
    // const c = obj.c;
    //위를 아래로.
    //const {a,b,c} = obj;
    //const {b,a} = obj;
    //const {a,b,x='ㅋㅋㅋ'}= obj;

    //변수명을 달리 하는 경우
    const {a:num,b:season,c:bool,d:hi='hi~'} = obj;
    //a라는 이름을 찾아서 num에 담아달란 뜻
    // c is not defined
    console.log(num,season,bool,hi);

    //중첩객체 처리
    const user = {
        id:'honggd',
        name:{
            firstName:'길동',
            lastName:'홍'
        },
        sns:['tiktok','instagram','twitter-x'],
        
    };//변수에 대입되는 값인 경우 끝에 세미콜론찍기.

    // const {
    //     id,
    //     name,
    //     sns
    // } = user;
    // console.log(id,name,sns);
    const{
        id,
        name:{
            firstName : 이름 ,lastName : 성
        },
        sns:[
            mainSns,subSns

        ]
    }=user;
    
    console.log(id,이름,성,mainSns,subSns);

    //나머지 파라미터 : 사용되지 않은 속성을 새 객체로 반환.
    const obj2 = {
        no : 10,
        text : 'ㅋㅋㅋ',
        when : new Date()
    };
    const {no, ...rest} = obj2;
    console.log(no,rest);
    console.log(rest);//ㅋㅋㅋ와 newDate가 담긴 객체



};

/**
 * 함수활용
 * -매개변수부
 * -리턴값처리
 * 
 */
const test4 = () =>{
    const user = {
        id:'honggd',
        name:{
            firstName:'길동',
            lastName:'홍'
        },
        sns:['tiktok','instagram','twitter-x'],};

    printId(user);
    printName(user);
    printSns(user);

    /**
     * description
     */

    const {
        name,
        url,
        tel:[tel1,tel2],
        branches:{
            '강남 지원':{addr : addr1},
            '종로 지원':{addr : addr2},
            '당산 지원':{addr : addr3},
        }
    }=getAcademyInfo();
    console.log(name,url,tel1,tel2,addr1,addr2,addr3);


    //공백있으면 dot 말고 bracket으로 접근해야함
    console.log(`
    교육원명: ${name}
    홈페이지: ${url}
    전화번호: ${tel1}(대표),${tel2}
    지점 1: 강남 지원 ${addr1}
    지점 2: 종로 지원 ${addr2}
    지점 3: 당산 지원 ${addr3}

    `
    )

};
const printId = ({id})=> console.log(id);
const printName = 
({name:{firstName,lastName}})=> console.log(`${lastName}${firstName}`);
const printSns=({sns:[mainSns,subSns,...sns]})=>console.log(mainSns);

//화살표 함수에서 객채 반환
//객체반환하는 경우 소괄호로 감싸기
const getAcademyInfo = ()=>({
    name: "hk정보교육원",
    url : 'https://khacademy.co.kr',
    tel:['010-1234-5678','010-1234-1111'],
    branches:
    {
       '강남 지원':{addr:'역삼동'},
       '종로 지원':{addr:'을지로'},
       '당산 지원':{addr:'역삼동'},
    }
});

const hw = () =>
{
    const data = 
    "홍길동,남,90,80,70,60|신사임당,여,88,100,50|전봉준,남,55,80,77";
    
    const students = data.split('|');
    console.log("student1",students);
    
    let bb="";
    [...students].map(function(b) 
    {
        bb = b.split(',');
    
        //console.log(bb,typeof bb)

        students.forEach(()=>{
            studentResult(students);
        });
    });

    


}
//=========================================================

const studentResult =(bb)=>
{
    console.log(bb,typeof bb)
    //const avg = score/3;
   //console.log(`${name}(${gender}) 평균:${avg}점`);
}