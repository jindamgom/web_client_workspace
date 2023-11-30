/**
 * filter관련 메소드
 * -jQuery객체 안의 요소를 필터링한 jQuery 객체를 "반환"
 * 
 * -filter(selector)
 * -first()
 * -last()
 * -eq(n)
 * -not(selector)
 * 
 */
$(btn1).on('click',()=>{
    const $h4 = $("h4");
    console.log($h4);
    console.log(
    $h4
    //.filter(".test")
    //.first()
    //.last()
    //.eq(3)
    .not('.test')
    .css('color','tomato')
    .end() //필터링 전 상태로 돌아가는 메소드 (prevObject)
    .css('text-decoration','underline')
    );
});