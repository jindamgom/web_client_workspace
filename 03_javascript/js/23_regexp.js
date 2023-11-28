/**
 * (for문으로 검사하는 것 보다 훨씬 나음..구조가 복잡해서 문제지만!)
 * 정규표현식 Regular Expression
 * -문자열에 대해서 유효성검사/검색/대체등을 처리하기 위한 표현식
 * -조건/반복처리를 내부적으로 진행. 간결하게 작성이 가능하다.
 * -문법자체 숙지가 어려운 편.
 * -언어 독립적.
 */
document.querySelector("#btn1").addEventListener('click',()=>{
    //하나의 문자가 숫자(0123456789)인지, 검사하는 정규식
    //  /[표현식]/플래그문자
    const re = /[0-9]/gi;
    const re2 = new RegExp(/[0-9]/gi);
    const re3 = new RegExp("[0-9]","gi");

    //정규식 메소드
    //RegExp#test(string):boolean
    console.log(re.test("abc1234")); //true
    console.log(re.test("xyzㅋㅋㅋ"));//false=>숫자패턴이 하나도 발견x
    
    //문자열 메소드
    //String#split(re):string[]
    console.log("a1b2c3d".split(re)); // 문자열만 ['a','b','c','d']

    //String#replace(re,newString): string
    console.log("abc-123".replace(re,'*')); //abc-***
    console.log("abc1def2ghi".replace(re,'<$&>')); //매칭된 값을 사용시$& 대체문자



    //String#match(re):{} 매칭된 결과를 배열로 반환
    console.log("a1b2c3d".match(re)); //['1', '2', '3']

    //String#search(re):number 매칭된 문자열의 인덱스 반환
    console.log("a1b2c3d".search(re));//1
    console.log("xzyㅋㅋㅎㅎㅎ".search(re));//없으면 -1반환

});

/**
 * flags 옵션
 * g:global 전역비교 수행
 * i:ignore 대소문자 구분안함
 * m:multiline 여러줄인 경우 행 단위 비교
 */
document.querySelector("#btn2").addEventListener('click',(e)=>{
    const src = 'JavaScript jQuery Ajax sass xxx';
    const area = e.target.nextElementSibling;
    console.log(area);
    area.innerHTML = `<p>${src.replace(/a/,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a/gi,'<mark>$&</mark>')}</p>`;
});

/**
 * anchor
 * -^ 시작
 * -$ 끝
 * 전체 범위를 설정할 때 시작과 끝을 지정해줘야 함.
 */
document.querySelector("#btn3").addEventListener('click',(e)=>{
    const src = 'JavaScript jQuery Ajax sass xxx';
    const area = e.target.nextElementSibling;
    console.log(area);
    area.innerHTML = `<p>${src.replace(/j/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/^j/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/xj/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/x$/gi,'<mark>$&</mark>')}</p>`;

    const src2 = `JavaScript
jQuery 
Ajax 
sass
xxx`;

area.innerHTML += `<p>${src2.replace(/^j/gim,'<mark>$&</mark>')}</p>`;
});

/**
 * 임의의 문자하나 .<-dot
 * -문자/특수문자/공백
 * -개행문자는 처리되지 않는다.
 */
document.querySelector("#btn4").addEventListener('click',(e)=>{
    // const re = /^a.b/;
    // console.log(re.test('acb')); //true
    // //=>a로 시작하고 아무글자 하나, 그리고 b인 패턴이 있는가?
    // console.log(re.test('a b')); //true
    // console.log(re.test('a*b')); //true
    // console.log(re.test('abbbbb')); //true
    // console.log(re.test('ab')); //false
    // console.log(re.test('a\nb')); //false

    //in 다음에 "한 글자"로 끝나는 문자열 검사
    const re2 = /in.$/;
    console.log(re2.test('going'));
    console.log(re2.test('inner'));
    console.log(re2.test('holydayin'));
    console.log(re2.test('joking'));
});

/**
 * [] 한글자에 대한 값 목록
 * -ascii code기반으로 범위설정 가능
 * -^으로 시작하면 반전처리 (not)
 * ^[범위] =>시작
 * [^범위] =>이 범위가 아닌것
 */

