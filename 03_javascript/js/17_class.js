/**
 * class
 * - 생성자 함수의 개선된 문법
 * - constructor 생성자
 * - 필드
 * - 메소드
 * - static 필드
 * - static 메소드
 */
const test1 = () =>{
    const honggd = new Person('홍길동',33);
    console.log(honggd);

    console.log(Person,typeof Person);
    console.log(Person.prototype);
    console.log(Person.prototype == honggd.__proto__); //true

    //static : 생성자 함수 소속의 필드/메소드
    console.log(Person.x);
    Person.y();
   
};

//this용법5.class안의 this는 현재 객체를 가리킨다.
class Person{
    static x = 100;
    static y(){
        console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyy');
    }
    constructor(name, age)//new 연산자에 의해 호출되는 생성자 메소드
    {
        //이렇게 name과 age 필드가 만들어진다. 위에 따로 선언 안해도 ok
        this.name = name;
        this.age = age;
    }

    //Person.prototype에 작성- Person객체가 상속하고 공유하게 됨
    sayHello()
    {
        console.log(`안녕하세요, ${this.age}세 ${this.name}입니다.`);
    }
}
/**
 * 상속
 * - extends 부모클래스
 * - 생성자 안에서 super() 부모 생성자 호출 가능
 * - override 가능
 * - super.부모 필드/메소드 접근 가능
 * 
 */

const test2 = () =>{
    const honggd = new Dev('홍길동',33,'JavaScript');
    console.log(honggd);
    honggd.sayHello();
    //=>console.log(`저는 ${this.lang}개발자 입니다.`); :dev.prototype
    //=>console.log(`안녕하세요, ${this.age}세 ${this.name}입니다.`); : person.prototype
}

class Dev extends Person{
    constructor(name,age,lang){
        super(name, age); //Person.apply(this.[nama,age]);
        this.lang = lang;

    }
    //overrid
    sayHello()
    {
        super.sayHello();//부모의 sayHello
        console.log(`저는 ${this.lang}개발자 입니다.`);
    }

}

/**
 * 실습문제 - book - novel
 * 이번 챕터에서 배운 class 생성자 버전으로 만들어보기.
 */

const test3 = () =>
{
    const novels = [];
    novels.push(new Novel("연애소설1탄","김누구",6000,"연애"));
    novels.push(new Novel("저주토끼","정보라",14400,"공포"));
    novels.push(new Novel("라스트 젤리 샷","청예",15120,"SF"));
    novels.push(new Novel("레몬과 살인귀","구와가키 아유",1500,"추리/미스터리"));

    novels.forEach((novel)=>novel.read('농담곰'));
};

class Book{
    constructor(title, author, price)//new 연산자에 의해 호출되는 생성자 메소드
    {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    info()
    {
        console.log
        (`제목:${this.title}\n저자:${this.author}\n가격:${this.price}원`);
    }
}

class Novel extends Book{
    constructor(title,author,price,type)
    {
        super(title, author, price);
        this.type = type; 
    }
    read(name)
    {
        console.log
        (`${name}이/가 ${this.title}(${this.type})을 읽는다.`);
    }

}