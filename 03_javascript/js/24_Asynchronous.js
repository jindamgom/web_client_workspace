/**
 * 동기 Synchronous 
 * -짝을 맞춘다.순서를 맞춘다.
 * -함수 호출 리턴과 다음 실행의 짝을 맞춘다..
 * 
 * 비동기 Asynchronous
 * -짝을 맞추지 않는다.
 * -함수 호출 리턴과 다음 실행의 짝을 맞추지 않는다.
 * 
 * -js runtime은 싱글쓰레드로 작동한다.
 * -한페이지 당 쓰레드가 한개뿐이라는 것..
 * -시간이 오래 걸리는 작업(timer api,dom,event처리)은 백그라운드로 치워뒀다 이후에 실행.(비동기 처리)
 * -오래 걸리는 작업을 후순위로 미뤄버림.
 * 1.web api container에 등록
 * 2.callback queue에 추가
 * 3.event loop에 의해 callstack에 추가 (callstack empty only)
 */

document.querySelector("#btn1").addEventListener('click',()=>{
    //동기 처리
    const value =foo();
    console.log(value);

    //비동기 처리
    let value2;
    setTimeout(()=>
    {
        value2 = 200;
        console.log(value2);//timer안으로 콘솔을 이동
    },1000);
    //console.log(value2);
});

const foo=()=>100;

/**
 * DOM에 요소를 추가/삭제하는 작업은 비동기처리.
 */
//js/test.js를 동적으로 로드하고, 그안의 함수 test를 호출해보기
//24_Asynchronous.js:41 Uncaught ReferenceError: 
    //test is not defined at HTMLButtonElement.
document.querySelector("#btn2").addEventListener('click',()=>{
    loadScript('js/24_test.js',()=>{
        test();
    });
    //test(); //test.js안의 test함수

});

const loadScript = (src,callback)=>{
    const script = document.createElement('script');//<script></script>
    script.src=src;
    script.onload = callback;//dom에 load가 완료되면 호출되는 핸들러

    document.head.append(script);//여기는 비동기처리
}

/**
 * 1초 간격으로 배경색을 빨주노초파남보로 바꾸게하기..
 * setTimeout 연속사용
 * 콜백 지옥 callback hell..
 */
document.querySelector("#btn3").addEventListener('click',()=>{

    const box = document.querySelector(".box");
    // const arr = ['red','orange','yellow','green','skyblue','blue','blueviolet'];
    // box.style.backgroundColor='red';
    // let i=0;
    // const rainbow = (i) =>
    // box.style.backgroundColor=arr[i];
    // setInterval(rainbow(i),1000); //2)1초후에 실행

    setTimeout(()=>{
        box.style.backgroundColor='red';
        setTimeout(()=>{
            box.style.backgroundColor='orange';
            setTimeout(()=>{
                box.style.backgroundColor='yellow';
                setTimeout(()=>{
                    box.style.backgroundColor='green';
                    setTimeout(()=>{
                        box.style.backgroundColor='skyblue';
                        setTimeout(()=>{
                            box.style.backgroundColor='blue';
                            setTimeout(()=>{
                                box.style.backgroundColor='blueviolet';
                            },1000);

                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);

});
