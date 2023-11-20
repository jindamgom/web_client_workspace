/**
 * 1120 배열실습문제 1,2,3
 * 
 */

function array01()
{
    //prompt로 값을 입력받는다.
    const moviesStr = prompt('좋아하는 영화들을 입력해주세요.(,로 구분)','ex)기생충,아가씨,...');
    
    //공백 제거 /[^\s]/g 
    //moviesStr = moviesStr.replace(/[\s]/g ,'');
    //const moviesArr = moviesStr.replace(/[\s]/g ,'').split(',');
    //입력받은 값을 배열로 만든다.
    const moviesArr = moviesStr.split(',');

    //배열로 잘 만들어졌는지 확인 ok
    console.log("오름차순:",moviesArr.sort());
    alert(moviesArr.sort());

    //내림차순도 해보기
    console.log(moviesArr.sort(function(a,b){
        if(a>b) return -1; //자리교환
        if(b<a) return 1;
        return 0;
    }));
}


function array02()
{
    //push : 마지막에 요소 추가
    //pop : 마지막 요소 제거 (반환)
    //unshift : 0번지에 요소 추가
    //shifht : 0번지에 요소 제거 (반환)
    const rainbowArr = ['빨','주','노','초','파','남','보'];
    console.log(rainbowArr);

    for(let i=0; i<rainbowArr.length-1; i++)
    {
        rainbowArr.push(rainbowArr.shift());
        console.log(rainbowArr);
    }
}

function array03()
{
    const arr1 = new Array(100);
    
    for(let i=0; i<arr1.length; i++)
    {
        arr1[i] = i+1;
    }

    //reverse (mutable) 
    //const arr2 = [...arr1].reverse(); //전개연산자
    const arr2  = arr1.slice().reverse(); //slice로 복사

    console.log("리버스 결과:",arr2);
}