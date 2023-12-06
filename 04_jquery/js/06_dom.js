/**
 * 새로운 태그 객체를 생성하는 방법
 */
$(btn1).click(()=>{
    const $area = $(area1);
    
    // const $h3 = $("<h3>안녕~</h3>"); //memory상에 태그객체
    // $area.html($h3);//화면상에 추가

    //or
    const $h3 = $("<h3></h3>");
    $h3.append("ㅎㅇ");
    $area.html($h3);
});

let char=66;//B
/**
 * 기존 요소 기준 삽입메소드
 * -append 마지막 자식요소로 추가
 * -prepend 첫번째 자식요소로 추가
 * -after 다음 형제 요소로 추가
 * -before 이전 형제 요소로 추가
 */

// //append
// $(btn2).click(()=>{
//     const $target=  $(target);
//     const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
//     $target.append($new);
// });

// //prepend
// $(btn3).click(()=>{
//     const $target=  $(target);
//     const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
//     $target.prepend($new);
// });

// //after
// $(btn4).click(()=>{
//     const $target=  $(target);
//     const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
//     $target.after($new);
// });

// //before
// $(btn5).click(()=>{
//     const $target=  $(target);
//     const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
//     $target.before($new);
// });

//리팩토링
const $target=  $(target); //중복되는 변수는 전역변수로 빼놓고
$(btn2).click(()=>{
    $target.append$(`<span>${String.fromCharCode(char++)}</span>`);
});
$(btn3).click(()=>{
    $target.prepend$(`<span>${String.fromCharCode(char++)}</span>`);
});
$(btn4).click(()=>{
    $target.after$(`<span>${String.fromCharCode(char++)}</span>`);
});
$(btn5).click(()=>{
    $target.before$(`<span>${String.fromCharCode(char++)}</span>`);
});

//==============================================================
/**
 * 새 요소 기준 삽입 메소드
 * - appendTo 마지막 자식요소로 추가
 * - prependTo 첫번째 자식요소로 추가
 * - insertAfter 다음 형제요소로 추가
 * - insertBeofre 이전 형제 요소로 추가
 */

$(btn6).click(()=>{
    $(`<span>${String.fromCharCode(char++)}</span>`).appendTo($target)
    .css('color','plum');
});
$(btn7).click(()=>{
    $(`<span>${String.fromCharCode(char++)}</span>`).prependTo($target)
    .css('color','red');
});
$(btn8).click(()=>{
    $(`<span>${String.fromCharCode(char++)}</span>`).insertAfter($target)
    .css('color','green');
});
$(btn9).click(()=>{
    $(`<span>${String.fromCharCode(char++)}</span>`).insertBefore($target)
    .css('color','blue');
});

/**
 * 버튼으로 테이블에 데이터 추가하기..
 * 데이터 순서대로 추가하기. 
 * 맨 첫 줄 부터 추가하기
 * 
 * 샌드위치
 * 바게뜨
 * 통밀빵
 * 
 * json->js object
 * product->tr
 * 
 * <tr>
 * <th>상품명</th>
 * <th>가격</th>
 * </tr>
 */


$(btn10).click(()=>{

    const $tbody =  $("table#tb-product tbody");
    const data='[{"name":"통밀빵","price":5000},{"name":"바게뜨","price":4000},{"name":"샌드위치","price":5500}]';

    const data2 = JSON.parse(data);
    console.log(data2, typeof data2);

    data2.forEach(({name,price})=>{
        console.log(name+"/"+price);
        //1.tr태그로 변환
        // const $tr = $("<tr></tr>");
        // const $td1 = $("<td></td>").text(name);
        // const $td2 = $("<td></td>").text(price);
        // $tr.append($td1,$td2);

        // //2.tbody에 추가
        // $tbody.prepend($tr);


        //3.1,2를 한꺼번에
        $("<tr></tr>")
        .append($("<td></td>").text(name))
        .append($("<td></td>").text(price))
        .prependTo($tbody);

    });

});


