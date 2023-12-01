//선택자를 받고 객체를 돌려줘야한다.

const $ = (selector)=>{
    return new jinQuery(selector);  
};

//클래스안에 내가 원하는 작업을 구현.
class jinQuery{

    constructor(selector){
        const elems = document.querySelectorAll(selector);
        this.length = elems.length;
        for(let i=0; i<elems.length; i++){
            this[i] = elems[i];
        }
    }


    css(name,value)
    {
        for(let i=0; i<this.length; i++){
            this[i].style[name] =value;
        }
        return this;
    }     

    click(f)
    {
        for(let i=0; i<this.length; i++){
            this[i].addEventListener('click',f);     
        }
        return this;
    }

    
    html(text)
    {
        for(let i=0; i<this.length; i++){
            console.log(this[i]);
            this[i].innerHTML=text;
        }
        return this;
    }


}