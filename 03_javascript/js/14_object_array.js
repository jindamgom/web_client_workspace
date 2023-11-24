/**
 * 객체 배열
 * -배열의 요소가 객체
 */
const test1 = () => {
    const pets =[];
    pets.push({
        name:'햄',
        breed:'골든햄스터',
        weight:2,
        age:1,
        color:['gold'],
        bite(){
            return this.weight <10? '콱':'콱콱';
        }
    });

    pets.push({
        name:'찹쌀떡',
        breed:'펄햄스터',
        weight:11,
        age:2,
        color:['white'],
        bite(){
            return this.weight <10? '콱':'콱콱';
        }
    });

    pets.push({
        name:'햄돌',
        breed:'정글햄스터',
        weight:13,
        age:2,
        color:['brown'],
        bite(){
            return this.weight <10? '콱':'콱콱';
        }
    });
    console.log(pets);
}

/**
 * 위의 방법으로 생성하는것보다 아래처럼 사용.(자바의 객체 생성과 매우 비슷)
 * 생성자 함수
 * -new 연산자와 함께 호출할 함수
 * -결과물로 해당타입의 객체가 반환된다.
 * -관례적으로 대문자로 시작하는 이름을 가진다.
 * -this용법3. 생성자함수(new 연산자로 호출)안 this는 "현재 객체"를 가리킨다.
 */
const test2 = () => {
    const pets = [];
    pets.push(new Pet('찹쌀떡','펄햄스터',11,2,'white'));
    pets.push(new Pet('햄','골든햄스터',2,1,'gold'));
    pets.push(new Pet('햄돌','정글햄스터',13,2,'brown','black'));
    console.log(pets);

    pets.forEach((pet)=>console.log(`${pet.name}이 ${pet.bite()}문다.`));
}

//-this용법3. 생성자함수(new 연산자로 호출)안 this는 현재 객체를 가리킨다.
function Pet(name, breed, weight, age, ...color){
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.color = color;
    // this.bite = function()
    // {
    //     return this.weight<10? '콱':'콱콱';
    // };
    //자기 this가 없어 부모의 this(생성자 함수의 this)를 가져다쓰기때문에 정상작동
    this.bite = () =>{
        return this.weight<10? '콱!':'콱콱!!';
    };
}

/**
 * this용법4. 일반함수 안에서 this는 window 객체를 가리킨다.
 * -window 브라우저 최상위 객체(document(DOM),js object, BOM, ....)
 * -브라우저의 열린 탭마다 각각의 윈도우 객체를 갖고있게됨.
 * 
 * 
 */
const test3 = function(){
    console.log(this);//window
    console.log(window,globalThis);
};