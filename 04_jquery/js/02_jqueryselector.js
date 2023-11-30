$("#btn1").on('click',()=>{
    console.log('🎁');
    
    console.log($);//jQuery 함수
    console.log(jQuery); //$ 변수명 충돌을 방지하기 위해 jQuery변수도 제공 

    /**
     * 사용방법
     * $("선택자")-> jQuery 객체 반환 (js 태그객체를 감싼 객체)
     * 
     */
    //jQuery 객체를 담은 변수는 $로 시작하는 관례가 있다!
    const $p1 = $("#p1");
    console.log($p1);
    $p1.css('color','red');

    // const $group1 = $(".group1");
    // console.log($group1);
    // $group1.css('text-decoration','underline');

    //위의 jQuery를 js로 작성한 경우..코드가 매우 복잡.
    const group1 = document.querySelectorAll(".group1");
    group1.forEach((p)=>{p.style.textDecoration = 'underline';
    });

    //https://carina16.tistory.com/80
    //p 태그에 font-size 2배 적용
    const $p = $("p");
    $p.css('font-size','200%');

    //title 속성이 있는 요소 background 적용
    $("p[title]").css('background-color','pink');

    //title 속성이 안녕3인 요소 font-color변경
    $("p[title='안녕3']").css('color','blue');
});

/**
 * jQuery 객체
 * js 객체
 * https://knowing-passion.tistory.com/67
 */
$("#btn2").on('click',()=>{

    //jQuery객체
    console.log($("p")); //p태그객체(js)를 감싼 객체

    //js객체
    console.log($("p")[0]); //p#p1
    console.log($("p").get(0));//p#p1
    console.log($("p").get());//[p#p1,p#p2,p#p3,p#p4,p#p5]

    //js객체를 전달해서 jQuery객체 생성
    console.log($(document.querySelector("#p1")));
    console.log($(p1));//위의것 줄여서[동일한 객체]
    console.log($([p1,p2,p3]));
});

/**
 * jQuery 전용 선택자
 * input 타입별로 Pseudo class 선택자
 */
$("#btn3").on('click',()=>{
    //input[type=text]
    $(":text")
    .css('background-color','tomato') //원래 jQuery객체 다시 리턴(메소드 체이닝)
    .css('color','blue'); //이렇게 연속해서 사용가능       

    //혹은 css사용시 객체 형태로 여러개의 속성값을 줄 수 있음
    //객체형전달가능(css속성명 주의 : -이 있다면 문자열 처리 or 카멜케이싱 지원)
    $(":password")
    .css({
        'background-color':'plum',//-사용
         backgroundColor:'gold', //카멜케이싱
        'color':'green'
     });

     $(":radio#male").prop("checked",true); //체크처리

     //checkbox 야구 농구 동시 체크
     $(":checkbox#baseball,:checkbox#basketball").prop("checked",true); 

     //input타입의 버튼만
     $(":button").val("click me!!!");
});


/**
 * 순서 관련
 * - :first
 * - :last
 * - :odd
 * - :even
 * 
 * - :eq(n)
 * - :gt(n)
 * - :lt(n)
 * 
 * 내용포함
 * - :contains(text)
 * 
 * 자식요소포함
 * - :has(selector)
 */
$(btn4).on('click',()=>{
    //const $selected = $("#people tr:first");//:first-child, :first-of-type
    
    //const $selected = $("#people tr:odd"); //0-based index 홀수 :nth-child(2n+1)
    //const $selected = $("#people tr:even"); //0-based index 짝수 :nth-child(2n)
    
    //onst $selected = $("#people tr:eq(3)"); //0,1,2,3 <-3번째만
    //const $selected = $("#people tr:gt(0)"); //0보다 큰
    //const $selected = $("#people tr:lt(3)"); //3보다 작은 0,1,2
    //const $selected = $("#people tr:contains('A')");//text기반
    const $selected = $("#people tr:has(a[href])");//특정 요소포함
    $selected.css('background-color',"hotpink");

});