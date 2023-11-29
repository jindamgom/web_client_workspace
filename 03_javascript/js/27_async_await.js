/**
 * async
 * -일반함수의 프라미스화 지원하는 문법
 */

document.querySelector('#btn1').addEventListener('click',()=>{
    const promise = foo();
    console.log(promise);
    promise.then((value)=>console.log(value));
});

// const foo = ()=>100;
//const foo = async() =>100; //state가 fulfilled,result가 100인 프라미스 반환
const foo = () => new Promise((resolve)=>resolve(100));



/**
 * await
 * -async 함수 안에서만 사용 가능하다.
 * -promise 앞에서 사용.
 * -promise가 fulfilled될때까지 대기해서 result값을 반환해주는 역할.
 */

// document.querySelector('#btn2').addEventListener('click',()=>{
//     bar()
//     .then((value)=>console.log(value))
// });

// const bar = () =>new Promise((resolve)=>{
//     //3초 후에 fulfilled,🍖 프라미스를 반환해준다.
//     setTimeout(() => resolve('🍖'),3000);
// });

document.querySelector('#btn2').addEventListener('click',async()=>{
//  bar().then((value)=>console.log(value));
    const value = await bar(); 
});

const bar = () =>new Promise((resolve)=>{
    //3초 후에 fulfilled,🍖 프라미스를 반환해준다.
    setTimeout(() => resolve('🍖'),3000);
});


/**
 * timer api를 await 버전으로.
 * 
 */
document.querySelector('#btn3').addEventListener('click',async()=>{

    //promise의 반환값은 promise였는데, await를 사용해서 value값으로 받을 수있다.
    //await가 없으면 비동기 코드라서 3초가 아니라 바로 promise값이 나와버림
    //const value = await delay(3000);
    const value = delay(3000);
    console.log(value);
});
const delay = (millis,message) => new Promise((resolve)=>{
    setTimeout(()=>resolve('🍳'),millis);
});

/**
 * dom
 */
document.querySelector('#btn4').addEventListener('click',async()=>{
    // loadScript('js/24_test.js');
    // test();//test is not defined at HTMLButtonElement.<anonymous>

    await loadScript('js/24_test.js'); //promise가 fulfilled될때까지 기다림(resolve호출)
    test();//그리고나서 test가 호출되어서 에러가 나지 않는다.
});
const loadScript = (src) =>new Promise((resolve)=>
{
    const script = document.createElement('script');
    script.src = src;
    script.onload = () =>resolve();
    document.head.append(script);
});

/**
 * 학생정보 가져오기.
 */
document.querySelector('#btn5').addEventListener('click',async()=>{
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    const response = await fetch(url)
    const student = await response.json();
    console.log(student); 
});

/**
 * 아바타 가져오기.
 * const url='https://api.github.com/users/jindamgom';
 * await는 async와 한쌍이다. 
 * https://moneytech.kr/42
 */
document.querySelector('#btn6').addEventListener('click',async()=>{
    const url='https://api.github.com/users/jindamgom'; //내 정보의 url
    const response = await fetch(url);
    //실제로 원하는 image url 값은 response.json에 있다.
    //찾아보니 그게 promise의 작동방식이라고 함.
    //한 번더 값을 가져와야함.(실제 body를)
    const user = await response.json(); 
    const {avatar_url} = user;
    const img = document.createElement('img');
    img.src = avatar_url;
    img.style='width:200px;';
    document.querySelector(".img-wrapper").appendChild(img);//비동기
});

//리팩토링

document.querySelector('#btn6').addEventListener('click',async()=>{
    const url='https://api.github.com/users/jindamgom'; //내 정보의 url
    
    const {data: {avatar_url}} = await axios(url);
    
    const img  = await new Promise((resolve)=>{
        
    })
});





// //document.querySelector("#btn2").addEventListener('click',()=>{
//     const url='https://api.github.com/users/jindamgom';
//     fetch(url)
//     .then((response)=>response.json())//여기서 요청못하므로 json반환해서 확인.[then을또쓰자]
//     .then((user)=> {
//         const {avatar_url} = user;
//         console.log(avatar_url);
//         const img = document.createElement('img');
//         img.src = avatar_url;
//         img.style='width:200px;';
//         //script.onload=resolve;//바인딩.load이벤트 발생시, resolve(핸들러) 호출
//         document.querySelector(".img-wrapper").appendChild(img);//비동기
//     });
// });