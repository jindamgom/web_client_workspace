/**
 * javascript는 prototye 기반의 상속 모델을 제공
 */

const test1 = () =>{
    const cars =[];
    cars.push(new Car("그랜져"));
    cars.push(new Car("소나타"));
    cars.push(new Car("카니발"));

    console.log(cars);

    cars.forEach((car)=>car.move());
}

function Car(name){
    this.name = name;
    // this.move = function(){
    //     console.log(`${this.name}이/가 이동합니다..🚌`);
    // }
}
Car.prototype.move = function()
{
    //this = Car
    console.log(`${this.name}이/가 이동합니다..🚌`);
}

/**
 * Car를 상속하는 Truck
 * -capacity 적재량
 * 
 * 상속구현
 * 1.부모생성자호출 apply
 * 2.프로토타입객체 생성 Object.create
 * 3.프로토 타입객체의 생성자 함수 연결
 * 
 */
const test2 = () =>
{
    const bongo = new Truck('봉고',1_000);
    console.log(bongo);
    bongo.move();
    //상속관계 확인
    console.log(bongo.__proto__ === Truck.prototype);
}
function Truck(name,capacity){
    //java: super(name);
    //1.js에서의 부모생성자 함수 호출
    //apply:현재 객체 기준으로 Car생성자함수 호출(super대신)
    
    //트럭의 this를 가지고 car에 가서 객체 생성
    //Car.apply(this,[name]);
    Car.call(this,name); //call로도 생성가능
    //capacity는 부모에 없으니 여기에있는 capacity를 쓴다.
    this.capacity = capacity;
}

//2.자동생성된 프로토 말고 새로 만든 프로토를 사용한다.
//전달한 객체를 상속하는 객체를 생성
Truck.prototype = Object.create(Car.prototype);

//3.프로토타입 객체에 생성자 함수 연결
Truck.prototype.constructor = Truck;


/**
 * this binding 함수
 * apply(this객체, [...params])
 * call(this객체, ...params)
 * bind(this객체) 바인딩 후 함수 반환 (bind로는 함수 호출x)
 * 
 * 화살표 함수는 this를 재바인딩 할 수 없다.(this가 고정됨)
 */

const test3 = () =>{
    const foo = function(a,b)
    {
        //일반함수에서의 this = window
        console.log(this.id,a+b);
    };
    foo();

    const obj = {
        id: 'honggid'
    };
    // foo.apply(obj,[20,50]);
    // foo.call(obj,20,50);

    //bind는 차이가 있다.
    const foo2 = foo.bind(obj);
    foo2(10,20);
}

/**
 * Book
 * -title 책 제목 
 * -author 저자
 * -price 가격
 * -info 메소드: 제목 저자 가격 출력
 * Nobel
 * -Book 속성 전부
 * -type 소설종류 (연애,sf,심리,서정)
 * -read(이름) : ${누가} ${책제목}(${타입})을 읽는다.
 */

//Book - 제목,저자,가격
function Book(title,author,price){
    this.title = title;
    this.author = author;
    this.price = price;
}
//위에 title,price처럼 북객체마다 만들 필요없으므로 따로 빼두는것.
//제목,저자,가격 출력
Book.prototype.info = function(){
    //this.book
    console.log(`제목:${this.title}\n저자:${this.author}\n가격:${this.price}원`);
}


//title,author,price는 book의 속성이고, type으로 하나 추가됨.
function Novel(title,author,price,type){

    Book.call(this,title,author,price); //call로도 생성가능
    this.type = type; //type은 novel만의 속성
}



//2.자동생성된 프로토 말고 새로 만든 프로토를 사용한다.
//전달한 객체를 상속하는 객체를 생성
Novel.prototype = Object.create(Book.prototype);
//3.프로토타입 객체에 생성자 함수 연결
Novel.prototype.constructor = Novel;

//novel read 누가 책제목(타입)을 읽는다
//info와 마찬가지로 생성자 함수밖에 따로 적어둔다.
Novel.prototype.read = function(name){
    console.log(`${name}이/가 ${this.title}(${this.type})을 읽는다.`);
}

const test4 = () =>
{
    // const books =[];
    // books.push(new Book("농담곰2","나가노",10000));
    // books.push(new Book("무서운게딱좋아","모름ㅋ",9000));
    // books.push(new Book("그리스로마신화3","홍은영",12000));

    // //위에 생성한 객체들을 하나씩 출력
    // books.forEach((book)=>book.info());

    const novels =[];
    novels.push(new Novel("연애소설1탄","김누구",6000,"연애"));
    novels.push(new Novel("저주토끼","정보라",14400,"공포"));
    novels.push(new Novel("라스트 젤리 샷","청예",15120,"SF"));
    novels.push(new Novel("레몬과 살인귀","구와가키 아유",1500,"추리/미스터리"));
    
    novels.forEach((novel)=>novel.read('김철수'));
  

}

/**
 * -생성자 함수 객체
 * -프로토 타입 객체
 * -생성 객체 - new 연산자 호출 결과
 * 
 */
const test5 = () =>
{
    //A
    //A.prototype
    //new A()
    const a = new A();
    console.log(a.id);
    /**
     * 결과:가나다
     * this.id='가나다';없으면 abc출력
     */
    a.hello();
    
    console.log(A.id);
    A.hello();
}

//A라는 생성자 함수
function A()
{
    this.id='가나다';
    this.hello = function(){
        console.log("안녕");
    }
}

A.prototype.id='abc';
A.prototype.hello = function(){
    console.log("hello~~~");
}

//함수객체에 직접 속성등록.
//static
//객체만들지 않고 생성자 함수
A.id='xx';
A.hello = function(){
    console.log('ddddddddddd');
}