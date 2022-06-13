//process 객체에 exit 이벤트를 연결
process.on('exit', function(){
    console.log('안녕히 가거라');
});

//process 객체에 uncaughtException 이벤트를 연결
process.on('uncaughtException', function(error){
    console.log('예외가 발생했군 봐주겠다');
});

//2초 간격으로 예외를 3번 발생
var count = 0;

var id = setInterval(function(){
    //횟수 증가
    count++;

    //3번 실행시 타이머 중지
    if (count == 3){
        clearInterval(id);
    };

    //강제로 예외 발생
    error.error.error();
}, 2000);