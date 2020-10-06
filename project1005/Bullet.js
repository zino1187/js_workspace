/*총알을 정의한다*/
class Bullet{

    //총알이 태어날때 부여할 속성들을 생성자에서 처리한다..
    constructor(src, x, y, width, height, velX, velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img=document.createElement("img");
        this.img.src=this.src;//폭탄, 총알, 등등의 웨폰이 여러가지가 있으므로 변수로...
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px"; //우주선의 너비의 절반을 우측...
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        wrapper.appendChild(this.img);//화면에 부착!!
    }
    tick(){
        //총알의 물리량 변화 
        this.y+=this.velY;

        //총알이 한걸음 , 한걸음 진행할때마다 배열에 존재하는 모든~~~적군을 대상으로
        //충돌햇는지 여부를 판단할꺼임..
        for(var i=0;i<enemyArray.lenght;i++){
            var result = collisionCheck(this.img , enemyArray[i].img);
            if(result){
                console.log("맞췄어!!");
                
                //너죽(적군배열에서 요소 삭제 splice(index, 갯수), 화면에서도 삭제 removeChild)
                var img = enemyArray[i].img;
                wrapper.removeChild(img);
                enemyArray.splice(0,1);
                
                //나죽자(총알배열에서 요소 삭제splice(index,갯수), 화면에서도 삭제 removeChild)
                wrapper.removeChild(this.img);    //화면에서 제거
                var index = bulletArray.indexOf(this); //현재 총알의 인스턴스가 배열의 몇번째에
                                                                        //존재하는지..알아냄
                bulletArray.splice(index,1);
            }
        }    
    }   

    render(){
        //변화된 물리량을 화면에 표시한다(그래픽 처리)
        this.img.style.top=this.y+"px";
    }
}




