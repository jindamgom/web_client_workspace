/**
 * innerHTML
 * -getter : 자식 태그가 포함된 내용을 반환
 *            안녕하세요 저는 <mark>신사임당</mark>입니다.
 * -setter : 내용을 설정. html 태그처리(dom에 등록)
 */
const foo = document.querySelector("#foo");
const bar = document.querySelector("#bar");
function test1()//innerHTML는 문자열
{
    //const foo = document.querySelector("#foo");
    console.log(foo.innerHTML); //getter

    //const bar = document.querySelector("#bar");
    bar.innerHTML = foo.innerHTML; //setter(bar.innerHTML) + getter
}

/**
 * innerText(=textContent)
 * -getter : 자식 html을 제외한 내용을 반환
 *            안녕하세요 저는 신사임당입니다.
 * -setter : text로서 내용 추가(html태그도 문자로 처리됨)
 *           안녕하세요. 저는 <mark>신사임당</mark>입니다.
 *           
 */
function test2()
{
    //const foo = document.querySelector("#foo");
    console.log(foo.innerText);//getter

   // const bar = document.querySelector("#bar");
    bar.innerText = foo.innerHTML; //setter
    //안녕하세요. 저는 <mark>신사임당</mark>입니다.
    //으로 나오면서 mark로 칠해져야할 부분이 태그채로 노출됨
}

/**
 * outerHTML
 * -getter : 태그 자신을 포함해서 자식태그까지 반환
 * -setter : 태그 자신을 교체
 */
function test3()
{
    console.log(foo.outerHTML);
    //<p id="foo">안녕하세요. 저는 <mark>신사임당</mark>입니다.</p>
    foo.outerHTML = "<p id='soo'>안녕</p>";
}