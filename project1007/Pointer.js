/*썸네일 선택시 따라다닐 포인터 정의*/
class Pointer{
    constructor(container,width, height,bd,x,y,targetX){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd; //보더두께
        this.x=x;
        this.y=y;
        this.a=0.1;
        this.targetX=targetX;

        //스타일 적용 
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid red";
        this.div.style.boxSizing="border-box";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        //컨테이너에 부착!!
        this.container.appendChild(this.div);
    }

    tick(){

    }
    render(){

    }
}
