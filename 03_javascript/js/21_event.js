/**
 * inline이벤트 속성의 작성 내용이 
 * 미리 만들어진 핸들러함수 안에서 실행
 *
 * -핸들러 하나만 등록이 가능
 */

const test1 = (e) =>{
    console.log('🍧🥧',e);
    //console.log(document.querySelector("#btn1").onclick);
};

document.querySelector("#btn2").onclick = (e) =>{
    console.log('🍦🍦',e);
    console.log(document.querySelector("#btn2").onclick);
};

//onclick:위의 아이스크림이 아닌 사탕이 나옴[최근것으로 덮어씌워짐]
document.querySelector("#btn2").onclick = (e) =>{
    console.log('🍬🍭',e);

    //console.log(document.querySelector("#btn2").onclick);
};

/**
 * 모든 이벤트는 addEventListener를 갖고있다.
 * -핸들러 여러개 등록가능.
 */
document.querySelector("#btn3").addEventListener('click',(e)=>{
    console.log('🍗',e);
});
document.querySelector("#btn3").addEventListener('click',(e)=>{
    console.log('🥩',e);
});
document.querySelector("#btn3").addEventListener('click',(e)=>{
    console.log('🍖',e);
});

/**
 * event객체
 * -type
 * -target : 이벤트 발생 객체
 * -각종 좌표..
 */
// document.querySelector("#btn4").onclick = (e) =>
document.querySelector("#btn4").onclick = function(e)
{
    console.log(e);
    console.log(e.target);//타겟의 속성에 접근 가능하다!
    console.log(e.target.innerHTML);

    //this용법6. 이벤트 핸들러(일반함수) 안의 this는 
    //이벤트 "발생 객체"를 가르킨다.
    //화살표함수면 부모의 this를 가르키게 되어서 즉, window가 나오게됨
    console.log(this);
    console.log(this===e.target); //true
}


//포커스 맞춰짐
document.querySelector("#nickname").onfocus = (e) =>
{
    console.log("#nickname 포커싱 되었습니다.");
}
//포커스 잃음
document.querySelector("#nickname").onblur = (e) =>
{
    console.log("#nickname 포커스를 잃었습니다..");
    //const value = e.target.value;//객체
    const {target:{value}} = e; //구조분해할당ver
    console.log(value);
    if(!value)
    {
        alert('별칭은 필수 입니다!!');
    }
}
/**
 * key 관련 이벤트
 * 1.keydown 입력값 확인 불가
 * 2.keypress 한글 확인 불가
 * 3.keyup 위와 같은 이슈로 주로 keyup을 사용한다.
 */
document.querySelector("#memo").onkeyup = (e) =>{
    console.log(e);// key(a) | keyCode(65) | code(keyA)
    console.log(e.target.value);
    
    //엔터확인
    if(e.keyCode==13)
    alert(e.target.value);
};


/**★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 * 제출 버튼 클릭 -> submit 이벤트 발생 -> submit 이벤트 핸들러(유효성검사) 호출
 * (유효성검사에서 막히면 여기서 제출방지)->실제 제출
 * 유효한 값을 다루는 것이 중요하다. 
 * 
 * -제출방지 event.preventDefault();
 * ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
 */

const frm = document.signupFrm;
const username = frm.username;
const password = frm.password;
const confirmPassword = frm['confirm-password'];

document.signupFrm.onsubmit=(e)=>{
    console.log('submit');
    console.log(frm);
   
   // console.log(frm,username,password,confirmPassword);

    //아이디 검사(4글자 이상)
    if(username.value.length<4)
    {
        alert('아이디는 4글자 이상이여야 합니다..');
        e.preventDefault();
        return;
    }
    //비밀번호검사 (4글자 이상)
    if(password.value.length<4)
    {
        alert('비밀번호는 4글자 이상이여야 합니다..');
        e.preventDefault();
        return;
    }

    //비밀번호 일치 여부 검사
    // if(confirmPassword.value !== password.value)
    // {
    //     alert('두 비밀번호가 일치하지 않습니다.');
    //     e.preventDefault();
    //     return;
    // }
    if(notEqualPasswords())
    {
        e.preventDefault();
        return;
    }


};


