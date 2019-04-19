class Room{

    constructor(x,y,_width, _height){
        this.width = _width;
        this.height = _height;
        this.x = x;
        this.y = y;
        
    }

    intersects(other){
            //(500 < windowsize && windowsize < 600)
        if(this.x < other.x + other.width && this.x +this.width > other.x &&
            this.y > other.y+ other.height && this.y+ height < other.y){
            return false;
        } else { return true;}


    }

}