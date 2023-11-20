// DOM : Document Object Model
// html문서(텍스트)를 계층 구조를 반영하여 javascript 객체로 변환
// document
console.log(document);

/**
 * document.getElementById(id:string):HTMLElement | null
 * 요소 하나를 돌려줌.
 */
function getById(){
    const li1 = document.getElementById("li1");
    console.log(li1,typeof li1);
    console.dir(li1); //객체 계층구조로 열람
    console.log(li1.innerHTML);//getter
    li1.innerHTML="안녕자바스트립크!";//setter

    const notExist = document.getElementById("q4tqwtetat");
    //null : object타입이면서 값없음을 의미하는 키워드
    console.log(notExist,typeof notExist); //null object
}

/**
 * document.getElementsByTagName(tagName:string):object[] 
 */
function getByTag()
{
    const list = document.getElementsByTagName("li");
    console.log(list,typeof list);
    //반복문을 통해 배열에 접근
    for(let i = 0; i<list.length; i++)
    {
        console.dir(list[i]);
        list[i].style.backgroundColor='plum';
        list[i].style.color='red';
    }
}

/**
 * document.getElementsByClassName(class:string):object[]
 * 기본:const, 그 외에 증감변수 등:let
 * 
 * innerHtml:태그포함 다 갖고옴
 * innerText:텍스트만
 */
function getByClass(){
    //하나 찾을때 : ("group1") 두 개 이상일시 공백주고: ("group1 group2")
    const group1 = document.getElementsByClassName("group1"); 
    console.log(group1,typeof group1);

    //Hello Js 1,2,3..뒤에 [group1] 붙여보기..
    for(let i = 0; i<group1.length; i++)
    {
        //group1[i].textContent += '['+group1[i].className+']';
        group1[i].innerHTML += "[group1]";
    }
}

/**
 * getElementsByName(name:string):object[]
 */
function getByName(){
    const hobbies = document.getElementsByName("hobby");
    console.log(hobbies, typeof hobbies);

    let hobbyChecked= '';
    //어떤 체크박스가 체트되어있나 확인
    for(let i=0; i<hobbies.length; i++)
    {
        if(hobbies[i].checked)
        {
            hobbyChecked+=hobbies[i].value+"";
        }
    }
    alert(hobbyChecked);
}

/**
 * [name=hobby] 체크박스를 모두 선택/모두 해제 하게 한다.
 */
function checkAll()
{
    console.log("checkAll");
    const hobbies = document.getElementsByName("hobby");
    const allCheckBox = document.getElementById("all");
    //id가 유일해서 해당 아이디를 변수처럼 바로 사용가능. all.checked;
    for(let i=0; i<hobbies.length; i++)
    {
        //hobbies[i].checked = true; //강제 true
        //hobbies[i].checked = !hobbies[i].checked;
        hobbies[i].checked = allCheckBox.checked;
    }   
}

//=======================================================================================================================================
function printValue()
{
    const input01 = document.querySelector("input").value;

    const input02 = document.getElementById("pname").value;

    //getElementsByName:동일한 이름이 여러개일 경우, 배열로 반환
    const input03 = document.getElementsByName("price")[0].value;

    const area = document.getElementById("area");
    area.innerText =`구입자 : ${input01}님\n구입상품 : ${input02}\n구매가격 : ${input03}만원 `;
   
}

function printScore()
{
    console.log("printScore");
    const score = document.getElementById("score");
    console.log(score.value);
    const displayScore = document.getElementById("display-score");

    displayScore.innerHTML = score.value;
}

/**
 * document.querySelector(selector:string): HTMLElement | null
 *  css선택자를 이용해서 "하나"의 dom 요소를 반환
 *  여러개의 요소를 반환하는 선택자를 사용한 경우 "첫번째" 요소만 반환한다.
 */
function _querySelector() //querySelector가 이미 존재하는 함수라 앞에 _붙임
{
    const li1 = document.querySelector("#li1");
    console.log(li1);
    li1.innerHTML="안녕";

    const li = document.querySelector("li");//모든 태그 선택자라 여러개가 반환
    console.log(li);
}

/**
 * css선택자를 이용해서 "여러개" dom 요소를 배열로 반환
 */
function _querySelectorAll()
{
    //선택자를 문자로 전달해도 됨 li>li
    const list = document.querySelectorAll("li.group1");
    console.log(list);
    /**
     * 배열객체이는 innerHTML속성 없음.
     * list.innerHTML이런거 없다는 뜻임
     */
    for(let i =0; i<list.length; i++)
    {
        list[i].innerHTML = (i+1)+"번째 입니돠";
    }
}



/**
 * innerHTML
 * -getter : 자식 태그가 포함된 내용을 반환
 *            안녕하세요 저는 <mark>신사임당</mark>입니다.
 * -setter : 내용을 설정. html 태그처리(dom에 등록)
 */
const foo = document.querySelector("#foo");
const bar = document.querySelector("#bar");
function test1()//innerHTML는 문자열
{
    //const foo = document.querySelector("#foo");
    console.log(foo.innerHTML); //getter

    //const bar = document.querySelector("#bar");
    bar.innerHTML = foo.innerHTML; //setter(bar.innerHTML) + getter
}

/**
 * innerText(=textContent)
 * -getter : 자식 html을 제외한 내용을 반환
 *            안녕하세요 저는 신사임당입니다.
 * -setter : text로서 내용 추가(html태그도 문자로 처리됨)
 *           안녕하세요. 저는 <mark>신사임당</mark>입니다.
 *           
 */
function test2()
{
    //const foo = document.querySelector("#foo");
    console.log(foo.innerText);//getter

   // const bar = document.querySelector("#bar");
    bar.innerText = foo.innerHTML; //setter
    //안녕하세요. 저는 <mark>신사임당</mark>입니다.
    //으로 나오면서 mark로 칠해져야할 부분이 태그채로 노출됨
}

/**
 * outerHTML
 * -getter : 태그 자신을 포함해서 자식태그까지 반환
 * -setter : 태그 자신을 교체
 */
function test3()
{
    console.log(foo.outerHTML);
    //<p id="foo">안녕하세요. 저는 <mark>신사임당</mark>입니다.</p>
    foo.outerHTML = "<p id='soo'>안녕</p>";
}