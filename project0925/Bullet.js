/*총알을 정의한다*/
class Bullet{
    constructor(container, x, y,velX){
        this.x=x;//총알의 x 좌표
        this.y=y;//총알의 y좌표
        this.velX=velX;//총알의 속도를 결정짓는 변수
        this.img=document.createElement("img");
        this.img.src="../images/shooting/ball.png";
        this.img.style.width=30+"px";
        this.img.style.height=30+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";//주인공의 좌표와 관련
        this.img.style.top=this.y+"px";//주인공의 좌표와 관련
        container.appendChild(this.img);
    }

    move(){
        this.x+=this.velX;
        this.img.style.left=this.x+"px";
    }
}