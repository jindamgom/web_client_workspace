/**
 * Object.assign(js)
 */
$(btn1).click(()=>{
    const obj1={
        name : '통밀빵',
        price : 5000
    };
    const obj2={
        name : '바게뜨빵',
        color :['brown','choco'],
        createdAt : '2023-12-07'
        };
    
    const newObj = Object.assign({},obj1,obj2);
    console.log(newObj);

    //얕은 복사 확인
    console.log(newObj,obj1,obj2);
    
    obj2.color[0] = 'black'; //newObj.color[0]도 변경이 된다..
    //obj2와 newObj는 다른객체지만 같은 color배열을 참조하고있다


});

/**
 * $.extend (jQuery)
 */
$(btn2).click(()=>{
    const obj1={
        name : '통밀빵',
        price : 5000
    };
    const obj2={
        name : '바게뜨빵',
        color :['brown','choco'],
        createdAt : '2023-12-07'
        };
    
    //const newObj = $.extend({},obj1,obj2); //얕은복사
    const newObj = $.extend(true,{},obj1,obj2);//깊은복사
    console.log(newObj,obj1,obj2);

    obj2.color[0] = 'black';//newObj.color[0]도 변경이 된다..

});

/**
 * jQuery 객체 확장
 * -$.extend - static 메소드 추가 $.foo() : static
 * -$.fn.extend - jQuery 객체에 메소드 추가 $(...).foo() : non-static
 */
$(btn3).click(()=>{
    $.extend({
        colorize(elem,color){
            elem.style.color = color;
        }
        }
    );

    console.log($.colorize);
    $.colorize(document.querySelector("#title"),'red');
});

$(btn4).click(()=>{
    $.fn.extend({
        colorize(color){
            //this용법7:jquery.fn확장객체의 메소드 안 this는 현재 jquery 객체

            console.log(this);//jQuery.fn.init [h1#title]
            this.css('color',color);
            return this;//반드시 작성
            /**
             * 모든 fn 메소드들이 return this를 가지고 있음
             */
        },
        bgColorize(color){
            console.log(this);
            return this.css('background-color',color);
        }
    });
    $("#title")
    .bgColorize('plum')
    .colorize('blue')
    .css('font-size','100px'); //이 코드를 실행.

    
});


//$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
//  });