document.querySelector("#btn5").addEventListener('click',(e)=>{
    const src = `ABCGhijklmn 가나사ㅋㅋㅎㅓㅓㅏㅏ12390 !@#$%^&*() \t\n`;
    const area = e.target.nextElementSibling;
    //대괄호로 감싸면 a또는 j라고 묻는것
    area.innerHTML = `<p>${src.replace(/[aj]/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[^aj]/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/^[aj]/gi,'<mark>$&</mark>')}</p>`;

    area.innerHTML += `<p>${src.replace(/[0123456789]]/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9]/gi,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[a-z]/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[A-Z]/g,'<mark>$&</mark>')}</p>`;

    //숫자,영대,영소 검색
    //주의!!!! 영어 한꺼번에 찾는다고 A-z 라고 하면 특수문자까지 포함됨
    //영어 대문자 - 특수문자 - 영어 소문자 이렇게 범위가 지정되어있기 때문임.
    area.innerHTML += `<p>${src.replace(/[0-9A-Za-z]/g,'<mark>$&</mark>')}</p>`;
    
    //자,모음이 결합된 "온전한" 한글 한글자 
    area.innerHTML += `<p>${src.replace(/[가-힣]/g,'<mark>$&</mark>')}</p>`;
    //자음,모음,자+모음 모두 찾을 수 있음
    area.innerHTML += `<p>${src.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g,'<mark>$&</mark>')}</p>`;

    /**
     * 영대소문자 모두 포함하고싶다 할때
     * [A-z]는 불가능.=>아스키코드를 보면 A-Z와 a-z사이에 특수문자가 끼어있으므로...A-Za-z 이렇게 사용해야한다.
     * 유의사항
     * A-Z까지 허용하되 Q는 빼고싶다.
     * /[A-Z^Q]/ 이거 못씀. 반전을 의미하는 ^는 "맨 앞"에서만 사용가능
     * 이 정규식의 의미는 A-Z까지 다 되고 ^도Q도 허용한다는뜻임
     * /[A-PR-Z]/ 이렇게 하면 Q만 빠진다.
     */


    //알파벳 소문자로 "시작"하는 문자열 검사..
    const re = /^[a-z]/;
    console.log(re.test('abcde')); //true
    console.log(re.test('aㅏㅏㅏㅏ')); //true
    console.log(re.test('aBCDE')); //false
    console.log(re.test('가나다')); //false
    console.log("=====================");
    
    //숫자 4자리 검사
    //{4,} 4이상
    //{2,4} 22 , 222, 2222
    const re2= /^[0-9]{4}$/; //^[0-9][0-9][0-9][0-9]&
    console.log(re2.test('1234')); //true
    console.log(re2.test('5678')); //true
    console.log(re2.test('12345'));//flase
    console.log(re2.test('abcd')); //flase
    console.log(re2.test('ab12')); //flase
    console.log(re2.test('12')); //false

});


/**
 * 단축문자(문자하나)
 * -\d digit 숫자
 * -\w word 영문자 숫자 _
 * -\s whitespace 공백/개행/탭
 * 
 * -\D 숫자 아닌 문자
 * -\W 영문자,숫자,_아닌 문자
 * -\S 공백,개행,탭 아닌문자..
 */

document.querySelector("#btn6").addEventListener('click',(e)=>{
    const src = `ABCGhijklmn 가나사ㅋㅋㅎㅓㅓㅏㅏ12390 !@#$%^&*()_+|\t\n`;
    const area = e.target.nextElementSibling;

    //숫자만
    area.innerHTML =  `<p>${src.replace(/\d/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[0-9]/g,'<mark>$&</mark>')}</p>`;
    //영문자,숫자,_
    area.innerHTML +=  `<p>${src.replace(/\w/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[0-9A-Za-z_]/g,'<mark>$&</mark>')}</p>`;
    //공백,개행,탭
    area.innerHTML +=  `<p>${src.replace(/\s/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[ \n\t]/g,'<mark>$&</mark>')}</p>`;
    //===================================================================
    //숫자 아닌 문자
    area.innerHTML +=  `<p>${src.replace(/\D/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[^0-9]/g,'<mark>$&</mark>')}</p>`;
    //영문자,숫자,_가 아닌 문자
    area.innerHTML +=  `<p>${src.replace(/\W/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[^0-9A-Za-z_]/g,'<mark>$&</mark>')}</p>`;
    //공백,개행,탭 아닌문자
    area.innerHTML +=  `<p>${src.replace(/\S/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML +=  `<p>${src.replace(/[^ \n\t]/g,'<mark>$&</mark>')}</p>`;
});

/**
 * ()그룹핑
 * | or
 */
document.querySelector("#btn7").addEventListener('click',(e)=>{
    const src = '월요일에는 월요병, 화가 부르르르 화요일 홧병, 수수술한잔 하는 수요일, 목이 컥~ 목요일, 금방 오지 않는 금요일, 하지만 오늘은 금요일';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/(월요일|수요일|금요일)/g,'<mark>$&</mark>')}</p>`;
    //area.innerHTML = `<p>${src.replace(/([월수금]요일)/g,'<mark>$&</mark>')}</p>`;
});

/**
 * Escaping
 * - ^$|[]. 문법요소를 문자 그대로 사용하려면 \를 이용해 이스케이핑 처리 필수
 */

document.querySelector("#btn8").addEventListener('click',(e)=>{
    const src = '3.4$';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/\$/,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/\./,'<mark>$&</mark>')}</p>`;

    //[]안에서는 escaping 불필요 단 ,\는 제외
    area.innerHTML += `<p>${src.replace(/[$]/,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[.]/,'<mark>$&</mark>')}</p>`;
});

/**
 * 수량자 quatifier 
 * - a* : a가 0개 이상 
 * - a+ : a가 1개 이상
 * - a? : a가 0 또는 1개
 */
document.querySelector("#btn9").addEventListener('click',(e)=>{
    const src = 'aabc abc bc';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/a*b/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a+b/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a?b/g,'<mark>$&</mark>')}</p>`;

    //a로 시작하고, z로 끝나는 문자열을 검사.
    const re = /^a.*z$/; //test시에 g빼기
    console.log(re.test('abcdefffz')); //ture
    console.log(re.test('abz')); //true
    console.log(re.test('az')); //true
    console.log(re.test('abcdy')); //false
    console.log(re.test('dhz')); //false
    console.log(re.test('안a녕z')); //false
    console.log("========================");
    //영문자로만 이루어진 문자열 검사
    const re2 = /^[A-Za-z]+$/; //1개이상
    console.log(re.test('abcdefffz')); //true
    console.log(re.test('abc333defff11111z')); //false

});


