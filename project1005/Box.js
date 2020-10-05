/*충돌 체크를학습하기 위한 박스 객체 정의*/
class Box{
    constructor(bg, x, y){
        //객체가 보유한 인스턴스 변수들..
        this.div=document.createElement("div");
        this.bg=bg; //인스턴스의 색상 결정
        this.x=x; //인스턴스의 x좌표 결정
        this.y=y; //인스턴스의 y좌표 결정
        this.width=100;
        this.height=100;

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.color="white";//글씨색상 흰색

        document.body.appendChild(this.div); //화면에 부착!!
    }        
}