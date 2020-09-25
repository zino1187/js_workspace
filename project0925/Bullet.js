/*총알을 정의한다*/
class Bullet{
    constructor(container, x, y){
        this.img=document.createElement("img");
        this.img.src="../images/shooting/ball.png";
        this.img.style.width=30+"px";
        this.img.style.height=30+"px";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";//주인공의 좌표와 관련
        this.img.style.top=y+"px";//주인공의 좌표와 관련
        container.appendChild(this.img);
    }
    
    move(){

    }
}