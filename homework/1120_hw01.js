let _pLevel=0;

// function printProduct()
// {
//     console.log("printProduct()");

//     const goodlist = document.getElementById("productName");
//     const pName = goodlist.value;
//     //console.log(pName);
//     const productAmount = document.getElementById("productAmount");
//     const pCount = productAmount.value;

//     const _message = document.getElementById("message");
//     const _messageText = _message.value;


//     const _div = document.getElementById("result");
//     console.log(_div);
//     _div.innerText = 
//                     `상품명:${pName}
//                     납품수량:${pCount}
//                     납품등급:${_pLevel}
//                     기타사항:${_messageText}\n`;
// }

//range
// function showVal()
// {
//     const pLevel = document.getElementById("productLevel");
//     _pLevel = pLevel.value;
//     const disCont = document.getElementById("pVal");

//     disCont.innerHTML = _pLevel;
// }

//=====================================================================================
function showVal(){
    const productLevelVal = document.getElementById("productLevel").value;
    document.getElementById("pVal").innerHTML = productLevelVal;
}

function printProduct(){
    const result = document.getElementById("result");

    const productNameVal = document.getElementById("productName").value;
    const productLevelVal = document.getElementById("productLevel").value;
    const productAmountVal = document.getElementById("productAmount").value;
    const messageVal = document.getElementById("message").value;

    const txt = `상품명 : ${productNameVal}
납품등급 : ${productLevelVal}
납품수량 : ${productAmountVal}
기타사항 : ${messageVal}
입력하신 내용이 맞습니까?`;
    const bool = confirm(txt);

    if(bool){
        result.innerHTML += "상품명 : " + productNameVal + "<br>";
        result.innerHTML += "납품등급 : " + productLevelVal + "<br>";
        result.innerHTML += "납품수량 : " + productAmountVal + "<br>";
        result.innerHTML += "기타사항 : " + messageVal + "<br>";
    }

}