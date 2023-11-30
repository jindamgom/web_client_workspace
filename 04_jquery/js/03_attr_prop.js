/**
 * attr
 * -"인라인" 작성된 속성을 제어하는 메소드
 * 
 * -getter n개의 요소중에서 "첫번째 요소"의 속성값을 반환
 * -setter n개의 요소에 "모두" 해당 속성을 적용
 */
$(btn1).on('click',()=>{
    const $img = $(".img-wrapper img");
    console.log($img);

    //getter-첫번째요소만반환
    console.log($img.attr('src'));

    //setter-두개의 사진 모두 flower3이미지로 변경된다..
    $img.attr('src', '../sample/image/flower3.PNG');
});


/**
 * prop
 * -자바스크립트 boolean으로 제어되는 속성
 * -checked,selected
 */
$("#btn2").on('click',()=>{
    console.log($("[name=pizza]").prop('checked'));
    $("[name=pizza]").prop('checked',true);

});

//[name=pizza]전체 체크 혹은 해제
//#checkAll->input:checkbox[name=pizza]
$("#checkAll").on('click',(e)=>{
    console.log("전체선택");

    //2차코드
    //name=pizza true/false에 checkAll의 현재 체크여부인 boolean값을 넣으면 된당
    //$("[name=pizza]").prop('checked',$("#checkAll").prop('checked'));

    //1차코드
//    if($("#checkAll").prop('checked'))
//         $("[name=pizza]").prop('checked',true);
//     else
//         $("[name=pizza]").prop('checked',false);

    //target으로 제어
    const {target} = e;
    $("[name=pizza]").prop('checked',target.checked);

});

/**
 * [name=pizza]중 하나라도 체크가 풀리면 checkAll도 풀리고
 * 다시 눌러서 전체가 체크되면 전체 체크에 체크되게
 * 
 * 풀이법
 * name=pizza를 가진 체크박스의 총 갯수를 확인한다.
 * 체크 속성이 true인 체크박스의 갯수와 총갯수가 일치하면
 * 전체선택과 마찬가지이므로, checkAll에 체크를 해준다.
 * 
 * 위의 예제와 반대로, 피자로 전체를 제어함
 * input:checkbox[name=pizza]->#checkAll
 */

$("[name=pizza]").on('change',(e)=>{
    console.log("피자 개별체크");
    const $pizza = $("[name=pizza]");
    //let checkedCnt=0;
    // for(let i=0; i<$pizza.length; i++)
    // {
    //     console.log($pizza[i].checked);
    //     $pizza[i].checked && checkedCnt++;
    // }

    //위의 for문을 다른 방법으로 반복.
    //인덱스,pizza개별객체
    // $pizza.each((index,pizza)=>
    // {
    //     console.log(index,pizza);
    //     pizza.checked && checkedCnt++;
    // });

    //또 다른방법
    const checkedCnt = $("[name=pizza]:checked").length;

    $("#checkAll").prop('checked',checkedCnt==$pizza.length);
});