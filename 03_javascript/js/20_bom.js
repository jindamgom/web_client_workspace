/**
 * navigator
 * - 브라우저(항해사) 정보 제공 객체
 */
const test1 = () =>
{
    console.log(navigator);
    console.log(navigator.userAgent);//브라우저 판단
}

/**
 * location
 * -  주소창과 관련된 기능 제공
 */
const test2 = () =>
{
    console.log(location);
    //location.href = "https://naver.com"; //페이지 이동
    //페이지 새로고침
    //location.reload();
};

/**
 * history
 * - 방문기록 관련 기능 제공
 * - 뒤로가기/앞으로가기/새로고침
 */
const test3 = () =>
{
    console.log(history);
};

/**
 * screen
 * - 브라우저가 실행중인 모니터에 대한 정보 제공
 */
const test4 = () =>
{
    console.log(screen);

//   height :모니터 높이 px
//   width : 모니터 너비 px
//   availHeight : 가용 높이
//   availWidth : 가용 너비
//   availLeft : 가용 오프셋 (왼)
//   availTop : 가용 오프셋(위)

    const width=500; //팝업창 너비
    const height=300; //팝업창 높이
    const left=(screen.width-width)/2 + screen.availLeft; 
    const top=(screen.height-height)/2 + screen.availTop;
    const popUp = 
    open("","",`width=${width},height=${height},top=${top},left=${left}`);
};

