class Room{

    constructor(x,y,_width, _height){
        this.width = _width;
        this.height = _height;
        this.x = x;
        this.y = y;
        
    }

    intersects(other){
 

        if(this.x+this.width<other.x | other.x + other.width<this.x | 
            this.y + this.height< other.y | other.y + other.height<this.y)
            {
                return false;
            } else {
                return true;
            }
    }

}