/**
 * 수량자
 * -a{5} : a가 5개
 * -a{2,5} : a가 2개 이상 5개 이하[2,3,4,5]
 * -a{2,} : a가 2개 이상~
 * 
 * -a{,5} : 이런건 없음
 */
document.querySelector("#btn10").addEventListener('click',(e)=>{
    const src = 'aa aba abba abbba';
    const area = e.target.nextElementSibling;

    area.innerHTML += `<p>${src.replace(/ab{0,}a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab*a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab{1,}a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab+a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab{0,1}a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab?a/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/ab{1}a/g,'<mark>$&</mark>')}</p>`;


    const re = /^[0-9]{4}$/;
    console.log(re.test("1234")); //true
    console.log(re.test("12345")); //false
    console.log(re.test("123")); //false
    console.log(re.test("bacd")); //false

});


/**
 * 탐색 Look Around
 * -탐색구문은 조회에 사용되고, 매칭결과에는 반영되지 않는다.
 * -전방탐색 Look ahead
 *   - a(?=b) b가 뒤따르는 a를 검색
 *   - a(?!b) b가 뒤따르지 않는 a를 검색
 * -후방탐색 Look behind
 *   - (?<=b)a b가 앞에 있는 a를 검색
 *   - (?<!b)a b가 앞에 없는 a를 검색
 */
document.querySelector("#btn11").addEventListener('click',(e)=>{
    const area = e.target.nextElementSibling;
    const src1='hello world hello tom hello jain hello world';

    //world가 뒤따르는 hello를 찾고싶다
    area.innerHTML = `<p>${src1.replace(/hello(?= world)/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src1.replace(/hello(?! world)/g,'<mark>$&</mark>')}</p>`;

    const src2 = 'hello world lotte world t world';
    area.innerHTML += `<p>${src2.replace(/(?<=hello) world/g,'<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src2.replace(/(?<!hello) world/g,'<mark>$&</mark>')}</p>`;
});

/**
 * 비밀번호 정책
 * -문자 8~12자리
 * -영문자 포함
 * -숫자포함
 * -특수문자 포함(!@#$%^&*())포함
 * 
 */
document.querySelector("#password").addEventListener('blur',(e)=>{

    const regExps = [/^.{8,12}$/
                    ,/[a-z]/i //i 뜻:대소문자 무시 즉, 영문자면 조건에 맞음.
                    ,/[0-9]/ //숫자
                    ,/[!@#$%^&*()]/]; //특문조건시 ^ 맨앞에 넣지말것 [반전의 뜻]
    const value = e.target.value;

    //문자 8~12자리
    if(!regExps[0].test(value))
    {
        alert('비밀번호는 8~12자리여야 합니다..');
        return;
    }

    //영문자 포함
    if(!regExps[1].test(value))
    {
        alert('영문자를 하나 이상 포함해야 합니다.');
        return;
    }

    //숫자 포함
    if(!regExps[2].test(value))
    {
        alert('숫자를 하나 이상 포함해야 합니다.');
        return;
    }

    //특수문자 포함
    if(!regExps[3].test(value))
    {
        alert('특수문자(!@#$%^&*())를 하나 이상 포함해야 합니다.');
        return;
    }

    alert("🤞유효한 비밀번호 입니다 수고하셨습니다.🤞");

});





















/**
 * @실습문제 주민번호
 * -6자리 생년월일-7자리 숫자
 * -alert() 등
 * -'유효한 주민번호입니다'
 * -'유효하지 않은 주민번호 입니다..'
 *  
 *  123456-1234567 o
 *  1234567-12345555 x
 *  123-12345 x
 *  abcdef-1234567 x
 *  1234561234567 x (-빠져도)
 * 
 */
document.querySelector("#btn-ssn").addEventListener('click',(e)=>{
  
    const ssnStr = document.querySelector("#ssn");
    console.log(ssnStr.value);

    const re= /^[0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/; 
    const re2= /^\d\d\d\d\d\d-\d\d\d\d\d\d\d$/; 
    if(re2.test(ssnStr.value))
    {
        console.log("유형 유효o");
        alert('유효한 주민번호입니다.');
    }
    else{
        console.log("유형 유효x");
        alert('유효하지않은 주민번호 입니다.');
        e.preventDefault();
        return;
    }
    console.log(re2.test('1234')); //true
    //숫자와 하이픈 외에 문자가 있는 경우도 유효하지 않다.


    
    //area.innerHTML = `<p>${src.replace(/([월수금]요일)/g,'<mark>$&</mark>')}</p>`;
});