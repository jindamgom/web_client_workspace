/**
 * fetch api
 * -promise 기반의 비동기 통신객체
 * -fetch:비동기작업(네트워크상의 요청(요청이 언제 끝날지 모르므로))-then:콜백
 * -json 응답에 대한 처리
 * -json이란? javascript object notation 프로그램간의 데이터 교환언어(약속)
 * 
 */
document.querySelector("#btn1").addEventListener('click',()=>{
    console.log("btn1 click");
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    fetch(url).then((response)=>{
        //fetch의 첫번째 콜백함수는 응답이 시작되는 순간 호출
        //->응답데이터 확인불가
        console.log(response);
        return response.json(); //응답데이터중 json 추출

    })
    // .then((text)=>{
    //     console.log(JSON.parse(text));//string - js object
    // })
    .then((student)=>{ 
        console.log(student);
        //구조분해할당
        const {id,company,classroom,cnt} = student;
        document.querySelector("#id").innerHTML = id;
        document.querySelector("#company").innerHTML = company;
        document.querySelector("#classroom").innerHTML = classroom;
        document.querySelector("#cnt").innerHTML = cnt;
    });

    fetch("http://naver.com").then((response)=>response.text())
    .then((html)=>console.log(html));
    
});
//https://axios-http.com/kr/docs/intro
//깃허브 아바타
document.querySelector("#btn2").addEventListener('click',()=>{
    const url='https://api.github.com/users/jindamgom';
    fetch(url)
    .then((response)=>response.json())//여기서 요청못하므로 json반환해서 확인.[then을또쓰자]
    .then((user)=> {
        const {avatar_url} = user;
        console.log(avatar_url);
        const img = document.createElement('img');
        img.src = avatar_url;
        img.style='width:200px;';
        //script.onload=resolve;//바인딩.load이벤트 발생시, resolve(핸들러) 호출
        document.querySelector(".img-wrapper").appendChild(img);//비동기
    });
});

/**
 * https://cdnjs.com/libraries/axios
 * axios
 * -내부적으로 (표준)XMLHttpRequest객체를 promise기반으로 하는 js 라이브러리
 * -fetch대비 응답데이터를 추출하기 간단하다.
 * -그 외 편의 기능 제공.
 */
document.querySelector("#btn3").addEventListener('click',()=>{
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    axios(url)
    .then((response)=>{
        console.log(response);
        //구조분해할당
        //응답결과 중 data의 id~cnt를 각져온다는 것
        const {data : {id,company,classroom,cnt}} = response;
        document.querySelector("#id").innerHTML = id;
        document.querySelector("#company").innerHTML = company;
        document.querySelector("#classroom").innerHTML = classroom;
        document.querySelector("#cnt").innerHTML = cnt;
    })
});

/**
 * axios로 github이미지불러오기
 * +로드 후 3초후에 제거하기.
 */
// document.querySelector("#btn4").addEventListener('click',()=>{
//     const url='https://api.github.com/users/jindamgom';
    
//     axios(url) 
//     .then((response)=>{
//         console.log(response);
//         const {data :{avatar_url}} =response; //data 하위의 avatar_url
//         const img = document.createElement('img'); 
//         img.src = avatar_url;
//         img.style='width:200px;';
//         //appendchild,append모두 가능
//         document.querySelector(".img-wrapper").appendChild(img);//비동기
//         //onload
//         //문서의 모든 콘텐츠(images, script, css, etc)가 로드된 후 발생하는 이벤트
//         img.onload = () =>
//         {
//             setTimeout(()=>img.remove(),3000);

//         };
  
// });

document.querySelector("#btn4").addEventListener('click',()=>{
    const url='https://api.github.com/users/jindamgom';
    axios(url)//get방식 전송
    .then(({data :{avatar_url}}) => new Promise((resolve)=>{
        const img = document.createElement('img'); 
        img.src = avatar_url;
        img.style='width:200px;';
        //appendchild,append모두 가능
        img.onload= () =>resolve(img);
        document.querySelector(".img-wrapper").appendChild(img);
    }))
    .then((img)=>{
        setTimeout(() => img.remove(),3000);
    })
});