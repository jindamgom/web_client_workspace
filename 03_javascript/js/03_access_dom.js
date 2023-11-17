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
function printName()
{
    //name=폼
    console.log("printName");
 

    // const inputs = document.getElementsByTagName("input");
    // const name = inputs[4];

    // const inputs = document.getElementsByClassName("user-input");
    // const name = inputs[0];

    const inputs = document.getElementById("name");
    // console.dir("inputs:"+inputs);
    alert("당신의 이름은.."+inputs.value);
    const area = document.getElementById("area");
    area.innerText = inputs.value;
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