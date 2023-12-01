/**
 * display 속성
 * -show(sepeed,easing, callback)
 * -hide(sepeed,easing, callback)
 */
$(btn1).click(()=>{
    $(river1).show(1000,'linear',()=>{
        alert('보이십니까??');
    });
})
$(btn2).click(()=>{
    //이미지 영역이 사라짐. none 처리된다.
    //실제로 요소를 보면 display none이다.
    //visibility:hidden 자리는남김
    $(river1).hide(1000,()=>{
        alert('이제는 안보입니다.');
    });
})

/**
 * 블라인드 효과가 적용된 display
 * -slide down(speed, easing, callback):노출
 * -slide up(speed, easing, callback): 숨김
 */
$(btn3).click(()=>{
    $(".menu").next().slideDown();
});

$(btn4).click(()=>{
    $(".menu").next().slideUp();
});

// $(".menu").click((e)=>{
//     //누른 객체에 대한 타겟[각각의]
//     $(e.target).next().slideToggle();
// });

$(".menu").click((e)=>{
    //누른 객체에 대한 타겟[각각의]
    $(e.target).next().slideToggle().siblings(".content").slideUp();
});

/**
 * opacitiy/display 효과연출
 * -fadeIn(speed,easing,callback)
 * -fadeOut(speed,easing,callback)
 * -fadeToggle
 * -fadeTo(speed,opacity)
 */
$(btn5).click(()=>{
    $(flower1).fadeIn(500);
});

$(btn6).click(()=>{
    $(flower1).fadeOut(300);
});

$(flower2).hover((e)=>{
    $(e.target)
    .fadeTo(300,1)
    .css('trasnform','scale(1.1)')
    },(e)=>{
        $(e.target).fadeTo(300,.5)
        .css('transform','scale(1)')

});