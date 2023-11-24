/**
 * 모든 태그객체는 node와 element를 상속한다.
 * 
 * nodevalue
 * 
 * Node
 *  -textNode (자식x)
 *  -commentNode (자식x)
 *  -Element (자식o)
 * -Element(태그객체)
 * 
 * -Node#appendChild
 * -Element#append
 */
document.querySelector("#btn1").addEventListener('click',()=>{
    const sample = document.querySelector("#sample");
    console.dir(sample);
    console.dir(Node.prototype);
});

/**
 * 새로운 요소
 * 1.innerHTML
 * 2.Tag객체로 만들어서 DOM Tree에 추가
 * 
 */
document.querySelector("#btn2").addEventListener("click",()=>{
    const h2 = document.createElement("h2"); //<h2></h2>
    const text = document.createTextNode("HelloWorld"); //'HelloWorld'
    h2.appendChild(text); // <h2>HelloWorld</h2>
    //---여기까지는 메모리에만 올라옴, 아직 화면에 적용x----
    
    document.querySelector("#target").appendChild(h2);
    //=>이 작업이 끝나면 div안에 <h2>HelloWorld</h2> 추가   
    //=document.querySelector("#target").innerHTML ='<h2>HelloWorld</h2>';

    //한줄로 끝낼 수있는걸 여러번 하는이유..이벤트로 다루기가 쉽다.
    //이벤트 핸들러
    h2.addEventListener("mouseover",()=>{
        console.log('수박...🍉');
    });
});

document.querySelector("#btn3").addEventListener('click',()=>{
    const img = document.createElement("img");//<img/>
    img.src='../sample/image/hyunta.jpg';
    img.alt='현타 개';
    img.width='200';
    //img.style.width='200px';
    //혹은 img.style='width:200px';

    //innerHTML 사용불가
    document.querySelector('#target').appendChild(img);
});

/**
 * 요소 제거
 * -remove() 스스로 제거
 * -removeChild(child) 자식요소 제거
 * 
 */
//foo스스로 제거
document.querySelector("#btn4").addEventListener('click',()=>{
    const foo = document.querySelector("#foo");
    foo.remove();
});
//list가 foo 제거
document.querySelector("#btn5").addEventListener('click',()=>{
    const list = document.querySelector("#list");
    const foo = document.querySelector("#foo");
    list.removeChild(foo);

    //모든 자식요소 제거하기
    //첫번째 자식요소를 계속 삭제.
    while(list.removeChild)
    {
        list.removeChild(list.firstChild);
    }
});


//querySelector는 맨 위의 1개만 찾아줍니다 
//querySelectorAll은 해당사항을 다 찾아줘서 [0] 이런거 붙여야합니다


/**
 * DOM Treaversing
 * -특정요소에서 DOM트리를 따라 다음요소를 찾아가는 방식
 * 
 * 1.Node
 * -자식 firstChild | lastChild | childNodes
 * -부모 parentNode
 * -형제 nextSibling | previousSibling
 * 
 * 2.Element(★주로 이 방식을 사용)
 * -자식 firstElementChihld | lastElementChild | children
 * -부모 parentElement
 * -형제 nextElementSibling | previousElementSibling
 */
document.querySelector('#btn6').addEventListener('click',()=>{
    const src = document.querySelector('.wrapper');
    const p1 = src.firstElementChild;
    const p5 = src.lastElementChild;
    const p = src.children;
    console.log(src,p1,p5,p);
    p1.style.color = 'hotpink';
});

document.querySelector("#btn7").addEventListener('click',()=>{
    const src = document.querySelector("#p3");
    const parent = src.parentElement;
    console.log(src, parent);
});

document.querySelector("#btn8").addEventListener('click',()=>{
    const src = document.querySelector("#p3");
    const anoter = src.previousElementSibling.previousElementSibling;
    const prevSibling = src.previousElementSibling;
    const nextSibling = src.nextElementSibling; //p4
    console.log(src,anoter,prevSibling,nextSibling);
});

/**
 *<button id="btn9">
    @실습:.wrapper하위 p태그의 내용을 🥦n으로 변경</button> 
 */

document.querySelector('#btn9').addEventListener('click',()=>{
    const wrapper = document.querySelector('.wrapper');

    /**
     * wrapper.children 유사배열이라 진짜배열로 변경후 
     * foreach사용
     */
    //Array.from(wrapper.children)
    [...wrapper.children].forEach((child,index)=>{
        const newText = document.createTextNode(`🥦${index+1}`);
        child.removeChild(child.firstChild);//node계열의 속성(text,comment,element)
        child.appendChild(newText);
    });
   
   
});
