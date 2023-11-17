/**
 * confirm
 * -확인 true  반환
 * -취소 false 반환
 * 
 */

function test1()
{
    const bool= confirm("이 파일을 정말 삭제하시겠습니까?");
    if(bool)
    {
        //삭제
        alert('삭제완료');
    }
    else
    {
        //삭제취소    
        alert('삭제취소');
    }
}

/**
 * prompt
 * -사용자로부터 한 줄 입력을 받는 모달
 * -확인:사용자 입력값이 반환된다.
 * -취소:null 반환
 */
function test2()
{
    const name = prompt('당신의 이름은 무엇인가요?','농담곰');
    console.log(name);
    
    //boolean 자동형변환
    //값이 있는 경우, true로 변환  abc,123,-123
    //값이 없는 경우, false로 변환 null, undefined,0,0.0,""
    if(name)
    {
        //정상입력
        console.log("안녕하세요 ",name,"님!");
        //alert는 콘솔처럼 ,로 문장연결못함
        //alert("안녕하세요 "+name+"님!\n");
        alert(`^^안녕하세요 ${name}님!
                환영합니다..`);
    }
    else//null
    {
        //취소한 경우
        alert("이름을 정상적으로 입력해주세요. "+name+"님");
    }
}