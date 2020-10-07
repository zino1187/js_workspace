/*영화 이미지 썸네일을 정의한다!!*/
class Thumbnail{
    constructor(container, width, height, bd, src){
        this.container=container; //어디에 넣을지 컨테이너를 동적으로 받자
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bd=bd; //보더 두께 
        this.img=document.createElement("img");
        this.src=src;
        
        //스타일 부여 
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.border=this.bd+"px solid blue";
        this.div.style.boxSizing="border-box";
        this.img.style.boxSizing="border-box";
        this.img.src=this.src; //이미지 대입
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //조립 
        this.div.appendChild(this.img);//div에 이미지 넣기 
        this.container.appendChild(this.div);
    }   

}