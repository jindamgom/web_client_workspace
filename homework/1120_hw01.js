let _pLevel=0;

function printProduct()
{
    console.log("printProduct()");

    const goodlist = document.getElementById("productName");
    const pName = goodlist.value;
    //console.log(pName);
    const productAmount = document.getElementById("productAmount");
    const pCount = productAmount.value;

    const _message = document.getElementById("message");
    const _messageText = _message.value;


    const _div = document.getElementById("result");
    console.log(_div);
    _div.innerText = 
                    `상품명:${pName}
                    납품수량:${pCount}
                    납품등급:${_pLevel}
                    기타사항:${_messageText}\n`;
}

//range
function showVal()
{
    const pLevel = document.getElementById("productLevel");
    _pLevel = pLevel.value;
    const disCont = document.getElementById("pVal");

    disCont.innerHTML = _pLevel;
}