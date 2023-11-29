/**
 * https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
 * https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
 * Promise
 * -비동기 작업(producing code)+콜백(consuming code)를 명쾌히 작성하는 문법
 * -Promise객체는 두 가지 상태값을 가진다
 *  1)status : pending -> fulfiled(정상) | rejected(실패)
 *  2)result : undefined -> value | errer 객체
 * -Promise객체는 두개의 callback함수를 가진다.
 *  1)resolve : 정상처리 된 경우 호출하는 콜백
 *  2)reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector("#btn1").addEventListener('click',()=>{
    //프로미스 생성
    //const promise = new Promise();

    //Promise에 전달하는 함수
    //resolve 함수
    //reject 함수
    const promise = new Promise((resolve,reject)=>{
        //난수를 생성하여 짝수면 정상 / 홀수면 오류라 가정하기
        try{
            const n = Math.trunc(Math.random()*100+1); //1~100사이 난수
            console.log(n,':난수가 생성되었다.');
            if(n%2==0) resolve(n); //n=>Promise#result
            else
                throw new Error(n+"은 홀수라서 실패!");
        }catch(e)
        {
            //여기서 리젝트 처리
            reject(e);//e:넘겨받은 에러객체이자 promise#result
        }
    });

    //callback 작성
    promise.then((value)=>{
        //성공시 콜백
        console.log(`🎇${value}🎆`);
    },(err)=>{
        //실패시 콜백
        console.error(`😥${err}😑`);
    });
    console.log(promise);
});


document.querySelector("#btn2").addEventListener('click',()=>{
    delay(3000).then(()=>{
        //콜백함수[3초이후 처리]
        console.log('🤑');
    });
    //2초후에 🍙🍙출력
    //프로미스객체.then
    delay(2000).then(()=>{
        console.log('🍙🍙');
    });
});

/**
 * 비동기인 setTimeout (promise내부에) / 콜백은 then절에
 */
const delay = (millis) =>{
    return new Promise((resolve,reject)=>{
        //비동기 작업
        setTimeout(()=> resolve(),millis);
    });
}

document.querySelector("#btn3").addEventListener('click',()=>{
    loadScript('js/24_test.js')
        .then(()=>{
        test();
    });
});

const loadScript = (src) => new Promise((resolve) =>{
    const script = document.createElement('script');
    script.src = src;
    script.onload=resolve;//바인딩.load이벤트 발생시, resolve(핸들러) 호출
    
    document.head.append(script);//비동기
});

/**
 * Promise Chain
 * - promise 는 promise를 반환한다.
 * - Promise는 연속적으로 사용할 수 있다.
 * - 콜백 지옥을 then지옥으로 대체.
 * - 암묵적으로 프라미스 객체 반환(반환한 값이 있다면, 새 Promise의 result값으로 사용된다!
 * - 명시적으로 Promise 객체를 반환할 수 있다.
 */
document.querySelector("#btn4").addEventListener('click',()=>{
    // result값 반환
    new Promise((resolve)=>{
        //비동기 작업
        resolve(2);
    }).then((value)=>{
        //콜백처리
        console.log(value);//2
        return value*2; 
    }).then((value)=>{
        console.log(value);//4
        return value*10;
    }).then((value)=>{
        console.log(value);//40
    });

    //promise 객체 반환
    template(3)
    .then((value)=>{
        console.log(value);
        return template(value*2);//명시적으로 promise에 리턴
    })
    .then((value)=>{
        console.log(value);
        return template(value*2);//명시적
    })
    .then((value)=>{
        console.log(value);
        return template(value*2);//명시적
    })
    .then((value)=>{
        console.log(value);
        return template(value*2);//명시적
    });
    //위에서부터 순차적으로 실행됨

    //1초 후에 🍗, 1초 후에 🍙출력, 1초후 에 🍜출력..
    food(1000)
    .then(()=>{
        console.log('🍗');
        return food(1000);
    })
    .then(()=>{
        console.log('🍙');
        return food(1000);
    })
    .then(()=>{
        console.log('🍜');
        return food(1000);
    })

    
});
/**
 * 1.changeBGColor : promise 객체를 반환하는 함수하나,(비동기작업)
 * 2.then절 (콜백함수)
 */
const box = document.querySelector(".box");
document.querySelector("#btn5").addEventListener('click',()=>
{
    changeBGColor('red',1000)
    .then(()=>{
        console.log('1');
        return changeBGColor('orange',1000);
    })
    .then(()=>{
        console.log('2');
        return changeBGColor('yellow',1000);
    })
    .then(()=>{
        console.log('3');
        return changeBGColor('green',1000);
    })
    .then(()=>{
        console.log('4');
        return changeBGColor('skyblue',1000);
    })
    .then(()=>{
        console.log('5');
        return changeBGColor('blue',1000);
    })
    .then(()=>{
        console.log('6');
        return changeBGColor('purple',1000);
    })
});

// const changeBGColor = (color,millis) =>{
//     return new Promise((resolve,reject)=>{
//         //비동기 작업
//         box.style.backgroundColor=color;
//         setTimeout(()=> resolve(),millis);
//     });
//     }
const changeBGColor= (color,millis) => new Promise((resolve)=>{
    setTimeout(()=>{
        box.style.backgroundColor=color;
        resolve();//resolve를 실행해야 primose체인가능
    },millis);
});


/**
* 비동기인 setTimeout (promise내부에) / 콜백은 then절에
*/
const food = (millis) =>{
return new Promise((resolve,reject)=>{
    //비동기 작업
    setTimeout(()=> resolve(),millis);
});
}
//프로미스 객체를 반환하는 함수 template
const template = (value) => new Promise((resolve)=>
{
    resolve(value); //콜백함수
});