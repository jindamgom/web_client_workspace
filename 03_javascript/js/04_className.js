/**
 *  class를 통한 제어
 *   -className(문자열)
 *   -classList객체
 *      -add(className:string)
 *      -remove(className:string)
 *      -toggle(className:string)
 */
function checkSubject(checkbox)
{
    //log는 콤마로 연결해서 찍을 수 있다
    console.log('checkSubject',checkbox);
    //부모td찾기
    const td = checkbox.parentElement;
    console.log(td);
    //.on 토글(toggle) 
    //1.삼항연산자
    td.className = checkbox.checked?"on":"";

    //2.if-else문
    if(checkbox.checked)
    {
        td.className="on"; 
    }
    else{
        td.className="";
    }


    //3.
    if(checkbox.checked)
    {
       td.classList.add("on");
    }
    else{
        td.classList.remove("on");
    }
    
    //4.
    td.classList.toggle("on");
}