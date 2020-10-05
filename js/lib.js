/*---------------------------------------------------
두수 a,b에 대한 절대값을 반환하는함수!!
---------------------------------------------------*/
function getAbs(a, b){
    return Math.abs(a-b); //함수를 호출한 실행부가 결과를 가지고 
                                    //호출한곳으로 되돌아감
}

/*---------------------------------------------------
랜덤 구하는 함수 I
n을 넣으면, 0~n까지 포함하여 반환하는 함수
---------------------------------------------------*/
function getRandom(n){
    //3
    var r = Math.random();  //1 보다 작은 실수  0.0xxx ~ 0.9xxxxx
    return Math.floor((n+1) * r); //소수점을 버린다
}

/*---------------------------------------------------
랜덤 구하는 함수 II
ex)  7과 10 사이의 랜덤값 을 반환.
a: 7 ( 최소값)
b:10 (최대값)
---------------------------------------------------*/
function getRandomBetween(min , max){
    //일단 최소값이상은 무조건 확보되어야 한다..즉 반환되어야 한다..  
    //return Math.floor(Math.random()*(max-min+1)) +min;       
    return getRandom(max-min) +min;      
}


/*---------------------------------------------------
숫자에 0을 붙인 날짜처리
매개변수, 즉 인수로 수를 전달하면, 함수내에서 알아서 0을 붙여줌
(두자리 한자리 판단마져도 여기에서 알아서 해줌)
---------------------------------------------------*/
function getZeroDate(n){
    if(n<10){//n이 10보다 작으면 0을 접두어로 붙이자 
        n="0"+n;
    }
    return n;
}


function hitTest(me, target , nextX , nextY) {
    //두물체간 충돌 여부 판단 
    me_x= parseInt(me.div.style.left);
    me_y= parseInt(me.div.style.top);
    me_width=parseInt(me.div.style.width);
    me_height=parseInt(me.div.style.height);


    target_x= parseInt(target.div.style.left);
    target_y= parseInt(target.div.style.top);
    target_width=parseInt(target.div.style.width);
    target_height=parseInt(target.div.style.height);

    nextX=parseInt(nextX);
    nextY=parseInt(nextY);

    var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
    var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
    var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
    var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
    return (result1 || result2) && (result3 || result4);
}