/**
 * 부모방향
 * []:옵션 
 *  js에서는 이렇게 다룰 수 없음 jQuery강점
 * -parent([selector]) :직계 부모
 * -parents([selector]) : 조상
 * -parentUntil(selector) : 특정 태그전까지 모든 조상
 */
const style={
    color : 'red',
    border : '2px solid red'
};
$(btn11).click(()=>{
    const $src = $("span");
    console.log(
        $src
        //.parent("li") //부모중에 li태그인것만
        //.parents() //span태그를 제외한 모든 부모
        //.parents("div")//div부모
        .parentsUntil("div") //div태그전까지인 모든 부모
        .css(style)

    );
});

/**
 * 자식방향
 * -children([selector]) 직계자식
 * -find(selector) 모든 후손
 */
$(btn12).click(()=>{
    //최상위 태그 wrap 기준
    const $src = $(".wrap");
    console.log(
        $src
            //.children() //두개의 하위 div
            // .children(":has(ul)") //ul태그를 가진 후손, 즉 첫번째 div
            // .children() //첫번째 div의 자식인 ul
            .find("span") //자식들중 span태그인 것들
            .css(style)
    );
});

/**
 * js에서는 nextsiblings으로 하나씩 찾아야했는데 jQuery에서는 모든 형제 요소를 찾을 수 있음..
 * 형제 방향
 * -siblings ([selector]) 이전/다음 모든 형제
 * 
 * -next() 다음 형제 요소 하나
 * -nextAll([selector]) 다음 형제 요소 모두
 * -nextUntil(selector) 특정태그 이전 형제 요소
 * 
 * -prev() 이전 형제 요소 하나
 * -prevAll([selector]) 이전 형제 요소 모두
 * -prevUntil(selector) 특정 태그 다음 형제 요소
 */
$(btn13).click(()=>{
    const $src = $(".container h2");
    console.log(
        $src
            //.siblings("p") //형제 중 p 태그만
            //.next() //h2 기준으로 다음형제 요소 하나 h3이 나옴
            //.nextAll() // h3,h4,p
            //.nextUntil("p") p태그전까지의 형제요소
            
            //.prev() //h2 기준 이전형제요소인 h1하나
            //.prevAll() //h2 기준 이전모든형제요소
            .prevUntil("p")
            .css(style)
    );

});

/**
 * 실습문제 li2-2찾기
 * .wrap부터 찾기
 * span#fromMe부터 찾기
 */
$(btn14).click(()=>{
    //1.div.wrap에서부터 찾기
     const $src = $("div.wrap");
    console.log(
        $src
            // .find("div.test")
            // .children()
            // .children(":has(ul)")
            // .children()
            .children(":eq(2)")
            .find("li")
            .eq(3)
            .css(style)
    );

    //2.span#fromMe부터 찾기
    // const $src = $("span#fromMe");
    // console.log(
    //     $src
    //         .parent()
    //         .parent()
    //         .parent()
    //         .prev()
    //         .css(style)
    // );

});

/**
 * 자식방향
 * -children([selector]) 직계자식
 * -find(selector) 모든 후손
 */

/**
 * 부모방향
 * []:옵션 
 * -parent([selector]) :직계 부모
 * -parents([selector]) : 조상
 * -parentUntil(selector) : 특정 태그전까지 모든 조상
 */
/**
 * 형제 방향
 * -siblings ([selector]) 이전/다음 모든 형제
 * 
 * -next() 다음 형제 요소 하나
 * -nextAll([selector]) 다음 형제 요소 모두
 * -nextUntil(selector) 특정태그 이전 형제 요소
 * 
 * -prev() 이전 형제 요소 하나
 * -prevAll([selector]) 이전 형제 요소 모두
 * -prevUntil(selector) 특정 태그 다음 형제 요소
 */