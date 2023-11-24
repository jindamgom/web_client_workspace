/**
 * window
 * - 브라우저 최상위 객체
 * - tab 별로 하나 씩 존재함!
 * - BOM : Browser Object Model - navigator,history,screen...
 * - DOM : Document Object Model - document(내가 만든 html문서)
 * - Javascript object(객체) 
 * - ...
 */

const test1 = () =>{
    console.log(window);
}

/**
 * open
 * - 새 창(탭/팝업)을 여는 함수.
 * - 새창의 window 객체를 반환. 해당 창에 대한 제어 가능.
 */
const test2 = () =>{
    //window.open(url);//window생략가능
    //open(url,name,spec);

    //가로500,높이300,offset top=400,offset left=400
    //주 모니터 기준.
    const newWindow = open 
    //target:이름
    ("01_hellojs.html",'hellojs','width=500,height=300,top=400,left=400');
    //("01_hellojs.html",'_self'); //현재 창에서 열기
    console.log(newWindow);

    //새 창 열고 3초 뒤에 닫기
    // setTimeout(()=>{
    //     newWindow.close();
    // },3000);


    console.log(newWindow.opener); //현재창

    setTimeout(()=>{
        //newWindow.close();
        newWindow.alert('🥨🥐🍞🍞');
        newWindow.document.write('<h1>😪🤤😲</h1>');
        
    },3000);   
}

/**
 * Time API - setTimeout
 *  - 제공한 milli초 후에 callback 함수를 실행한다.
 *  - js의 시간은 스레드 스케쥴링에 의해서 늘어질 수 있다.
 * 
 */

const test3 = () =>{
    
    //1초뒤 실행
    const timeoutId = setTimeout(() =>{
        alert('😎😎😎🤣');
    },1000);
    console.log(timeoutId); //타이머 실행할때마다 랜덤으로 부여되는 id
    
};

// (()=>{
//     setTimeout(()=>{
//         console.log('회원가입 후 더 많은 혜택을 누려보세요!')
//     },5000);
// })();


/**
 * setInterval(callbackFunction,mills)
 * - mills초 후에 callbackFunction을 실행
 * - mills초 간격으로 callbackFunction을 실행
 * - clearInterval(id)로 취소하기 전까지..
 */
let intervalId;
const test4 = () =>{
    let i=1;
    intervalId = setInterval(()=>{
    console.log(i++);
    },1000);
    console.log(intervalId,'번 인터벌이 등록되었습니다..');
}

/**
 * 사용자 타이머
 * 
 */
let timeoutId;
const test5 = () =>{
    const msg = document.querySelector('#message');
    const time = document.querySelector('#sec');
    
    // const msg = document.getElementById('message');
    // const time = document.getElementById('sec');
    console.log(msg.value,time.value);

    //유효성 검사
    if(!msg.value || !time.value) 
    {
        console.log("유효한 값을 입력하세요.");
        return;
    }
        

    const msgVal = msg.value;
    timeoutId = setTimeout(() =>{
        alert(msgVal);
        timeoutId = undefined;//실행했으니 id 제거(응용)
    },time.value*1000);
    console.log(timeoutId,'번 타이머가 설정되었습니다.');
    //초기화
    msg.value='';
    time.value='';
};

const test6 = () =>
{
    //타이머 취소시키기
    // clearTimeout(timeoutId);
    // alert('타이머가 취소 되었습니다..😂');

    //응용 timeoutid가 있을때만 취소시키기
    if(timeoutId)
    {
        clearTimeout(timeoutId);
        alert('타이머가 취소 되었습니다..😂');
    }
};

/**
 * 초시계 만들어보기
 */
const clock = () =>{
    const d = new Date();

    //두자리수로 포맷 맞추기
    const f = (n) =>n<10?'0'+n: n; //앞은 string,뒤는 number
    //그냥 getHour이렇게 쓰면 숫자 형식으로 반환되어서 10미만 한자리면 하나만 출력됨
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
  
};
//계속 inerval 실행되어도 괜찮음 ㅇㅇ
const displayclock = () => document.querySelector("#clock-display").innerHTML = clock();
displayclock();
setInterval(displayclock,1000); //2)1초후에 실행
//1)즉시 실행해야 하기 때문에 displayclock()을 위에 한 번더 실행함.
