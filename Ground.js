class Ground{

    constructor(x,y,w,h){
        let options={
            isStatic:true
        
        }
        
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.width = w
        this.height = h
        World.add(world,this.body)



    }
    show(){
        let pos = this.body.position
        fill("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)

    }


}