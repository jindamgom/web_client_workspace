/**
 * 객체
 * -속성(속성명 = 속성값)모음 (java map..?)
 * -속성명 : 모든 타입 .문자열/식별자 추천
 * -속성값 : 모든 타입
 */
const test1 = () =>{
    //리터럴로 생성
    const obj = {
        id : 'honggd',
        name: '홍길동',
        age : 33,
        married : true,
        hobby : ['게임','독서','운동'],
        //객체안의 객체
        pet : {
            name: '구리구리'
        },
        123 : 456,
        'user-name' : 'sinsa'
    };
    console.log(obj);
    
    //new 연산자
    const obj2 = new Object();
    obj2.kor = 88;
    obj2.eng = 77;
    obj2.math = 55;
    console.log(obj2);

    //속성 접근
    //1.dot-notation
    //2.bracket - notation (애매한 속성명은 bracket으로 접근하자)

    //1.dot-notation
    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.hobby[0]);
    console.log(obj.pet.name);
    //console.log(obj.123);

    //2.bracket-notation
    //문자열로 속성명 작성.
    console.log(obj['id']);
    console.log(obj['name']);
    console.log(obj['age']);
    console.log(obj['hobby']);
    console.log(obj['hobby'][0]);
    console.log(obj['pet']['name']);
    console.log(obj[123]);
    console.log(obj['user-name']);

    //존재하지 않는 속성 참조
    console.log(obj.father); //undefined
    //console.log(obj.father.job());//Uncaught TypeError: Cannot read properties of undefined (reading 'job')
    //java와 유사함 가령 null인 str을 확인하는건 문제가 없지만,
    //해당 str의 length를 확인하려하면 오류가 발생함.

    //속성추가
    obj.father = 'ㅎㅎㅎ';
    obj.father = 'ㅋㅋㅋ'; //override 덮어씌워짐
    console.log(obj);//확인하면 ㅎㅎㅎ가 아닌 ㅋㅋㅋ가 출력.

    //속성값 제거
    obj.hobby = undefined;
    //속성 삭제
    delete obj.hobby;
}


/**
 * function: superset/
 * method:subset/객체 소속의 함수
 */
const test2 = () =>{
    const user = {
        username : '홍길동',
        //메소드 : 객체의 속성 타입이 함수인 경우
        //이럴 때 화살표 함수 지양
        run : function()
        {
            //this용법2:객체메소드(조건:일반함수 ) this는 현재 객체를 가르킨다.
            console.log(`${this.username} 달린다`);
        },
        //메소드 단축문법
        eat(food)
        {
        console.log(`${this.username}가 ${food}를 먹는다.`);
        },

        //객체 안 화살표 함수는 지양.이럴땐 this가 없어서 undefined을 가져옴
        work: () => {
            console.log(this); //this.window(없음)=>test2.this(없음)=>window.this
            console.log(`${this.username}가 일한다.`);
            //undefined가 일한다.
        }
        
    }
    console.log(user.name);
    user.run();
    user.eat('🍖');
    
    user['run']();
    user['eat']('🧀');
    user.work();
};

/**
 * 관련된 함수를 전역에 선언하지 않고,
 * 객체 안에 선언하면 객체를 namespace으로 사용가능.
 */
// const test3 = () =>{
    
//         plus(a,b){
//         return a+b;
//         },
//         minus(a,b){
//         return a-b;
//         },
//         multiply(a,b){
//         return a*b;
//         },
//         divide(a,b){
//         return a/b;
//         },
//         remainder(a,b){
//         return a%b;
//         }
// };
//     console.log(calculator.plus(10,20));

/**
 * for..in문:객체반복처리.모든요소에 접근해서 순회한다는것
 * Object.keys()
 * Object.values();
 */
const test4 = () =>{
    const obj = {
        name : '청국장',
        price : 15_000,
        ingredient : ['청국장','양파','마늘','파']
    };

    //for- in
    for(prop in obj)
    {
        console.log(prop);
        //재료 청국장,양파등을 출력하고플때
        console.log(prop,obj[prop]);//bracket
    }

    //Object.keys
    const keys = Object.keys(obj);
    console.log(keys);
    keys.forEach ((key)=> console.log(key,obj[key]));

    //obejct.values
    const values = Object.values(obj);
    values.forEach(value=>console.log(value));
    
};