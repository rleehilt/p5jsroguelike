const directions = {
  NORTH: 1,
  EAST: 2, 
  SOUTH: 4, 
  WEST: 8

}

class Cell{
  
  constructor(x,y, walk, fov){
      this.x = x;
      this.y = y;
      this.isWalkable = walk; 
      this.blocksFOV = fov;
      this.walls = {NORTH: true, EAST:true, SOUTH:true, WEST:true}
    
      
  }
  
  show(map){  
    stroke(255)
    if(this.walls.NORTH){      
     line(this.x*map.scale, this.y*map.scale, (this.x+1)*map.scale, this.y*map.scale)
    }
    if(this.walls.EAST){
      line((this.x+1)*map.scale, this.y*map.scale, (this.x+1)*map.scale, (this.y+1)*map.scale)
    }
    if(this.walls.SOUTH){
    line(this.x*map.scale, (this.y+1)*map.scale, (this.x+1)*map.scale, (this.y+1)*map.scale)
    }
    if(this.walls.WEST){
    line(this.x*map.scale, this.y*map.scale, this.x*map.scale, (this.y+1)*map.scale);
    }
    }
  }

  function cellAt(x,y){
    return x + (y*map.width);
  }
  

