/**
 * jQuery
 * -javascript 라이브러리(기능구현이 된 채로 제공되는 코드뭉치)
 * -브라우저간의 호환 이슈,DOM제어,이벤트처리 등을 간결히 사용할 수 있도록 지원함.
 * 
 * 1.jquery.js 다운로드후 서버에서 함께 제공
 * 2.CDN(Content Delivery Network)다운로드 없이 웹상의 jquery.js를 클라이언트가 직접 다운로드 받아서 사용
 *   https://jquery.com/download/ -> Download the uncompressed, development jQuery 3.7.1 
 * 
 * https://releases.jquery.com/
 * 버전중에 slim사용 지양(ajax 없음)
 * 
 * jquery방식의 이벤트 핸들러 등록
 */
$("#btn1").on('click',(e)=>{
    console.log('😎😋😊');
});
$("#btn2").on('click',(e)=>{
    console.log('🎀');
});