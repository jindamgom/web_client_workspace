const key = document.querySelector("#key");
const value = document.querySelector("#value");
/**
 * Web Storage 
 * -웹 브라우저에 key/value형식으로 데이터를 보관하는 기술
 * -cookie[서버전송]/indexeddb[대용량데이터]등
 * -webstorage[간결한사용]
 * -저장된 정보를 절대 서버로 전송하지 않아 보안상 유리
 * -데이터는 도메인 별로 관리
 * -key/value 모두 string형태로 보관
 * 
 * -Local Storage : 삭제하기 전까지 영구보관
 * -Session Storage : 서버접속한 동안만 보관(윈도우를 닫으면 제거)
 * ..
 * 쇼핑몰에서 내가 본 상품들을 옆에 띄워주는것도 내가 열람한 상품들을
 * webstorage에 저장해뒀다가 보여주는 방식.
 */
document.querySelector("#btn1").onclick = () =>{
    //window 하위에서 객체별로 관리
    // console.log(localStorage);
    // console.log(sessionStorage);
    
    //유효성 검사
    if(!key.value ||!value.value){
        alert('key/value를 작성해주세요...');
        return;
    }

    //저장, 수정 setItem 
    //해당 키 값에 새로운 value를 덮어씌우면 update
    localStorage.setItem(key.value,value.value);
    //sessionStorage.setItem(key.value,value.value);

    //초기화 빈문자열
    key.value='';
    value.value='';
};

//조회
document.querySelector("#btn2").onclick = () =>{
    //유효성 검사
    if(!key.value)
    {
        alert('key를 작성해주세요😫');
        return;//조기리턴
    }

    //조회
    const retrieved = localStorage.getItem(key.value);
    if(retrieved)
    {
        value.value = retrieved;
    }
    else{
        alert('해당 key 값은 존재하지 않습니다😓');
        value.value='';
    }
};

//삭제
document.querySelector("#btn3").onclick = () =>{
    //유효성 검사
    if(!key.value)
    {
        alert('key를 작성해주세요😐');
        return;
    }
    //삭제
    localStorage.removeItem(key.value);

    //초기화
    key.value='';
    value.value='';
};

//전체삭제
document.querySelector("#btn4").onclick = () =>{
    localStorage.clear();
};


/**
 * 객체,배열 저장
 */
document.querySelector("#btn5").onclick = () =>{
    //js객체
    const obj={
        username:'damgom',
        id:'nongdamgom123',
        married:false
    };
    // localStorage.setItem('obj',obj);
    // //이렇게 저장하면 obj.tostring으로 저장되어 [object Object]
    // const objValue = localStorage.getItem('obj');
    // console.log(objValue, typeof objValue); //string으로 나옴

    // //배열도 마찬가지로 string형태로 저장됨.
    // const arr = ['a','b','c'];
    // localStorage.setItem('arr',arr);
    // const arrValue = localStorage.getItem('arr');
    // console.log(arrValue, typeof arrValue);
   
    //위의 내용을 아래로 변경한다.
    //json문자열로 변환 후, localstorage 저장 : JSON.stringify
    localStorage.setItem('obj',JSON.stringify(obj));

    //localstorage에 json문자열을 가져옴.
    const objValue = localStorage.getItem('obj');
    console.log(objValue, typeof objValue);

    //json문자열을 다시 js객체로 변환:JSON.parse
    const obj2 = JSON.parse(objValue);
    console.log(obj2, typeof obj2);

    //배열도 바꿔보자
    const arr = ['a','b','c'];
    localStorage.setItem('arr',JSON.stringify(arr));
    const arr2 = JSON.parse(localStorage.getItem('arr'));
    console.log(arr2, typeof arr2); //이렇게 하면 array형태로 값을 가져올수있다

    const pet = {
        name : '초코',
        colors : ['black','brown'],
        owner:{
            name:'김아무개',
            tel:12345678,
            addr:'서울시 강남구'
        }
    };
    localStorage.setItem('pet',JSON.stringify(pet));

    //가져오기
    const pet2 = JSON.parse(localStorage.getItem('pet'));
    console.log(pet2, typeof pet2);
};




