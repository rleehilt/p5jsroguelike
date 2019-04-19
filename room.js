class Room{

    constructor(x,y,_width, _height){
        this.width = _width;
        this.height = _height;
        this.x = x;
        this.y = y;
        
    }

    intersects(other){
 

         return !(this.x>other.x + other.width | this.x + this.width<other.x | 
            this.y > other.y + other.height | this.y + this.h < other.y)
         
    }

}