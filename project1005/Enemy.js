/*적군을 정의한다!!*/
class Enemy{
    //적군의 이미지가 여러형태 이므로, 매개변수로 받을것..
    constructor(src,x,y,width,height,velX,velY){
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        wrapper.appendChild(this.img);//화면에 부착!!
    }

    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}