const frm = document.guestbookFrm;
const name = frm.name;
const content = frm.content;

/**
 * submit 핸들러 (유효성검사)
 */
document.guestbookFrm.onsubmit = (e) =>{
    //태그 객체를 이렇게 가져올 수 있다. :)
    // const frm = e.target;
    // const name = frm.name;
    // const content = frm.content;

    //태그별로 유효성을 검사하자.
    //이름 유효성 검사
    if(!/^[A-Za-z0-9가-힣 ]{2,}$/.test(name.value))
    {
        alert('유효한 이름을 작성해주세요.');
       
        return false; //or e.preventDefault(); return; (pre자체로는 조기리턴x 그래서 return을 또 씀)

    }

    //내용 유효성 검사
    if(!/^.{2,}$/.test(content.value))
    {
        alert('유효한 내용을 작성해주세요.');
        return false;
    }
};


/**
 * localStorage에 저장~
 */
const saveGuestbook = () =>{
    console.log('saveGuestbook 호출...');
   
    /**
     * 여기서 할 일은? localstorage에 저장- 초기화 등등..
     * 어떤걸 key값으로 삼아야할까..
     * 리터럴로 작성않고, 관리와 재사용을 위한 클래스를 따로 만든다
     */

    //const guestbooks = []; //문제는 이렇게 하면 한번밖에 저장을 못함..[이전것 덮어씌워짐]
    //guestbooks로 저장된 배열이 있다면 그것을 getitem해서 사용하고 없으면 새 배열을 생성한다.
    const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || [];
    guestbooks.push(new GuestBook(name.value,content.value));
    localStorage.setItem('guestbooks',JSON.stringify(guestbooks));

    
    frm.reset();//초기화
    renderGuestBooks(); //방명록 출력
};

class GuestBook{
    constructor(name,content,createAt = Date.now()){
        this.name = name;
        this.content = content;
        this.createAt = createAt;
    }
}

/**
 * localStroage guestbooks를 화면에 출력하기
 * -guestbook->tr
 * -일시 : mills-> Date->mm/dd hh:mi 월/일 시:분
 * -방명록을 작성한 후 테이블이 표시..
 */
const renderGuestBooks = () =>{
    //1.guestbooks 읽어오기.
    const readGuestBooks = JSON.parse(localStorage.getItem('guestbooks'))|| [];

    // //2.작업할 tbody 가져오기
    // const myTable = document.querySelector("#tb-guestbook");
    // const tableBody = myTable.lastElementChild;
    // const tableBody2 = document.querySelector("#tb-guestbook tbody");//위의 두 줄을 한 줄로.
    // tableBody.innerHTML=''; //초기화
    // //index도 나중에 추가하기.
    // readGuestBooks.forEach((guestbook,index)=>{
    //     const {name,content,createAt} = guestbook;
    //     console.log(myTable.lastElementChild); //tbody
    //     //tableBody.innerHTML+=`<tr><th>${name}</th><th>${content}</th><th>${timeString}</th></tr>`;
    //     tableBody.innerHTML+=`<tr><th>${name}</th><th>${content}</th><th>${convertToDateTime(createAt)}</th></tr>`;
    // });
    


    //2.reduce 사용해서 작성해보기.
    //첫번째 요소인 html은 누적값이다.
    //https://tocomo.tistory.com/26
    document.querySelector("#tb-guestbook tbody").innerHTML = 
    readGuestBooks.reduce((html,{name,content,createAt},index)=>{
        return`
        ${html}<tr><th>${name}</th><th>${content}</th><th>${convertToDateTime(createAt)}</th></tr>`;
        },"");
};

//한자리수 포맷을 위한 함수[두자리만들기]
const f = (n) => n<10? '0' +n :n;
//날짜 변환 함수 만들기
const convertToDateTime = (millis) =>{
    const d= new Date(millis);
    const mm = f(d.getMonth()+1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${mm}/${dd} ${hh}:${mi}`;
};

//페이지 로딩시 출력.
//renderGuestBooks(); 