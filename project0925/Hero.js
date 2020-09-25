/*게임의 주인공 비행기를 정의한다*/
class Hero{

    //주인공이 태어날때, 어떠한 초기화작업을 진행할지를 결정짓는 메서드
    //특히 생성자 메서드라 부른다..
    //아래의 생성자함수를호출하는 자는, 반드시 주인공 이미지가 붙게될 
    //부모 요소를전달해야 한다..즉 container 변수값을 결정지어야 한다..
    constructor(container,x,y,width,height){
        //생성자내에서는 반드시 변수명앞에 this를 명시해야한다..
        //왜? 객체안에서의 코드작성이므로..
        this.img=document.createElement("img");// <img>
        this.img.src="../images/shooting/plane.png";
        this.img.style.position="absolute";
        this.img.style.left=x+"px";
        this.img.style.top=y+"px";
        this.img.style.width=width+"px";
        this.img.style.height=height+"px";
        //화면에 부착하기!!
        //부모요소에 부착하자 
        container.appendChild(this.img);
    }
    
    //비행기의 동작방식을 결정짓는 메서드
    move(){

    }
}