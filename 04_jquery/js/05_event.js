/**
 * mouseover/mouseout
 * -자식요소 접근시에도 이벤트 발생
 * 
 * 
 * mouseenter/mouseleave
 * -자식요소 접근시에도 이벤트 발생 안함
 * 
 */
$(".outer")
    // .mouseover(()=>{
    //     console.log('mouseover');
    // })
    // .mouseout(()=>{
    //     console.log('mouseout');
    // })
    // .mouseenter(()=>{
    //     console.log('mouseenter');
    // })
    // .mouseleave(()=>{
    //     console.log('mouseleave');
    // })

    //hover 이벤트는 존재하지 않는다..
    .hover(()=>{
        console.log('mouseenter');
    },()=>{
        console.log('mouseleave');
    });

$(title).hover((e)=>{
    $(e.target).addClass('reverse');
},(e)=>{
    $(e.target).removeClass('reverse');
});

$(counter).on('click',(e)=>{
    let n = $(e.target).html();
    $(e.target).html(--n);
    if(n==0)
    $(e.target).off('click');//이벤트핸들러 제거
});

//일회용 핸들러
$(one).one('click',(e)=>{
    console.log('일회용');
    $(e.target).html('🎄');
});

//trigger
$(trg).on('click',(e)=>{
    $(counter).trigger('click');//counter버튼의 클릭 이벤트 발생시키기
});


/**
 * 실습문제
 *  #memo를 작성하면, 실시간으로 글자수가 #len에 반영된다.
 * 30글자가 넘어가면 #len은 빨간글씨가 되고, 제출을 할 수 없어야한다.
 */
let memoLen=0;
$(memo).on('keyup',(e)=>{
    console.log('글씨가입력된다!');
    //memoLen = $(memo).val().length;
    memoLen = e.target.value.length;
    console.log(memoLen);
    $(len).html(memoLen);
    // if(memoLen>30)
    //     $(len).css('color','red');
    // else
    //     $(len).css('color','black');

    //삼항연산자로도 가능
    const color = memoLen>30? 'red':'initial';
    const fontWeight = memoLen>30? 700:400;
    $(len).html(memoLen)
    .css('color',color)
    .css('fontWeight',fontWeight);

});
// $("input[type=submit]").on('click',(e)=>
// {
//     console.log('submit클릭');
//     if(memoLen>30)
//     {
//         e.preventDefault();
//         alert('글자수를 초과하여 전송할 수 없습니다.(30글자까지만)');
//     }
// });
//or
$(document.memoFrm).submit((e)=>{
    const $memo = $(e.target.memo);
    if($memo.val().length>30)
    {
        e.preventDefault();
        alert('글자수를 초과하여 전송할 수 없습니다.(30글자까지만ㅜ)');
    }
    //초기화
    //js와 달리 jQuery객체는 초기화(reset)가 없음..이렇게 하면 오류발생.
    // $(e.target).reset();
    // $(e.target)[0].reset(); //요거나
    $(e.target).get(0).reset();//요걸로

});
