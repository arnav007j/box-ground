class box{ 
 constructor(x,y,width,height){
     var option = {restitution:1} 
     this.body = Bodies.rectangle(x,y,width,height,option) ;
     World.add(world,this.body) ;
 }
 display(){
     var pos=this.body.position ;
     var angle = this.body.angle ;
     push() ;
     translate (pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER)
     fill(255)
     rect(0,0,this.width,this.height) 
     pop();
 }
}
    

    