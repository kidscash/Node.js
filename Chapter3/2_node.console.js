//console.log('숫자: %d + %d = %d', 273, 52, 273 + 52);
//console.log('문자열: %s', 'Hello World .. !', '특수 기호와 상관 없음');
//console.log('JSON: %j', {name : 'RinIanTta'});

//시간 측저 시작
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++){
    output *= i;
}

console.log('Result: ', output);

//시간 측정 종료
console.timeEnd('alpha');