//기존:버튼을 눌러야 두 비밀번호가 다르단걸 체크하는데,
//개선:input에서 blur처리되었을때 비밀번호가 다른지 체크해주면 좋을듯[버튼누르기전에]
const notEqualPasswords = () =>{
    const bool = password.value !== confirmPassword.value;
    if(bool)
    {
        alert('두 비밀번호가 일치하지 않습니다.');
        password.select();//입력값 선택상대로 만들어버림
    };
    return bool;
}

//blur 이벤트 핸들러 바인딩
//만약 notEqualPasswords()라고 하면 return값인 true or false가 들어오므로 주의
confirmPassword.onblur = notEqualPasswords;

const requestSignup=()=>{
    console.log('폼 제출 성공~~~~~~~~~~~~');
    //signupFrm의 내용출력/초기화
    //hongg/1234 회원가입을 요청했습니다.
    console.log(`${username.value}/${password.value} 회원가입을 요청했습니다.`);

    // username.value='';
    // password.value='';
    // confirmPassword.value='';

    frm.reset(); //폼 리셋
};

//bubble
/**
 * 이벤트 전파 Event Propagation
 * -bubbling:자식객체에서 발생한 이벤트는 부모 객체로 전파됨.
 */
// document.querySelector("#bubble1").onclick = (e) =>{
//     console.log('#bubble1',e);
// };
// document.querySelector("#bubble2").onclick = (e) =>{
//     console.log('#bubble2',e);
//     //이벤트가 전파되는걸 원치 않을 때 전파 중지 가능
//     e.stopPropagation();
// };
// document.querySelector("#bubble3").onclick = (e) =>{
//     console.log('#bubble3',e);
// };


//하나의 핸들러로 여러 이벤트 관리
//부모 bubble1-2-3 자식
document.querySelector("#bubble1").onclick = (e) =>{
    switch(e.target.id)
    {
        case 'bubble1':console.log("#bubble1");break;
        case 'bubble2':console.log("#bubble2");break;
        case 'bubble3':console.log("#bubble3");break;
    }
    
};

/**
 * 임의의 이벤트를 생성해보자.
 * 
 * #btn5 ->#btn1클릭핸들러 호출
 * 
 */
document.querySelector('#btn5').onclick = () =>{
    //1.click메소드 호출
    //document.querySelector('#btn1').click();
    
    //2.이벤트 객체전송
    const event = new MouseEvent('click');
    document.querySelector('#btn1').dispatchEvent(event);

};

/**
 * 1123 event 실습문제
 * 1124 : 수정 / innerHTML 초기화 하기.[안그럼 버튼 누를때마다 누적]
 */
const siteData=
`네이버,https://www.naver.com
구글,https://www.google.com
W3C,https://www.w3.org/\nMDN
Web,https://developer.mozilla.org/en-US/
와삼,https://www.w3schools.com`;

document.querySelector('#btn-generate').onclick = () =>{

    //console.log("버튼생성 - 버튼 클릭");    
    const arr01 = siteData.split("\n");
    const arr02 = arr01.map((s, i) => s.split(","));
    console.log(arr02);
    arr02.forEach(createButton);

    const btnWrapper = document.querySelector(".btn-wrapper");
    btnWrapper.innerHTML='';

    const createButton = ([title, address]) => 
    {
    //console.log(`${title} ${address}`);
    //document.body.innerHTML +=`<button id="btn_${title}" onclick="location.href='${address}'">${title}</button>`; 
    
    
    // document.getElementsByClassName("btn-wrapper")[0]
    //             .innerHTML +=`<button id="btn_${title}" onclick="location.href='${address}'">${title}</button>`;  

    btnWrapper.innerHTML +=`<button id="btn_${title}" onclick="location.href='${address}'">${title}</button>`;  
    };
};
//혹은 버튼생성 - 클릭이벤트의 핸들러를 제거하는것.
//즉 처음 한번만 클릭되게 함. 
//e.target.onclick = null;
//once : true